<template>
  <header>
    <div class="relative max-h-[620px] h-[80vh]">
      <picture>
        <source media="(max-width: 810px)" srcset="~./assets/hero-image-mobile.png">
        <source media="(min-width: 811px)" srcset="~./assets/hero-image.jpg">
        <img class="object-cover object-center w-full h-full absolute" src="~./assets/hero-image-mobile.png" alt="">
      </picture>
      <div class="absolute top-48 text-primary-color px-16 lg:px-[112px] xl:px-[140px]">

        <h1 class="text-6xl leading-[4.5rem] font-semibold">Peace, nature, dream</h1>
        <h2 class="text-2xl mt-2">Find and book a great experience.</h2>
      </div>
    </div>
    <SearchFilters />
  </header>
</template>
