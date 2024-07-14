const BASE_URL = "https://api.github.com";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const q = query.q as string;

  try {
    const response = await $fetch(`${BASE_URL}/search/users`, {
      params: { q },
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    return response.items || [];
  } catch (error) {
    console.error(
      "Erreur lors de la recherche d'utilisateurs sur GitHub:",
      error,
    );
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de la recherche d'utilisateurs sur GitHub",
    });
  }
});
