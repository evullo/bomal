<script setup lang="ts">
import PositionRowItem from '@/components/items/PositionRowItem.vue'
import positions from '@/assets/json/position.json'
</script>

<template>
    <section class="my-4">
        <PositionRowItem
            v-for="(position, index) in positions"
            :key=index
            :position=position.position
            :dates=position.dates>
        </PositionRowItem>
    </section>
</template>