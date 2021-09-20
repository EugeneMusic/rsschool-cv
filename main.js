(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
//   const body = document.querySelector('.body')
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        // body.classList.toggle('body_active');
    });
}());
