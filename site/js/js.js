/**
 * Created by axel.johansson2 on 2017-02-03.
 */
/**
 * Created by axel.johansson2 on 2017-01-23.
 */
function hello() {
    console.log("Hello, World");
}

function changeColor(grillkorv) {
    grillkorv.classList.toggle('red');
}
function reset() {
    var elements = document.querySelectorAll('.red')
    elements.forEach(function (element) {
        element.classList.remove('red');
    });
}
/* Här kan du göra så du tar bort en class
 function changeColor2(grillkorv) {
 grillkorv.classList.toggle('innan');
 }*/

function remove1() {
    var elements = document.querySelectorAll('.box')
    elements.forEach(function (element) {
        element.classList.remove('box');
    });
}
function remove() {
    var elements = document.querySelectorAll('.innan')
    elements.forEach(function (element) {
        element.classList.remove('innan');
    });
}

function add() {
    var elements = document.querySelectorAll('.innan')
    elements.forEach(function (element) {
        element.classList.toggle('efter');
    });
}
