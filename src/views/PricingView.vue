<script setup lang="ts">
import HeaderOneItem from '@/components/items/HeaderOneItem.vue'
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import PricingTableComponent from '@/components/PricingTableComponent.vue'
</script>

<template>
  <main class="w-11/12 bg-orange-100 mx-auto rounded-md px-4 py-2 my-5 md:w-9/12">
    <HeaderOneItem>Nos délices sucrés à prix doux</HeaderOneItem>
    <ParagraphItem>
      Que vous craquiez pour nos irrésistibles lackmans, nos croustillons dorés, ou encore nos
      autres sucreries, vous trouverez ici des gourmandises de qualité à des tarifs accessibles.
      Consultez nos tarifs et préparez-vous à succomber à la tentation lors de votre prochaine
      visite !
    </ParagraphItem>
    <PricingTableComponent></PricingTableComponent>
  </main>
</template>
