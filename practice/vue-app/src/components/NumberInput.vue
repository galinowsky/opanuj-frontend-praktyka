<template>
  <input
    className="rounded-md shadow-md p-4"
    type="number"
    v-model="model"
  />
</template>
<script lang="ts" setup>
const model = defineModel()
</script>