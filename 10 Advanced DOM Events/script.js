'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelector('.operations__content');
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//Button scrolling.
btnScrollTo.addEventListener('click', function (e) {
  let s1Cords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect()); //Returns the position and size of element.
  console.log(window.pageXOffset, window.pageYOffset);
  console.log('s1Cords', s1Cords);
  section1.scrollIntoView({ behavior: 'smooth' });
});
////////////////////////////////////////////////////
//page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href')
//     console.log(id)
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   });
// });
//Above method is not very efficient because the callback function is copied for each li so we use event delegation method as below.
////////////////////
// In event delegation we need two steps.
//1. We add the event listener to a common parent of the elements we are interested in.
//2 Determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    let el = e.target.getAttribute('href');
    document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Components.

tabContainer.addEventListener('click', function (e) {
  let clicked = e.target.closest('.operations__tab');
  //if clicked is null
  if (!clicked) return;
  tabs.forEach((el) => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  document
    .querySelectorAll(`.operations__content`)
    .forEach((el) => el.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const hoverHandler = function (e) {
  // const opacity = this
  if (e.target.classList.contains('nav__link')) {
    let hoveredLink = e.target;
    let siblings = hoveredLink.closest('nav').querySelectorAll('.nav__link');
    const logo = hoveredLink.closest('nav').querySelector('.nav__logo');
    // console.log(siblings)
    siblings.forEach((el) => {
      if (el !== hoveredLink) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', hoverHandler.bind(0.5));
// nav.addEventListener('mouseover', function (e){
//   hoverHandler(e ,0.5)
// })
nav.addEventListener('mouseout', hoverHandler.bind(1));
// nav.addEventListener('mouseout', function (e){
//   hoverHandler(e ,1)
// })

//Sticky nav bar
// console.log(sec1Coords)
//  const sec1Coords = section1.getBoundingClientRect()
// window.addEventListener('scroll', function (){
//   if (window.scrollY > sec1Coords.top){
//     nav.classList.add('sticky')
//   }
//   else{
//     nav.classList.remove('sticky')
//   }
// })

/////////////////////////////////////////////
//Above method is not efficient, so we use Intersection Observer API.
// Achieving sticky on scroll using Intersection observer API

//IntersectionObserver method.
const header = document.querySelector('.header');

const stickyNav = (entries) => {
  //Note:-> entries is an array so always destructure it.
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const options = {
  root: null, //For the whole viewport
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
};
const observer = new IntersectionObserver(stickyNav, options);
observer.observe(header);

//Revealing elements on slide

const sections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.15,
  root: null,
});
sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach((el) => imgObserver.observe(el));

//slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let curSlide = 0;
  // const slider = document.querySelector('.slider');
  const maxSlide = slides.length;
  let dotsContainer = document.querySelector('.dots');
  // slider.style.transform = 'scale(0.4)'
  // slider.style.overflow = 'visible'

  // slides.forEach(function (slide, i){
  //   slide.style.overflow = 'visible';
  //   slide.style.transform = `translateX(${100 * i}%)`
  //
  // })
  //Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateSlide = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((el) => {
      el.classList.remove('dots__dot--active');
      document
        .querySelector(`.dots__dot[data-slide='${slide}']`)
        .classList.add('dots__dot--active');
    });
  };

  console.log(curSlide);
  const goToSlide = function (slide) {
    console.log(slide);
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    activateSlide(slide);
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  const previousSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  //Initialisation
  const init = function () {
    createDots();
    goToSlide(0);
    activateSlide(0);
  };
  init();
  //Event listener

  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', previousSlide);
  const btnObserver = new IntersectionObserver(
    function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        document.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') nextSlide();
          e.key === 'ArrowLeft' && previousSlide();
        });
      }
    },
    {
      root: null,
      threshold: 0.2,
      rootMargin: '200px',
    }
  );
  btnObserver.observe(sections[2]);
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = +e.target.dataset.slide;
      goToSlide(slide);
    }
  });
};
slider();
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

