import {defineStore} from 'pinia'
import { ref } from 'vue'
import { fetchAllCountries, fetchCountriesByParam} from '../services/countriesApi'


export const useCountriesStore = defineStore('countryStore',()=> {
const countries = ref([])

const getAllCountries = async () => {
    const response = await fetchAllCountries()
    countries.value = response
}

const filterCountries = async (searchValue:string, filterValue: string) => {
    if(searchValue === '') {
        getAllCountries()
        return
    }
    try {
        const response = await fetchCountriesByParam(searchValue, filterValue)
        countries.value = response
    } catch (error) {
        console.log(error)
        countries.value = []
    }
}


return {getAllCountries,filterCountries, countries }

})