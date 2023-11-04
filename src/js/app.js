const burgerMenu = document.querySelector('.burger-menu');
const burgerLine = document.querySelectorAll('.burger-line');
const headerNav = document.querySelector('.header-nav');

burgerMenu.addEventListener('click' , () => {

    burgerMenu.classList.toggle('is-active')
    headerNav.classList.toggle('is-active')

    burgerLine.forEach(line => {
        line.classList.toggle('is-active');
    });
})

const searchImg = document.querySelector('.header-search__img');
const searchInput = document.querySelector('.header-search');

searchImg.addEventListener('click', function() {
    searchInput.classList.toggle('is-visible')
})