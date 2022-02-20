// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


AOS.init();

function goTop() {
    const header = document.querySelector('header');
    const heightHeader = header.offsetHeight;
    const goTopBtn = document.querySelector('.go-top');

    if (heightHeader/2 < scrollY) {
        goTopBtn.classList.add('go-top_open');
    } else {
        goTopBtn.classList.remove('go-top_open');
    }
}
window.addEventListener('scroll', goTop);


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (scrollDistance >= document.querySelector('.page__main-screen').clientHeight) {
                if(el.offsetTop <= scrollDistance) {
                    document.querySelectorAll('.menu__link').forEach((el) => {
                        if(el.classList.contains('_active')) {
                            el.classList.remove('_active');
                        }
                    });
                    document.querySelectorAll('.menu__item')[i].querySelector('.menu__link').classList.add('_active');
                }
        } else {
            document.querySelectorAll('.menu__item')[i].querySelector('.menu__link').classList.remove('_active');
        }
    });
});
