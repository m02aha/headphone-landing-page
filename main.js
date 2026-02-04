// make the header background black when scrolling down to 70px 



let menuToggle=document.querySelector(".menu-toggle");
let nav=document.querySelector("nav");
let menu = document.querySelectorAll(".menu a");
    let menuArr = Array.from(menu);
const sections = Array.from(document.querySelectorAll("section"));

  // tasks (30m):

  function toggleClass(element,className,condition){
    if(condition){
      element.classList.add(className);
    }else{
      element.classList.remove(className);
    }
  }





// console.log(menuToggle);
// console.log(nav);

// check if toggle exist 
if(menuToggle){
  menuToggle.addEventListener("click",()=>{toggleClass(nav,'opened',true)});
}


nav.addEventListener("click",(e)=>{

  toggleClass(nav, 'opened',false);
  // add activation to the link 
  menuArr.forEach((e,i)=>{
    toggleClass(e, 'active',false);

  })
  toggleClass(e.target, 'active', true);

})


// changing background color  and clors of nav bar links 

let header = document.querySelector(".header-section");
function headerScroll(){
  toggleClass(header, 'active', window.scrollY >= 50);

}
window.addEventListener('scroll', headerScroll);

//scroll to  up
let upBtn = document.getElementById("up");

function toUpScroll(){
  toggleClass(upBtn, 'active', window.scrollY >= 100);
}
window.addEventListener('scroll',toUpScroll);


// add active and remove from section 
let navLi=Array.from(document.querySelectorAll(".menu li a"));
// console.log(navLi);

function activate(section){
navLi.forEach((e)=>{
  e.classList.remove("active");

} )
section.classList.add("active");

}
// console.log(document.getElementById("case"));

// scroll to activate section 

function scrollActive(){

const scrolly=window.scrollY;
sections.forEach((current)=>{
  const sectionHeight=current.offsetHeight;
  const sectionTop = current.offsetTop - 50;///
  const sectionId = current.getAttribute("id");
  // console.log(sectionHeight);
  // console.log(sectionTop);
  // console.log(sectionId);
// 1. Store the element in a variable
    const navLink = document.querySelector('.menu a[href*=' + sectionId + ']');

    // 2. Only call toggleClass if the link actually exists in the nav
    if (navLink) {
      toggleClass(navLink, 'active', scrolly > sectionTop && scrolly <= sectionTop + sectionHeight);
    }
})

}
window.addEventListener('scroll',scrollActive);


document.addEventListener("scroll",scrolling);
function scrolling(e){
// 
  // console.log(window.scrollY);
  // console.log(window.screenX);



  if(window.scrollY <= 620){
    // activate(navLi[0]);

  }
  else if (window.scrollY > 620 && window.scrollY < 1200 ) {
    // activate(navLi[1]);
    document.querySelector(".specs-section").classList.add("active");

  }
  else if (window.scrollY >= 1200 && window.scrollY < 1500) {
    // activate(navLi[2]);
    document.querySelector(".case-section").classList.add("active");

  } 
  else if (window.scrollY >= 1500 && window.scrollY < 2200) {

    document.querySelector(".discount-section").classList.add("active");

  } 
  
  else if (window.scrollY >= 2200 && window.scrollY <= 2500) {
    // activate(navLi[3]);
    document.querySelector(".product-section").classList.add("active");

  }
  else if (window.scrollY > 2600) {
    
    document.querySelector(".footer-container").classList.add("active");

  }

  if (window.scrollY > 10) {
    document.querySelector(".sponsors").classList.add("active");
  }
  if (window.scrollY < 100) {
    document.querySelector(".home-section").classList.add("active");
  }
 
}

//scrolling effects on home page.
if (window.scrollY < 100) {
  document.querySelector(".home-section").classList.add("active");
}


// to the up button 

upBtn.addEventListener("click",(e)=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
  });
})

