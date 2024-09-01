<script setup lang="ts">
import HeaderOneItem from '@/components/items/HeaderOneItem.vue'
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import PositionTableComponent from '@/components/PositionTableComponent.vue'
import HeaderTwoItem from '@/components/items/HeaderTwoItem.vue'
</script>

<template>
  <main class="w-11/12 bg-orange-100 mx-auto rounded-md px-4 py-2 my-5 md:w-9/12">
    <section>
      <HeaderOneItem> Trouvez votre prochain rendez-vous gourmand</HeaderOneItem>
      <ParagraphItem>
        Que vous ayez envie de savourer nos fameux Lackmans, de délicieux croustillons tout juste frits ou d'autres sucreries irrésistibles, cette page vous permettra de toujours savoir où nous trouver.
      </ParagraphItem>
      <HeaderTwoItem>Liste de nos fêtes</HeaderTwoItem>
      <PositionTableComponent></PositionTableComponent>
    </section>
  </main>
</template>
