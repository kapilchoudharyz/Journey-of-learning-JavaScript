const validInputs = (...inputs) => inputs.every((inp) => Number.isFinite(inp));
const allPositive = (...inputs) => inputs.every((inp) => inp > 0);
evt.preventDefault();

//Get the data from the form.
const type = inputType.value;
const distance = +inputDistance.value;
const duration = +inputDuration.value;

//If activity running, create running object
if (type === "running") {
  const cadence = +inputCadence.value;
  //Check if data is valid.
  if (
    // !Number.isFinite(distance) ||
    // !Number.isFinite(duration) ||
    // !Number.isFinite(cadence)
    !validInputs(distance, duration, cadence) ||
    !allPositive(distance, duration, cadence)
  )
    return alert("Input have to be number");
}
//If activity cycling, create cycling object
if (type === "cycling") {
  const elevation = +inputElevation.value;
  //Check if data is valid.
  if (
    // !Number.isFinite(distance) ||
    // !Number.isFinite(duration) ||
    // !Number.isFinite(elevation)
    !validInputs(distance, duration, elevation) ||
    !allPositive(distance, duration)
  )
    return alert("Input have to be number");
}
