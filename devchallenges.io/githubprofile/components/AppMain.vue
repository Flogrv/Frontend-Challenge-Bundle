<template>
    <div class="flex m-auto">
<div class="flex flex-col sm:flex-row gap-4">
            <div class="relative xs:mr-8 bottom-4 flex-shrink-0 self-start">
                <UAvatar
                    src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                    size="3xl"
                    borderRadius="none"
                    :ui="{ rounded: 'rounded-md' }"
                    :style="{
                        boxShadow: '0 0 0 8px #20293a',
                    }"
                />
            </div>
            <div class="flex flex-col lg:flex-row m-auto lg:gap-5 ml-6">
                <uiSmallCard
                    class="mt-4 m-right-2"
                    v-for="(item, index) in infoItems"
                    :key="index"
                    :title="item.title"
                    :value="item.value"
                />
            </div>
        </div>

    </div>
    <div class=" m-auto mt-6">
        <h1 class="text-3xl">Github</h1>
        <p class="text-gray-300 mt-2">How people build software</p>
    </div>

</template>

<script setup>
const infoItems = [
    { title: "Followers", value: "42" },
    { title: "Following", value: "0" },
    { title: "Location", value: "San Francisco" },
];
</script>
