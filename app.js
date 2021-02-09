fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));


const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    for(let i = 0; i < countries.length; i++){
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        //----LIST CREATE======//

       // countryDiv.className = 'country';
        // const li = document.createElement('li');
        // li.innerText = country.name;
        // ul.appendChild(li);



        const countryInfo = `
        <h3 class = "country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);  
    }
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));

}

const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>Population: ${country.area}</p>
    <img src="${country.flag}">
    `
}