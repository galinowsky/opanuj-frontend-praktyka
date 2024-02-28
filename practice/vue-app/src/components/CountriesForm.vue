<script setup lang="ts">
import { ref, watchEffect, onMounted, computed } from 'vue';
import { useCountriesStore } from '../stores/countryStore';

const countriesStore = useCountriesStore();


//Aplikacja pozwala na filtrowanie po wybranej właściwości: waluta, język, 
//stolica lub nazwa państwa ← wybierz jedną, API nie pozwala filtrować po kilku właściwościach na raz :c.
//Aplikacja wyświetla: nazwę państwa oraz flagę.
//Aplikacja pozwalać na sortowanie: alfabetyczne, po wielkości populacji.
// type Country = {
//   name: string | number | symbol | undefined;
// }
type filterOptions = 'name' | 'currency' | 'lang' | 'capital' 
const filterBy = ref<filterOptions>('name');
const searchValue = ref<string>('');
const countires = computed(()=>countriesStore.countries)

onMounted(() => {
  countriesStore.getAllCountries();
});



watchEffect(() => {
  if (searchValue.value.length >= 3) {
    console.log('jalo')
    countriesStore.filterCountries(searchValue.value, filterBy.value);

  }
  if (searchValue.value.length < 3) {
    countriesStore.getAllCountries();
  }
});


</script>

<template>
      <form className="space-x-4 flex items-end justify-center">
      <label className="flex flex-col">
        Name
        <input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Country Name"
          v-model="searchValue"
        />
      </label>
      <label className="flex flex-col">
        Search by
        <select
        v-model="filterBy"
        @change="() => console.log(filterBy)"
        >
          <option value="name">Country Name</option>
          <option value="currency">Currency</option>
          <option value="lang">Language</option>
          <option value="capital">Capital</option>
        </select>
      </label>
      <label className="flex flex-col">
        Sort by
        <select
        >
          <option value="">Name</option>
          <option value="name">Population</option>
        </select>
      </label>
    
    </form>
    <ul class="ml-[15px]" v-if="countires">
        <li   v-for="country in countires" :key="country.name">
        <div class="w-full">
          {{country.flag}} {{ country.name.common }}</div>
        </li>
      </ul>
</template>


<style scoped>

</style>