/*
//getBoundingClientRect returns the size of an element and its position w.r.t. viewport(Returns these eight properties:--> eft, top, right, bottom, x, y, width, height.
//pageXOffset/scrollX returns the position of element Horizontally from the initial position.
//pageYOffset/scrollY returns the position of element Vertically from the initial position.
//clientHeight and clientWidth returns the height and width of the viewPort when used on the document element.
console.log(document.documentElement.clientHeight, document.documentElement.clientWidth)//Returns the heigth and width of the viewport.
// btnScrollTo.addEventListener('click', function (e){
//   let s1Cords = section1.getBoundingClientRect();
//   console.log(e.target.getBoundingClientRect())//Returns the position and size of element.
//   console.log(window.pageXOffset, window.pageYOffset);
//   console.log('s1Cords' ,s1Cords)
//   //Scrolling
//   // window.scrollTo(s1Cords.left, s1Cords.top) // scrollTo takes value from the top of the page or it is absolute.
//   //Note:->The problem here is that the getBoundingClientRect() method returns coordinates of an element relative to the viewport, so to the currently visible area on your screen, but the scrollTo() method always starts from the top of the document.
//   //
//   // There is no problem as long as our viewport is the same as the top of the page. The problem is when we scroll a little bit, and our viewport is moved, but the top of the page stays the same.
//   //
//   // So, let's say the distance between the first section, and the top of the page is 500px. To scroll to this section, we would need to use window.scrollTo(0, 500);.
//   //
//   // But, we need to get that value dynamically, using the getBoundingClientRect() method because we never know the exact distance (depending on the screen size, styles, etc.). The problem is that getBoundingClientRect() returns a position relative to the viewport. So, let's say I scroll by 200px from the top of the page, and the distance between the top of the viewport and the first section will be only 300px. However, we need to scroll by 500px because window.scrollTo() is absolute - starts from the top of the document.
//   //
//   // That's the problem. To solve it, we add the distance between the top of the document and the current top of the viewport (pageYOffset)
//   //
//   // s1coords.top + window.pageYOffset
//   // So, again, let's say I scrolled by 200px (this is the distance between the top of the document and the current top of the viewport), and there is 300px from the top of the first section to the top of the viewport. Together it gives us 200px + 300px = 500px.
//   //
//   // It may be confusing, so feel free to ask if you have any questions
//   // window.scrollBy(s1Cords.left, s1Cords.top)
//   //Note:-> For changing behavior pass in an object containing top,lefft and behaviour
//   // window.scrollBy({
//   //   top: s1Cords.top,
//   //   left:s1Cords.left,
//   //   behavior: "smooth"
//   // });
//   //There is one more method for scrolling.which is scrollIntoView, We use this method on a element and it scrolls to that specified element which work as below
//   section1.scrollIntoView({behavior: "smooth"})
// })

//Types of Events and Event handlers

//So an event is basically a signal (meaning that something has happened for ex-a click somewhere or mouse movement or the user triggering the full screen mode or anything of importance that happens on the web Page generates an event.)which is generated by a certain DOM Node

const h1 = document.querySelector('h1')

//Removing event handlers
//For removing event handler we have to export the function into a named function. We use this event handler on the element from which we want to remove event listener and specify the event type and specify the callback function.If we want to listen to an event only once then we can use this inside the named callback function. We can use it wherever we want to though.
const hoverHeadingAlert = function(){
  alert('You are reading a heading')
  // h1.removeEventListener('mouseenter', hoverHeadingAlert)
}

//mouseenter is like hover in css(when a certain element hovered)
h1.addEventListener('mouseenter',hoverHeadingAlert)
// we can use removeEventListener wherever we want to as below.
setTimeout(()=> h1.removeEventListener('mouseenter', hoverHeadingAlert), 3000)
// h1.removeEventListener('mouseenter', hoverHeadingAlert)

//There is another way of attaching an event listener to an element. That is by using on'name of event' as below
// h1.onmouseenter = function (){
//   alert('You are reading a heading with onevent event listener')
// }
// NOTE:--> 1.onmouseenter do not override the previous event listener.
//2.Using addEventListener we can add multiple event listeners for the same type of event. For example, we can add 2 event listeners for mouseenter and they won't override each other. but we can not do the same for the onevent over-rides the previous event listener.

//Event propagation: Bubbling and Capturing
//https://www.youtube.com/watch?v=SZhifL_Gi1E

//Event propagation in practise(mainly event bubbling)

const randomInt = (min, max)=> Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = ()=> `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`
console.log(randomColor())
console.log(randomInt(10,100))
console.log(Math.random())
document.querySelector('.nav__link').addEventListener('click', function (e){
  // e.preventDefault()
  console.log('Link', e.target , e.currentTarget);
  this.style.backgroundColor = randomColor()
  //stop propagation --> stops the event to propagate further.
  e.stopPropagation()
})
document.querySelector('.nav__links').addEventListener('click', function (e){
  console.log('Links', e.target, e.currentTarget)
  // e.preventDefault()
  this.style.backgroundColor = randomColor()
})
document.querySelector('.nav').addEventListener('click', function (e){
  // e.preventDefault()
  console.log('Nav', e.target, e.currentTarget)
  this.style.backgroundColor = randomColor()
  // e.stopPropagation()
}, {capture: true})
*/
/*
//DOM traversing
const h1 = document.querySelector('h1')
//Going downward(Any Child)
//Below will work no matter how deep the child elements are. If there will be other elements except the child of h1 then they will not be selected.
console.log(h1.querySelectorAll('.highlight'))

//Selecting only Direct child
// console.log(h1.childNodes)
console.log(h1.children)//Returns only the children of h1(span, br, span)

//First and last element child
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'Blue'

//Going upwards(Selecting parents)
//Direct parents
console.log(h1.parentElement)

//Closest parents with specified class
//We can think of the closest method as opposite of querySelector because querySelector returns the child element no matter how deep it is while closest returns the parent element no matter how deep it is.
h1.closest('.header').style.background = 'var(--color-secondary)'//Selected the closest header to our h1 and then applied the style to that element.
//If the selector matches the element which we are calling the closest method on then it returns the element itself.
h1.closest('h1').style.background = 'var(--gradient-primary )'

//Going sideways (Selecting Siblings)

console.log(h1.previousElementSibling)//Null because it is first child.
console.log(h1.nextElementSibling)//h4
// console.log(h1.previousSibling)//
// console.log(h1.nextSibling)

//Accesing all siblings
console.log(h1.parentElement.children);//HTML collection of all the child elements within h1.parenElement including h1.
[...h1.parentElement.children].forEach(function (el){
  if(el !== h1.closest('h1')) {
    el.style.transform = 'scale(0.5)'
  }
})
 */

