`use strict`;
let btnsShowModal = document.querySelectorAll('.show-modal'); //We can not use queryselector here because it only selects the first element with class show-modal, so instead of queryselector we used querySelectorAll
//While using querySelectorAll we get a nodelist which is like an array
let btnCloseModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
// let hidden
// console.log(btnsShowModal);

const showModal = function () {
//   console.log('Button clicked');
  modal.classList.remove('hidden'); //We can use this method to remove classes
  overlay.classList.remove('hidden'); //We can check if class exist and add classes
};

const closeModal = function () {
  modal.classList.add('hidden'); //We added add method to add a class to the dom using js.
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal); //Here we have specified the function which will be executed when we will click the button.We didnot called the function like closemodal() this because it will be executed as soon as it is called. Instead what we want to do is that the function should be executed when we clicked the button.

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  //The information about the key which we pressed as soon as the event was triggered this informationn about which key was pressed is stored by the js in an object and we can acces that object in event handler function. We have to pass this function a parameter which is e here and when the button will be clicked the functions will be called and passed event object as argument.
  // console.log('A key was pressed!');
//   console.log(e.key); //We used e.key because we use .property to acces any property in an object
  //Keydown even is fired as soon as we press down the key.
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    // console.log('Escape key was pressed');
    //this statement is executed when both conditions are true which are escape key is pressed and the modal class list does not contain the class hidden .
        closeModal() 
    
  }
});
