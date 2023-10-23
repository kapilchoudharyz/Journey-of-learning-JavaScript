'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  // clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  setDescription() {
    // prettier-ignore
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  // click() {
  //   this.clicks++;
  // }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this.setDescription();
  }

  calcPace() {
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this.setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([55, 15], 15, 1.5, 5);
// const cycle1 = new Cycling([-55, 15], 5, 55, 500);
class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 15;
  #workouts = [];

  constructor() {
    this.#getPosition();
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.#moveToPopup.bind(this));
    //Get data from the local storage.
    this.#getLocalStorage();
  }

  #getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert('Please turn on Location and reload!');
        },
        { enableHighAccuracy: true }
      );
    }
  }

  #loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(this.#map);
    this.#map.on('click', this.#showForm.bind(this));
    this.#workouts.forEach((work) => {
      this.#renderWorkoutMarker(work);
    });
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;

    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    form.style.display = 'none';
    form.classList.add('hidden');
    form.reset();
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(evt) {
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);
    evt.preventDefault();

    //Get the data from the form.
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    //If activity running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //Check if data is valid.
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input have to be number');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //If activity cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //Check if data is valid.
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(elevation)
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input have to be number');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    //Add new object to work out array
    this.#workouts.push(workout);
    this.#renderWorkout(workout);
    this.#hideForm();
    //Render Workout on map as marker.
    this.#renderWorkoutMarker(workout);
    this.#setLocalStorage();
  }

  #renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          minWidth: 100,
          maxWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃' : '🚴'} ${workout.description}`
      ) //Always takes in a string.
      .openPopup();
  }

  #renderWorkout(workout) {
    let html = `<li class='workout workout--${workout.type}' data-id='${
      workout.id
    }'>
           <h2 class='workout__title'>${workout.description}'</h2>
           <div class='workout__details'>
             <span class='workout__icon'>'${
               workout.type === 'running' ? '🏃' : '🚴'
             }' </span>
             <span class='workout__value'>${workout.distance}</span>
             <span class='workout__unit'>km</span>
           </div>
           <div class='workout__details'>
             <span class='workout__icon'>⏱</span>
             <span class='workout__value'>${workout.duration}</span>
             <span class='workout__unit'>min</span>
           </div>`;
    if (workout.type === 'running') {
      html += `<div class='workout__details'>
           <span class='workout__icon'>⚡️</span>
           <span class='workout__value'>${workout.pace.toFixed(1)}</span>
           <span class='workout__unit'>min/km</span>
         </div>
         <div class='workout__details'>
           <span class='workout__icon'>🦶🏼</span>
           <span class='workout__value'>${workout.cadence.toFixed(1)}</span>
           <span class='workout__unit'>spm</span>
         </div>
        </li>`;
    }
    if (workout.type === 'cycling') {
      html += ` <div class='workout__details'>
           <span class='workout__icon'>⚡️</span>
          <span class='workout__value'>${workout.speed.toFixed(1)}</span>
           <span class='workout__unit'>km/h</span>
         </div>
         <div class='workout__details'>
           <span class='workout__icon'>⛰</span>
           <span class='workout__value'>${workout.elevationGain}</span>
           <span class='workout__unit'>m</span>
         </div>
       </li>`;
    }
    //Render workout on list.
    form.insertAdjacentHTML('afterend', html);
  }

  #moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    // workout.clicks();
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach((work) => {
      this.#renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
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
