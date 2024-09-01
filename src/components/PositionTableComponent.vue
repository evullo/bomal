<script setup lang="ts">
import RowItem from '@/components/items/RowItem.vue'
import positions from '@/assets/json/position.json'
</script>

<template>
  <section class="my-4">
    <RowItem
      v-for="(position, index) in positions"
      :key="index"
      :left-item="position.position"
      :right-item="position.dates"
    >
    </RowItem>
  </section>
</template>
