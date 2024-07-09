<script setup lang="ts">
import ButtonItem from '@/components/items/ButtonItem.vue'
import HeaderOneItem from '@/components/items/HeaderOneItem.vue'
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import HeaderTwoItem from '@/components/items/HeaderTwoItem.vue'
import HomeImageComponent from '@/components/HomeImageComponent.vue'
import UlHomeComponent from '@/components/UlHomeComponent.vue'
</script>

<template>
  <div class="w-11/12 bg-orange-100 mx-auto rounded-md px-4 py-2 my-5 md:w-9/12">
    <section>
      <HeaderOneItem>
        Bienvenue chez Bomal !
      </HeaderOneItem>

      <ParagraphItem>
        Plongez dans l’univers gourmand de notre commerce de foire. Nous vous proposons une sélection
        irrésistible de <b class="font-semibold">croustillons, lackmans, churros</b> et bien d’autres
        sucreries qui raviront vos papilles.
      </ParagraphItem>
    </section>

    <HomeImageComponent />

    <section>
      <HeaderTwoItem>
        Découvrez Nos Produits
      </HeaderTwoItem>

      <UlHomeComponent />
    </section>

    <section>
      <HeaderTwoItem>
        Suivez Nous
      </HeaderTwoItem>

      <ParagraphItem class="mb-4">
        Ne manquez aucune de nos apparitions en suivant notre calendrier des événements et prenez
        connaissance de nos tarifs.
      </ParagraphItem>

      <div class="flex items-center justify-center gap-4 mb-5">
        <ButtonItem to="position">Nos fêtes</ButtonItem>
        <ButtonItem to="pricing">Nos tarifs</ButtonItem>
      </div>
    </section>
  </div>
</template>
