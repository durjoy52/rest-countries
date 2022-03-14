const allCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url).then(res => res.json()).then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryHtml = countries.map(country => showCountry(country))
    const countriesField = document.getElementById('countries')
    countriesField.innerHTML = countryHtml.join(' ')
}

