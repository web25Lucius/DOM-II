// Your code goes here

// 1) mouseover 
const mouseLogo = document.querySelector ('.logo-heading');  
// console.log(mouseLogo); 
mouseLogo.addEventListener('mouseover', (event)=>{
mouseLogo.style.backgroundColor = "#4287f5"; 
})

// 2) click
mouseLogo.addEventListener('click', (event)=>{
mouseLogo.style.backgroundColor = "#FFFFFF";
})

// 3) copy
const pirateParagraph = document.querySelector ('p'); 
pirateParagraph.addEventListener('mouseover', (event)=>{
pirateParagraph.textContent= "try copying me."; 
})

pirateParagraph.addEventListener('copy', (event)=>{
pirateParagraph.textContent = "You shouldn't have done that..."
})

// 4) select

// 5) load

//6) focus

//7) scroll

//8) dblclick 
const oops = document.querySelector('body'); 
console.log(oops); 
oops.addEventListener('dblclick', (event)=> {
window.location.href= ('https://youtu.be/bMu_l_0BgYs'); 
})

//9) mouseenter

const welh2 = document.querySelector('h2'); 
console.log(welh2); 
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



