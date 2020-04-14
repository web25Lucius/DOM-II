// Your code goes here

gsap.to(".nav-link", {stagger: 1, x: 300, rotation: 360, duration: 4}); 

// 1) mouseover 
const mouseLogo = document.querySelector ('.logo-heading');  
// console.log(mouseLogo); 
mouseLogo.addEventListener('mouseover', (event)=>{
mouseLogo.style.backgroundColor = "#4287f5"; 
})

// 2) click
mouseLogo.addEventListener('click', (event)=>{
mouseLogo.style.backgroundColor = "#FFFFFF";
event.stopPropagation(); 
})

// 3) copy
const pirateParagraph = document.querySelector ('p'); 
pirateParagraph.addEventListener('mouseover', (event)=>{
pirateParagraph.textContent= "try copying me."; 
})

pirateParagraph.addEventListener('copy', (event)=>{
pirateParagraph.textContent = "You shouldn't have done that..."
})

// 4) context menu
const offendedParagraph = document.querySelector('.content-destination','p')
//console.log(offendedParagraph); 
offendedParagraph.addEventListener('contextmenu', (event)=> {
    offendedParagraph.textContent= 'Boo!'; 
    offendedParagraph.style.color= 'red'; 
    offendedParagraph.style.fontFamily= 'Creepster', 'cursive'; 
    offendedParagraph.style.fontSize= '36px'; 
})

//5) scroll 
const last = document.querySelector('.xena');
console.log(last);  
last.addEventListener('scroll', (event)=>{
    console.log(last); 
    // last.textContent="rtClk boat pic..."; 
})

//6) dblclick 
const oops = document.querySelector('body'); 
//console.log(oops); 
oops.addEventListener('dblclick', (event)=> {
window.location.href= ('https://youtu.be/bMu_l_0BgYs'); 
})


//7) keypress
oops.addEventListener('keypress', (event)=>{
    oops.style.backgroundColor= "#4CAF50"; 
})

//8) keyup

const tipTop = document.querySelector('header'); 
oops.addEventListener('keyup', (event)=>{
    oops.style.backgroundColor = '#ACD1E1'; 
    tipTop.style.backgroundColor= '#F5E1CF'; 
})

//9) mouseenter

const welh2 = document.querySelector('h2'); 
//console.log(welh2); 
welh2.addEventListener('mouseenter', (event)=>{
    welh2.textContent = "Abandon Hope All Ye Who Enter Here"; 
    welh2.style.textAlign = 'center'; 
    welh2.style.fontFamily=  'Creepster', 'cursive;'; 
})

// 10) mouseleave

welh2.addEventListener('mouseleave', (event)=>{
    welh2.textContent= "Try doubleclicking anywhere.. you can trust me..  Go ahead.."
    welh2.style.fontFamily= 'Indie Flower', 'cursive'; 
})



//11) nested with propagation stop in combination with 1) mouseover
tipTop.addEventListener('mouseover', (event)=>{
    tipTop.style.color= "gold";
    tipTop.style.border= "5px dashed gold";  
    event.stopPropagation(); 
})

//12) preventDefault(); on nav-links

const stopDefault = document.querySelectorAll('.nav-link'); 
console.log(stopDefault); //captured all nav a tags

stopDefault.forEach(item => {
    item.addEventListener("click", (event)=> {
        event.preventDefault(); 
})

});  


