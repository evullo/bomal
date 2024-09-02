<script setup lang="ts">
import HeaderOneItem from '@/components/items/HeaderOneItem.vue'
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import ContactFormComponent from '@/components/ContactFormComponent.vue'
</script>

<template>
  <main class="w-11/12 bg-orange-100 mx-auto rounded-md px-4 py-2 my-5 md:w-9/12">
    <HeaderOneItem>Header 1</HeaderOneItem>
    <ParagraphItem>Paragraph item</ParagraphItem>

    <ContactFormComponent></ContactFormComponent>
  </main>
</template>
