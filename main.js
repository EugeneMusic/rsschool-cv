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

console.log(`Самооценка \n
1. Вёрстка валидная Document checking completed. No errors or warnings to show. +10 
2. Вёрстка семантическая (header,footer, main, nav, section, h1-h4, figure, figcaption, article ) +20
3. Для оформления СV используются css-стили +10 
4. Контент блоке по центру +10 
5. Вёрстка адаптивная +10
6. Адаптивное бургер меню, плавная прокрутка по якорям +10
7. На странице СV есть аватарка +10
8. Kонтакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты, о себе, навыки, образовании и уровне английского +10
10. CV содержит пример кода +10
11. CV содержит изображения-ссылки на выполненные проекты
12. CV выполнено на английском языке +10
13. Выполнены требования к Pull Request,  выполнена самооценка +10
14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10
Итого: 150`)