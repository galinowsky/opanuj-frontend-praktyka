<script setup lang="ts">

import {  DefaultApi } from './api-client/src';
const api = new DefaultApi();

const { results: characters } = await api.getCharacters();

// const characterId = 1; // Example character ID
console.log(characters)


</script>
<template>
  <h1>Hello jaja</h1>
</template>
