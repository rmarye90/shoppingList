<script setup>
import { ref } from 'vue';
import ShoppingList from './components/ShoppingList.vue';

const productsList = ref([
  { id: 1, name: 'Banana', price: 1 },
  { id: 2, name: 'Apple', price: 2 },
  { id: 3, name: 'Orange', price: 3 },
  { id: 4, name: 'Mango', price: 4 },
  { id: 5, name: 'Pineapple', price: 5 },
]);
</script>

<template>
  <ShoppingList :products-list="productsList"/>
</template>
