<script setup>
import ShoppingItem from "./ShoppingItem.vue";

const props = defineProps({
  productsList: Array,
});
</script>

<template>
  <div>
    <h1 mb-2>Shopping List</h1>
    <ul list-none p-0>
      <li v-for="item in productsList" :key="item.id">   
        <ShoppingItem :name="item.name" :price="item.price" />
      </li>
    </ul>

  </div>
</template>
