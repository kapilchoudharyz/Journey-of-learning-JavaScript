'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`
    ) //Setting the method and url of the api
    request.send() // Sending request to api. Api returns the data in JSON so data to be converted to object.
    let data
    // console.log(request.responseText) // Logs nothing.
//Response from the api is in responseText
    request.addEventListener('load', function () {
        [data] = JSON.parse(this.responseText) //Array containing object so destructured.
        console.log(data)
        console.log(data.name.common)
        const dataLang = Object.entries(data.languages)[0][1]
        const dataCur = Object.entries(data.currencies)[0][1].name
        const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${dataLang}</p>
            <p class="country__row"><span>💰</span>${dataCur}</p>
          </div>
        </article>
    `
        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = '1'
    })
}
getCountryData('India')
getCountryData('usa')
getCountryData('germany')
getCountryData('nepal')
*/
/*
const renderCountry = function (data, className = "") {
  const dataLang = Object.entries(data.languages)[0][1];
  const dataCur = Object.entries(data.currencies)[0][1].name;
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${dataLang}</p>
            <p class="country__row"><span>💰</span>${dataCur}</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
};
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`); //Setting the method and url of the api
  // request.send()  Sending request to api. Api returns the data in JSON so data to be converted to object.

  console.log(request.responseText); // Logs nothing.
  // Response from the api is in responseText
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); //Array containing object so destructured.
    console.log(data);
    console.log(data.name.common);
    //Render country 1
    renderCountry(data);
    //Get Neighbour country (2)
    const neighbours = data.borders;
    if (!neighbours) return;
    neighbours.forEach((neighbour) => {
      console.log(neighbour);
      const requestData = new XMLHttpRequest();
      requestData.open(
        "GET",
        `https://restcountries.com/v3.1/alpha/${neighbour}`
      );
      requestData.send();
      requestData.addEventListener("load", function () {
        const [neighbourData] = JSON.parse(this.responseText);
        console.log(neighbourData);
        renderCountry(neighbourData, "neighbour");
      });
    });
  });
};
getCountryAndNeighbour("India");

getCountryAndNeighbour("USA");
console.log("Working");
*/
/*
const renderCountry = function (data, className = '') {
  const dataLang = Object.entries(data.languages)[0][1];
  const dataCur = Object.entries(data.currencies)[0][1].name;
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} Million</p>
            <p class="country__row"><span>🗣️</span>${dataLang}</p>
            <p class="country__row"><span>💰</span>${dataCur}</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};
const renderError = function (error) {
  countriesContainer.insertAdjacentText('afterbegin', error);
};
////////////////////////////////////////
//Modern way of making ajax call using Fetch.
///////////////////////

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`); //Setting the method and url of the api
// request.send(); // Sending request to api. Api returns the data in JSON so data to be converted to object.

//Making a simple get request.
//Promise:-An object that is used as a placeholder for the future result of an asynchronous operation.
// const request = fetch(`https://restcountries.com/v3.1/name/india`);
// console.log(request);
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`) //Returns a promise
//     .then(function (response) {
//       //Handling the promise.
//       console.log(response);
//       return response.json(); //Returns another promise which we will have to handle again.
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);
//     }); //Handling the promise returned by the then method.
// };
//Note:--> then method always returns a promise
const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbours = data[0].borders;
      if (!neighbours) return;
      // return fetch();
      //Chaining promises to get the neighbouring countries.
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbours[0]}
      `); //whatever we return here becomes fulfilled value of the promise returned by then method.
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], 'neighbour'))
    //Handling rejected promises.
    .catch((error) => {
      console.error(error.message);
      renderError(`${error.message} `);
    })
    .finally(() => console.log('Your request was successful'));

  // (err) => alert(err.message) //Catching the error if fetch returns error.
};
btn.addEventListener('click', function () {
  getCountryData('india');
});
getCountryData('bcsnxmkaj');

*/
const countryData = function () {
  fetch('');
};

function whereAmI(lat, lng) {
  console.log(lat, lng);
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      console.log(response);
      if (!response.ok && response.status === 403) {
        throw new Error(
          `Couldn't get request from the api ${response.status} because of too many request.`
        );
      }
      return response.json();
    })
    .then((response) => {
      console.log(`you are in ${response.state} ${response.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then((response) => {})
    .catch((err) => console.log(err.message));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
// setInterval(()=> whereAmI(55, 125), 0.5)