// Events that occur in the DOM during a webpage's life cycle.
//Life cycle of web page -->Right from the moment that the page is accessed, until the user leaves it.

//event-->DOM content loaded event - This event is 'fired by the document' as soon as the HTML is completely parsed which means that the html has been downloaded and been converted th the DOM tree.Also, all scripts must be downloaded and executed before the DOM content loaded event can happen.
//Note:-> DOMcontentloaded event don't wait for the images and external resources(ex- css) to load.So just html and JS need to be loaded.
//listening to DOM content loaded event.
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});
//We don't have to wrap our all code inside the above handler because we accessed the script in the end of HTMl file meaning it will be loaded after the HTML.

//event -->load event-> Load event is 'fired by the window' as soon as not only HTML is parsed, but also the all the images and external resources like css files are also loaded. Basically when the complete page has finished loading is when the load event is fired.

//listening to the load event.
window.addEventListener('load', (e) => {
  console.log('Everything has been loaded.', e);
});

//event --> beforeunload event -This event is created by the window immediately before a user is about to leave a page.(EX- after clicking the close button on the browser tab.
//Note:- On some browser to beforeunload to work we have to make some interaction with the page.
// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault(); //In some browser we have to use the preventDefault to make it work.
//   // console.log(e);
//   e.returnValue = ''; //We have to write this line to make it work.
// });
