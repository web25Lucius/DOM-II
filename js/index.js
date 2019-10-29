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

// 4) cut
// const offendedParagraph = document.querySelectorAll ('.text-content','p')
// console.log(offendedParagraph); 
// offendedParagraph.addEventListener('cut', (event)=> {
//     offendedParagraph.textContent= 'Ow!  Why would you do that?!'; 
//     offendedParagraph.style.color= 'red'; 
//     offendedParagraph.style.fontFamily= 'Creepster', 'cursive'; 
// })

//5) scroll 
// const offendedHeadline = document.querySelectorAll ('.text-content', 'h2'); 
// console.log(offendedHeadline); 
// offendedHeadline.addEventListener ('scroll', (event)=>{
//     offendedHeadline.textContent= 'try cutting us, you know cntrl + x'; 
// })



//6) dblclick 
const oops = document.querySelector('body'); 
console.log(oops); 
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



