//variables
var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';

   resp.forEach(function(item){
    var liEl = document.createElement('li');
    liEl.innerText = "The country you have choosen is "+ item.name + " with " + item.population + " habitants which capital is " + item.capital+".\n\n";
    var img = document.createElement('img');
    img.setAttribute('src', item.flag);
    img.setAttribute('width', 32);
    img.setAttribute('height', 32);
    liEl.appendChild(img);

    countriesList.appendChild(liEl);
});
}


