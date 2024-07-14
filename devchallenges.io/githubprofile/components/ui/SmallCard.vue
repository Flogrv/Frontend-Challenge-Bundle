<template>
    <div class="flex max-w-xs items-center">
        <div class="flex bg-[#111729] px-4 py-4 rounded-2xl justify-between gap-6">
            <div class="space-y-2">
                <span class="text-[#4A5567]">{{ title }}</span>
            </div>
            <UDivider orientation="vertical" />
                <span class="text-l font-semibold text-center">{{ value }}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.custom-card {
    background-color: #111729;
}
</style>
