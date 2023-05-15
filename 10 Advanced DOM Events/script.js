"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
////////////////////////////////////////////////////
//////////////////////////////////////
/*
//How the DOM really works
//The DOM is basically the interface between the Javascript and the browser or more specifically HTML documents that are rendered in and by the browser.

//Selecting, creating, and Deleting Elements.

//Selecting Elements

//Selecting whole document(HTML)
// console.log(document.documentElement) //Entire HTML is logged

//Selecting head and body
// console.log(document.head)
// console.log(document.body)

//Using special selectors
//These selectors are not only available for all the elements. We use it to select child element.

const header = document.querySelector(".header"); //returns the first element that matches this selector here
const allSections = document.querySelectorAll(".section"); //Returns the node list of all the elements with the selector section
console.log(header);
console.log(allSections);

document.getElementById("section--1"); //Selecting the element with id
//Selecting elements by tag name
//When we select elements by tag name we get a Live HTML collection.
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
//Difference between nodeList and Live HTML collection is that Live HTML collection updated automatically when the DOM changes but same does not happen with Node list.
console.log(document.getElementsByClassName("btn")); //Returns live HTML collection.

//getElementByClassName and getElementByTagName returns Live HTML collection.

//Creating and inserting Elements.

//Creating element using insertAdjacentHTML
//We can create html element using insertAdjacentHTML method.
//The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
//there are two parameters in insertAdjacentHTML(position, text)

//position--> A string representing the position relative to the element. Must be one of the following strings:-
//"beforebegin"
// Before the element. Only valid if the element is in the DOM tree and has a parent element.
//
// "afterbegin"
// Just inside the element, before its first child.
//
// "beforeend"
// Just inside the element, after its last child.
//
// "afterend"
// After the element.
//text-->The string to be parsed as HTML or XML and inserted into the tree.

//Creating HTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookies for improved functionality and analytics' //For inserting text in the newly created div but this div is still not inserted in DOM itself
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>'; //Created innerHTML in newly created Div

//Inserting the newly created div
// header.prepend(message)
//Prepend inserts the newly created message element as the first child of the header element.

header.append(message); // append inserts the newly created message element as the last child of the header element.
//Note:-> The newly created element is changed from first child to last child because it is unique. It will not be inserted at both the places if we use both append and prepend on the same element.

//For Inserting element as first and last child of header we have to clone it.
// header.append(message.cloneNode(true))

//Before and After method
// header.before(message) //Insert the message before the header as a sibling
// header.after(message) //Insert the message after the header as a sibling

//Note:-> Every element is unique so it can not exist at different places without cloning.

//Delete Element

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove() //Removes the element from the DOM
    //The remove method is recently added previously it was done as below
    message.parentElement.removeChild(message);
  });

//Styles, Attributes and Classes.

//Styles
// we set styles as following--> element.style.property = 'String with property value'
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
//Note:--> These styles are set as Inline styles so these have the highest precedence.
console.log(message.style.color); //logs nothing
//We can not get the properties from the css file as above. We can only get css inline property as above.
// we can use getComputedStyle for getting the properties of an element.
console.log(getComputedStyle(message)); //It returns an object with all the properties and values.
//Note:-> getComputedStyle returns computed values which appears on the browser.

//We can get specific values as below
console.log(getComputedStyle(message).height); //It returns 50px
console.log(Number.parseFloat("450.6px", 10));
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//Working with css variables(Custom properties(:root))

document.documentElement.style.setProperty("--color-primary", "orangered");
//We can use setProperty method  to set all the properties for all the elements.

//Attributes(classes, id, src etc.)

const logo = document.querySelector('.nav__logo')
console.log(logo.alt)//returns alt
console.log(logo.src)//returns absolute URL - http://127.0.0.1:8080/img/logo.png
//For absolute url we have to use getAttribute method
console.log(logo.getAttribute('src'))// returns relative URL img/logo.png
console.log(logo.className)//returns class

//Non-standard attributes returns undefined as below
// console.log(logo.designer)//undefined

// But we can get the value of non-standard attributes as below
console.log(logo.getAttribute('designer'))//kapil is logged

// We can also set value of attributes as below
logo.alt = 'minimalist logo'//alt of logo is set to 'minimalist logo'

//setAttribute--> Using this method we can create and set its value
logo.setAttribute('Company', 'Bankist') //Creates a new attribute company='Bankist'

const link = document.querySelector('.nav__link--btn')
link.getAttribute('href')
//So we can use getAttribute to get any attribute.
console.log(link.href)
//Note:-> getAttribute returns relative Url and element.attributeName returns absolute Url

//Data Attributes -> attribute should start with Data
//Data attributes are used to store data in the UI
//We can access data attributes as below. Remember that dataset the attribute should be written in camelCase(in below example versionNumber)
console.log(logo.dataset.versionNumber) //Logs 3.0

//Classes
//Adding classes
//We can add multiple classes by passing in multiple values.
logo.classList.add('c', 'j')//Adds the class
logo.classList.remove('c')//Removes the class
logo.classList.toggle('c')//If class exist then remove if do not exist then adds the class.
console.log(logo.classList.contains('j'))//True if the class exist otherwise false

//We can also use className But we DO NOT use it because it overwrites all the pre-existing classes/
// logo.className = 'Kapil'
*/

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e){
  let scroll1 = section1.getBoundingClientRect()
  console.log(scroll1.top + window.scrollY, scroll1)
})