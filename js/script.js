"use strict";
const mainElem = document.documentElement;
//Выводим размеры окна браузера
const mainElemWidth = mainElem.clientWidth;
const mainElemHeight = mainElem.clientHeight;
console.log(mainElemWidth);
console.log(mainElemHeight);
//Выводим размеры окна браузера всесте с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
//Ширина и длина документа, включая прокрученную часть
let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth,
);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
);
console.log(scrollWidth);
console.log(scrollHeight);
//Получение кол-ва прокрученных пикселей 
const winScrollY = window.pageYOffset;
const winScrollX = window.pageXOffset;
console.log(winScrollY);
console.log(winScrollX);
//ПРОКРУТКА 
//ScrollBy
function setScrollBy() {
    window.ScrollBy(0, 50);
    console.log(winScrollY);
};
//ScrollTo - метод прокрутки на конкретные координаты по осям X и Y
//SetScrollintoView - метод прокрутки к определенному объекту
function SetScrollintoView(top) {
    const elemLoremStart = document.querySelector('.lorem__start');
    elemLoremStart.scrollIntoView(top);
};
//Дополнительные параметры для crollIntoView({
//block:"center/start/end/nearest"-веритикальное позиционирование
//inline: "center/start/end/nearest"-горизонтальное позиционирование
//behavior: "auto/smooth"-быстрая или плавная прокрутка
//})
//ЗАПРЕТ ПРОКРУТКИ 
function serEnableScroll() {
    //document.style.overflow = "hidden"; 
    //ИЛИ
    document.body.classList.toggle('scroll-lock');
    //И в CSS файле прописываем для этого класс overflow = hidden
};
//МЕТРИКИ 
const block = document.querySelector('.lorem__start');
const elemOffSetParent = block.offsetParent;
console.log(elemOffSetParent);
const elemOffSetLeft = block.offsetLeft;
const elemOffSetTop = block.offsetTop;
console.log(elemOffSetLeft);
console.log(elemOffSetTop);
//Размеры объекта
const elemOffSetWidth = block.offsetWidth;
const elemOffSetHeight = block.offsetHeight;
console.log(elemOffSetWidth);
console.log(elemOffSetHeight);
//Размеры внутренней части объекта от внешней части 
const elemClientTop = block.clientTop;
const elemClientLeft = block.clientLeft;
console.log(elemClientTop);
console.log(elemClientLeft);
//Размеры объекта без рамок и полосы прокрутки 
const elemClientWidth = block.clientWidth;
const elemClientHeight = block.clientHeight;
console.log(elemClientWidth);
console.log(elemClientHeight);
//Размеры объекта без рамок и ширины скрола, но это размеры целиком объекта , даже то, что не помещается в поле экрана
const elemScrollWidth = block.scrollWidth;
const elemScrollHeight = block.scrollHeight;
console.log(elemScrollWidth);
console.log(elemScrollHeight);
//Указание величины прокрутки
const elemScrollLeft = block.scrollLeft;
const elemScrollTop = block.scrollTop;
block.scrollTop = 500;
console.log(elemScrollTop);
console.log(elemScrollLeft);
//Метрика относительно осей координат 
const itemBlock = document.querySelector('.lorem__start');
const getelemXY = itemBlock.getBoundingClientRect();
console.log(getelemXY);
//Вывод только одной координаты
const getelemLeft = itemBlock.getBoundingClientRect().left;
console.log(getelemLeft);
//Поиск объекта по координатам 
const XYelem = document.elementFromPoint(100, 500);
console.log(XYelem);

