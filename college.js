const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  const nav = document.querySelector('.nav')
const header = document.querySelector('.head');



//stylish slider
let imgContainer = document.querySelector(".img-container");
 
setInterval(() => {
        let last = imgContainer.firstElementChild;
        last.remove();
        imgContainer.appendChild(last);
      }, 2500);

 // Get all the images you want to be clickable and add them to an array
let images = document.querySelectorAll(".bosy");

// Loop through each image and add a click event listener
images.forEach(function(image) {
  image.addEventListener("click", function() {
    // Get the URL of the clicked image
    let imageUrl = image.getAttribute("src");
    let imageText = image.parentNode.querySelector("figcaption").textContent;
    

    // Create a new box element
    let newBox = document.createElement("div");
    newBox.classList.add("box");

    // Create the figure element
    let figure = document.createElement("figure");

    // Create the image element with the URL of the clicked image
    let newImage = document.createElement("img");
    newImage.src = imageUrl;
    newImage.alt = "New Image";

    // Create the figcaption element
    let figcaption = document.createElement("figcaption");
    figcaption.textContent = imageText;

    // Append the image and figcaption to the figure element
    figure.appendChild(newImage);
    figure.appendChild(figcaption);

    // Append the figure to the new box element
    newBox.appendChild(figure);
    

    // Insert the new box at the beginning of the imgContainer
    let imgContainer = document.querySelector(".img-container");
    let lastChild = imgContainer.lastChild;
    imgContainer.replaceChild(newBox, lastChild);
  });
});     
        
        
      


//diff content with diff button

const containerbtn = document.querySelectorAll('.operations__tab');
const container = document.querySelector('.operations__tab-container');
const content = document.querySelectorAll('.operations__content');

container.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if(!clicked)return;
  containerbtn.forEach(t=>t.classList.remove('operations__tab--active'));
  content.forEach(c=>c.classList.remove('operations__content--active'))
  
  clicked.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');



});

// sticky nav and opacity on scroll


window.addEventListener('scroll',function(){
  const nav = document.querySelector('.nav')
  if(window.scrollY>=100){
  
    nav.style.opacity=0.9;
  }
  else {
    nav.style.opacity=1;
  }
  });


const obscallback = function(entries){
  const[entry]= entries;
 // console.log(entry);
  nav.classList.add('sticky');
  
  

};


const headerobserver = new IntersectionObserver(obscallback,{
  root: null,
  threshold:0


});
headerobserver.observe(header);



// slider simple
let curslide = 0;
const maxslides = slides.length;
//create dots
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};


createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);


const gotoslide = function(slide) {
  slides.forEach((s,i)=>(s.style.transform =`translateX(${100*(i-slide)}%)`));
};
gotoslide(0);



const nextslide = () => {
  if (curslide === maxslides - 1) {
    curslide = 0;
  } else {
    curslide++;
  };

  gotoslide(curslide);
  activateDot(curslide);
};

const prevslide = function(){
  if(curslide===0){
    curslide=maxslides - 1;
  }else{
    curslide--;
  }
  gotoslide(curslide);
  activateDot(curslide);
  
};

const myTimeout = setInterval(nextslide, 4000);
btnRight.addEventListener('click',nextslide);

btnLeft.addEventListener('click',prevslide);

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    gotoslide(slide);
    activateDot(slide);
  }
});


// scrolll to diff sections

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior:'smooth'});
});


document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior:'smooth'});
  }
});



