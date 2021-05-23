const arrow = document.querySelector('.toggle-arrow');
const hide = document.querySelector('.hide');
const sBtn = document.querySelector('.search-togg');
const xSBtn = document.querySelector('.xSearch')
const xBtn = document.querySelector('.cancel-togg');
const navUl = document.querySelector('.nav-items');
const formS = document.querySelector('.show-form');




//back to top button 

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







arrow.addEventListener('click', () => {
    showNav();
    

})

hide.addEventListener('click', () => {
    hideNav();
})

// sBtn.addEventListener('click', () => {
//     yawa();
// })



function showNav() {
    navUl.classList.add("show");
}
function hideNav() {
    navUl.classList.remove("show");
}

sBtn.onclick = () => {
    formS.classList.add("showsearch");
}
xSBtn.onclick = () => {
  formS.classList.remove("showsearch")
}


// FAQ

const select = document.querySelector('select');
const parag = document.querySelector('.idiot');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'goal') {
    parag.textContent = 'The goals of HCI are to produce usable and safe systems, as well as functional systems. In order o produce computer systems with good usability, developers must attempt to: understand the factors that determine how people use technology. develop tools and techniques to enable building suitable systems.';
  } else if (choice === 'hciIs') {
    parag.textContent = 'Human-computer interaction (HCI) is a multidisciplinary field of study focusing on the design of computer technology and, in particular, the interaction between humans (the users) and computers. While initially concerned with computers, HCI has since expanded to cover almost all forms of information technology design.';
  } else if (choice === 'meaning') {
    parag.textContent = 'Human Computer Interaction';
  } else if (choice === 'webgoal') {
    parag.textContent = 'The goal of this website is to let the students know the importance of HCI.';
  } else {
    parag.textContent = '';
    parag.classList.remove("answers");
  }

  parag.classList.add("answers");
}


 
