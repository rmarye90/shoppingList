<script setup>
    const props = defineProps({
        name: String,
        price: Number,
    });
</script>

<template>
    <div flex gap-1>
        <input type="checkbox" />
        <p>{{ name }} - ${{ price }}</p>
    </div>
</template>