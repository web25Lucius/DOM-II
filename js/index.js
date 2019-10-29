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

//8) click 

//9) mouseenter

// const funnerBus = document.querySelector('img');
// console.log(funnerBus); 
// funnerBus.addEventListener( 'mouseenter', (event)=>{
//     funnerBus.setAttribute= 'src', 'img/destination.jpg'; 
// })


const welh2 = document.querySelector('h2'); 
console.log(welh2); 
welh2.addEventListener('mouseenter', (event)=>{
    welh2.textContent = "Abandon Hope All Ye Who Enter Here"; 
})

// 10) mouseleave

welh2.addEventListener('mouseleave', (event)=>{
    welh2.textContent= "Try selecting 'Let's Go'.. you can trust me..  Go ahead.."
})



