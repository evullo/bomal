<script setup lang="ts">
import prices from '@/assets/json/price.json'
import HeaderTwoItem from '@/components/items/HeaderTwoItem.vue'
import RowItem from '@/components/items/RowItem.vue'
</script>

<template>
  <section
    class="md:w-[75%] md:mx-auto my-4"
    v-for="(price, priceIndex) in prices"
    :key="priceIndex"
  >
    <HeaderTwoItem>{{ price.title }}</HeaderTwoItem>
    <RowItem
      v-for="(product, productIndex) in price.quantities"
      :key="productIndex"
      :left-item="product.quantity"
      :right-item="product.price"
    />
  </section>
</template>
