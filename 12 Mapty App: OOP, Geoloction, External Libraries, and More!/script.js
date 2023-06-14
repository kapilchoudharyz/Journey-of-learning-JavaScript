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

// let map, mapEvent;

class Workout {
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([55, 15], 15, 1.5, 5);
// const cycle1 = new Cycling([-55, 15], 5, 55, 500);
// console.log(run1, cycle1);
class App {
  #map;
  #mapEvent;

  constructor() {
    this.#getPosition();
    form.addEventListener("submit", this.#newWorkout.bind(this));
    inputType.addEventListener("change", this.#toggleElevationField);
  }

  #getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
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
    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(this.#map);
    this.#map.on("click", this.#showForm.bind(this));
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;

    form.classList.remove("hidden");
    inputDistance.focus();
  }

  #hideForm() {
    form.classList.add("hidden");
    form.reset();
  }

  #toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  #newWorkout(evt) {
    evt.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 100,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        })
      )
      .setPopupContent(inputType.value)
      .openPopup();

    this.#hideForm();
  }
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
// inputType.addEventListener("change", function () {
//   inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
//   inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
// });
