<script setup lang="ts">
import { onMounted, ref } from 'vue';

const API_URL = 'http://localhost:3005/api/data/users?timeout=5000';

const users = ref([]);
const isFetching = ref(false);
const isError = ref(false);
let baseTimeout = 3000;

const fetchUsers = async () => {
  const controler = new AbortController();
  const signal = controler.signal;
  isError.value = false;
  setTimeout(() => {
    controler.abort();
    baseTimeout = baseTimeout * 2;
  }, baseTimeout);
  try {
    isFetching.value = true;
    const data = await fetch(API_URL, { signal });
    const parsedData = await data.json();
    users.value = parsedData.users;
  } catch (error) {
    isError.value = true;
  } finally {
    isFetching.value = false;
  }
};

onMounted(async () => {
  await fetchUsers();
});
</script>

<template>
  <div>
    <div className="flex flex-row items-center justify-between py-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex flex-row items-center">
        <p className="mr-2" v-if="isError">
          Sorry, there seems to be connectivity issues...
        </p>
        <button
          className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
          @click="fetchUsers"
          v-if="isError"
        >
          Try again
        </button>
      </div>
    </div>
    <ul className="space-y-2">
      <li
        v-for="user in users"
        :key="user"
        className="bg-white p-4 rounded-md border border-gray-100"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
