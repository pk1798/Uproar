const burgerIcon = document.getElementById('burger-icon');
const navbar = document.getElementById('navbar');

burgerIcon.addEventListener('mouseover', function(){
    navbar.classList.toggle('show');
});


const dropdownMenuMain= document.getElementById('dropdownMenuMain');
const dropdownContentMain = document.getElementById('dropdownContentMain');
const upMain = document.getElementById('up-main');
const downMain = document.getElementById('down-main');


dropdownMenuMain.addEventListener('click' ,function(){
    dropdownContentMain.classList.toggle('hide');
    upMain.classList.toggle('hide');
    downMain.classList.toggle('hide');
});


const dropdownMenuSecondary= document.getElementById('dropdownMenuSecondary');
const dropdownContentSecondary = document.getElementById('dropdownContentSecondary');
const upSecondary = document.getElementById('up-secondary');
const downSecondary = document.getElementById('down-secondary');

dropdownMenuSecondary.addEventListener('click' ,function(){
    dropdownContentSecondary.classList.toggle('hide');
    upSecondary.classList.toggle('hide');
    downSecondary.classList.toggle('hide');
});


const dropdown = document.getElementsByClassName('dropdown')
// const dropdownContent = document.getElementsByClassName('dropdown__content')

// // console.log(dropdown)

// Array.from(dropdown).forEach(i => {
//     // console.log(i)
//     i.addEventListener('click', ()=>{
//         console.log(i);
//     })
// })




const countryValue = document.getElementById('country-value');
const india = document.getElementById('india');
const china = document.getElementById('china');
const japan = document.getElementById('japan');

india.addEventListener('click', function(){
    countryValue.innerText = india.innerText
})
china.addEventListener('click', function(){
    countryValue.innerText = china.innerText
})
japan.addEventListener('click', function(){
    countryValue.innerText = japan.innerText
})