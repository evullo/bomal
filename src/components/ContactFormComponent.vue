<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: ''
    })

    const handleSubmit = async () => {
      try {
        const response = await fetch(
          'https://public.herotofu.com/v1/ba9bf2d0-694f-11ef-a47e-99b828684d15',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
          }
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        alert('Message envoyé avec succès!')
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
        alert("Erreur lors de l'envoi du message.")
      }
    }

    return {
      form,
      handleSubmit
    }
  }
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col my-4">
      <label for="name">Nom:</label>
      <input class="rounded-md px-2 py-1" type="text" id="name" v-model="form.name" required />
    </div>
    <div class="flex flex-col mb-4">
      <label for="email">Email:</label>
      <input class="rounded-md px-2 py-1" type="email" id="email" v-model="form.email" required />
    </div>
    <div class="flex flex-col">
      <label for="message">Message:</label>
      <textarea
        class="rounded-md px-2 py-1"
        id="message"
        v-model="form.message"
        required
      ></textarea>
    </div>
    <div class="flex justify-center items-center my-4">
      <button
        class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-500 ease-in-out"
        type="submit"
      >
        Envoyer
      </button>
    </div>
    <div
      style="text-indent: -99999px; white-space: nowrap; overflow: hidden; position: absolute"
      aria-hidden="true"
    >
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
    </div>
  </form>
</template>
