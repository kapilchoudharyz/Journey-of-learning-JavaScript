"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map, mapEvent;

class App {
  constructor() {
    this.#getPosition();
  }

  #getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap,
        function () {
          alert("Please turn on Location and reload!");
        },
        { enableHighAccuracy: true }
      );
    }
  }

  #loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    map = L.map("map").setView(coords, 13);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    map.on("click", function (mapE) {
      mapEvent = mapE;
      form.classList.remove("hidden");
      inputDistance.focus();
    });
  }

  #showForm() {}

  #hideForm() {}

  #toggleElevationField() {}

  #newWorkout() {}
}

const app = new App();
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       console.log(position);
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//       const coords = [latitude, longitude];
//       map = L.map("map").setView(coords, 13);
//
//       L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
//         maxZoom: 20,
//         subdomains: ["mt0", "mt1", "mt2", "mt3"],
//       }).addTo(map);
//
//       map.on("click", function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove("hidden");
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert("Please turn on Location and reload!");
//     }
//   );
// }
// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const { lat, lng } = mapEvent.latlng;
//
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         minWidth: 100,
//         maxWidth: 250,
//         autoClose: false,
//         closeOnClick: false,
//         className: "running-popup",
//       })
//     )
//     .setPopupContent(inputType.value)
//     .openPopup();
//
//   form.classList.add("hidden");
//   form.reset();
// });
