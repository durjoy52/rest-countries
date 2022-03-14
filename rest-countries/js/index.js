const allCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url).then(res => res.json()).then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryHtml = countries.map(country => showCountry(country))
    const countriesField = document.getElementById('countries')
    countriesField.innerHTML = countryHtml.join(' ')
}

const showCountry = ({name,flags,area}) => {
    return `<div class ="country">
    <h2>${name.common}</h2>
    <p>area: ${area}</p>
    <img src="${flags.png}">
    </div>`
}
allCountries()

