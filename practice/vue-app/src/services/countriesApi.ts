const fetchAllCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    return data
}

const fetchCountriesByParam = async (name: string, filter:string) => {
    const response = await fetch(`https://restcountries.com/v3.1/${filter}/${name}`)
    const data = await response.json()
    return data
}




export { fetchAllCountries, fetchCountriesByParam}