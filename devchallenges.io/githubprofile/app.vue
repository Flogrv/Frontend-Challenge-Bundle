<template>
    <AppHeader />
    <UContainer class="px-11 max-w-4xl sm:px-10">
        <AppMain />
        <RepoCardcontainer/>
        <AppFooter />
    </UContainer>
    <!-- <ColorScheme> -->
    <!--     <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /> -->
    <!-- </ColorScheme> -->
</template>

<style>
body {
    background-color: #20293a;
    font-family: "be vietnam pro", sans-serif;
}
</style>
