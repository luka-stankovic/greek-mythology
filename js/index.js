
var lastScrollTop = 0;
header = document.getElementById('header');
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {

        header.style.top = "-180px";
    } if (scrollTop < lastScrollTop) {
        header.style.top = "0";
    }


    lastScrollTop = scrollTop;
})
var click = false;

var truncate1 = document.getElementById("truncate1");
var truncate2 = document.getElementById("truncate2");
var truncate3 = document.getElementById("truncate3");
var truncate4 = document.getElementById("truncate4");
var truncate5 = document.getElementById("truncate5");
var truncate6 = document.getElementById("truncate6");
var truncate7 = document.getElementById("truncate7");
var truncate8 = document.getElementById("truncate8");
var truncate9 = document.getElementById("truncate9");
var truncate10 = document.getElementById("truncate10");
var truncate11 = document.getElementById("truncate11");
var truncate12 = document.getElementById("truncate12");
var truncate13 = document.getElementById("truncate13");
var truncate14 = document.getElementById("truncate14");
var truncate15 = document.getElementById("truncate15");



var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var text6 = document.getElementById("text6");
var text7 = document.getElementById("text7");
var text8 = document.getElementById("text8");
var text9 = document.getElementById("text9");
var text10 = document.getElementById("text10");
var text11 = document.getElementById("text11");
var text12 = document.getElementById("text12");
var text13 = document.getElementById("text13");
var text14 = document.getElementById("text14");
var text15 = document.getElementById("text15");



truncate1.addEventListener("click", function () {

    if (click === false) {
        truncate1.innerHTML="Read Less";
        text1.classList.remove("truncate");
        click = true;
    }

    else {
        truncate1.innerHTML="Read More";
        text1.classList.add("truncate");
        click = false;
    }

});

truncate2.addEventListener("click", function () {

    if (click === false) {
        truncate2.innerHTML="Read Less";
        text2.classList.remove("truncate");
        click = true;
    }

    else {
        truncate2.innerHTML="Read More";
        text2.classList.add("truncate");
        click = false;
    }

});

truncate3.addEventListener("click", function () {

    if (click === false) {
        truncate3.innerHTML="Read Less";
        text3.classList.remove("truncate");
        click = true;
    }

    else {
        truncate3.innerHTML="Read More";
        text3.classList.add("truncate");
        click = false;
    }

});


truncate4.addEventListener("click", function () {

    if (click === false) {
        truncate4.innerHTML="Read Less";
        text4.classList.remove("truncate");
        click = true;
    }

    else {
        truncate4.innerHTML="Read More";
        text4.classList.add("truncate");
        click = false;
    }

});

truncate5.addEventListener("click", function () {

    if (click === false) {
        truncate5.innerHTML="Read Less";
        text5.classList.remove("truncate");
        click = true;
    }

    else {
        truncate5.innerHTML="Read More";
        text5.classList.add("truncate");
        click = false;
    }

});


truncate6.addEventListener("click", function () {

    if (click === false) {
        truncate6.innerHTML="Read Less";
        text6.classList.remove("truncate");
        click = true;
    }

    else {
        truncate6.innerHTML="Read More";
        text6.classList.add("truncate");
        click = false;
    }

});

truncate7.addEventListener("click", function () {

    if (click === false) {
        truncate7.innerHTML="Read Less";
        text7.classList.remove("truncate");
        click = true;
    }

    else {
        truncate7.innerHTML="Read More";
        text7.classList.add("truncate");
        click = false;
    }

});



truncate8.addEventListener("click", function () {

    if (click === false) {
        truncate8.innerHTML="Read Less";
        text8.classList.remove("truncate");
        click = true;
    }

    else {
        truncate8.innerHTML="Read More";
        text8.classList.add("truncate");
        click = false;
    }

});



truncate9.addEventListener("click", function () {

    if (click === false) {
        truncate9.innerHTML="Read Less";
        text9.classList.remove("truncate");
        click = true;
    }

    else {
        truncate9.innerHTML="Read More";
        text9.classList.add("truncate");
        click = false;
    }

});


truncate10.addEventListener("click", function () {

    if (click === false) {
        truncate10.innerHTML="Read Less";
        text10.classList.remove("truncate");
        click = true;
    }

    else {
        truncate10.innerHTML="Read More";
        text10.classList.add("truncate");
        click = false;
    }

});



truncate11.addEventListener("click", function () {

    if (click === false) {
        truncate11.innerHTML="Read Less";
        text11.classList.remove("truncate");
        click = true;
    }

    else {
        truncate11.innerHTML="Read More";
        text11.classList.add("truncate");
        click = false;
    }

});



truncate12.addEventListener("click", function () {

    if (click === false) {
        truncate12.innerHTML="Read Less";
        text12.classList.remove("truncate");
        click = true;
    }

    else {
        truncate12.innerHTML="Read More";
        text12.classList.add("truncate");
        click = false;
    }

});



truncate13.addEventListener("click", function () {

    if (click === false) {
        truncate13.innerHTML="Read Less";
        text13.classList.remove("truncate");
        click = true;
    }

    else {
        truncate13.innerHTML="Read More";
        text13.classList.add("truncate");
        click = false;
    }

});


truncate14.addEventListener("click", function () {

    if (click === false) {
        truncate14.innerHTML="Read Less";
        text14.classList.remove("truncate");
        click = true;
    }

    else {
        truncate14.innerHTML="Read More";
        text14.classList.add("truncate");
        click = false;
    }

});


truncate15.addEventListener("click", function () {

    if (click === false) {
        truncate15.innerHTML="Read Less";
        text15.classList.remove("truncate");
        click = true;
    }

    else {
        truncate15.innerHTML="Read More";
        text15.classList.add("truncate");
        click = false;
    }

});