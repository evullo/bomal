<script setup lang="ts">
import HeaderOneItem from '@/components/items/HeaderOneItem.vue'
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import HeaderTwoItem from '@/components/items/HeaderTwoItem.vue'
</script>

<template>
  <main class="w-11/12 bg-orange-100 mx-auto rounded-md px-4 py-2 my-5 md:w-9/12">
    <section class="mb-4">
      <HeaderOneItem> Votre voyage gourmand en images</HeaderOneItem>
      <ParagraphItem>
        Ici, vous découvrirez en images l'ambiance chaleureuse et conviviale de notre stand
        itinérant. Nos clichés capturent la beauté dorée de nos lackmans ou la légèreté de nos
        croustillons.
      </ParagraphItem>

      <HeaderTwoItem>Nos délices devant vos yeux</HeaderTwoItem>

      <GalleryComponent></GalleryComponent>

      <HeaderTwoItem>À bientôt sur la route !</HeaderTwoItem>

      <ParagraphItem>
        Que vous soyez déjà un habitué de nos douceurs ou que vous souhaitiez découvrir ce qui vous
        attend lors de notre prochain arrêt, ces images sont une invitation à nous rejoindre pour
        vivre une expérience gourmande et mémorable. Au plaisir de vous retrouver bientôt sur la
        route, là où les sourires se mêlent aux saveurs !
      </ParagraphItem>
    </section>
  </main>
</template>
