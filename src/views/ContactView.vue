<script setup lang="ts">
import HeaderOneItem from '@/components/items/HeaderOneItem.vue'
import ParagraphItem from '@/components/items/ParagraphItem.vue'
import LinkComponent from '@/components/LinkComponent.vue'

const entries = [
  {
    header: 'Suivez-nous sur Facebook',
    paragraph:
      'Restez informé de nos prochains emplacements et des nouveautés en nous suivant sur notre page Facebook.',
    linkDescription: 'Notre page Facebook',
    link: 'https://www.facebook.com/p/Ets-Bomal-100057480758934/?locale=fr_FR'
  },
  {
    header: 'Chattez avec Nous sur Messenger',
    paragraph:
      'Vous avez une question rapide ou envie de discuter directement avec nous ? Lancez une conversation sur Messenger et nous vous répondrons dans les plus brefs délais.',
    linkDescription: 'Notre Messenger',
    link: 'https://www.facebook.com/messages/t/524478967910723?locale=fr_FR'
  },
  {
    header: 'Envoyez-nous un Email',
    paragraph:
      'Pour des demandes plus détaillées ou des suggestions, envoyez-nous un email. Nous vous répondrons dès que possible !',
    linkDescription: 'Notre email',
    link: 'mailto:enzo.vullo@proton.me'
  }
]
</script>

<template>
  <main class="w-11/12 bg-orange-100 mx-auto rounded-md px-4 py-2 my-5 md:w-9/12">
    <HeaderOneItem>Restons connectés</HeaderOneItem>
    <ParagraphItem>
      Que vous ayez des questions, des suggestions, ou que vous souhaitiez simplement discuter avec
      nous, plusieurs moyens de nous joindre s'offrent à vous. Choisissez votre façon préférée de
      nous contacter et rejoignez-nous pour échanger !
    </ParagraphItem>

    <LinkComponent v-for="(data, index) in entries" :link-to="data.link" :key="index">
      <template #header>{{ data.header }}</template>
      <template #paragraph>
        {{ data.paragraph }}
      </template>
      <template #link>{{ data.linkDescription }}</template>
    </LinkComponent>
  </main>
</template>
