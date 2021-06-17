const burgerIcon = document.getElementById('burger-icon');
const navbar = document.getElementById('navbar');

burgerIcon.addEventListener('click', function(){
    navbar.classList.toggle('show');
});

const dropdownMenuMain= document.getElementById('dropdownMenuMain');
const dropdownContentMain = document.getElementById('dropdownContentMain');

dropdownMenuMain.addEventListener('click' ,function(){
    dropdownContentMain.classList.toggle('hide');
});


const dropdownMenuSecondary= document.getElementById('dropdownMenuSecondary');
const dropdownContentSecondary = document.getElementById('dropdownContentSecondary');

dropdownMenuSecondary.addEventListener('click' ,function(){
    dropdownContentSecondary.classList.toggle('hide');
});

