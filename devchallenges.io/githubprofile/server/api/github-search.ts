const BASE_URL = "https://api.github.com";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function getUserDetails(username: string) {
  const userDetails = await $fetch(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "User-Agent": "YourAppName",
    },
  });

  const repos = await $fetch(`${BASE_URL}/users/${username}/repos`, {
    params: { sort: 'stars', per_page: 4 },
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "User-Agent": "YourAppName",
    },
  });

  return {
    ...userDetails,
    top_repos: repos.map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url,
      description: repo.description,
      updatetime: repo.updated_at
    }))
  };
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const q = query.q as string;

  if (!q) {
    throw createError({
      statusCode: 400,
      statusMessage: "Le paramètre de recherche 'q' est requis",
    });
  }

  try {
    const searchResponse = await $fetch(`${BASE_URL}/search/users`, {
      params: { q, per_page: 1 }, // Limite à 10 résultats pour éviter trop de requêtes
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "YourAppName",
      },
    });

    const detailedUsers = await Promise.all(
      searchResponse.items.map(user => getUserDetails(user.login))
    );

    return detailedUsers.map(user => ({
      login: user.login,
      id: user.id,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
      name: user.name,
      bio: user.bio,
      location: user.location,
      followers: user.followers,
      following: user.following,
      public_repos: user.public_repos,
      top_repos: user.top_repos
    }));

  } catch (error: any) {
    console.error("Erreur lors de la recherche d'utilisateurs sur GitHub:", error);
    const statusCode = error.response?.status || 500;
    const statusMessage = error.response?.statusText || "Erreur interne du serveur";
    throw createError({
      statusCode,
      statusMessage: `Erreur lors de la recherche d'utilisateurs sur GitHub: ${statusMessage}`,
    });
  }
});
