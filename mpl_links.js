"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Gabriel Torres
   Date:   4/18/19
   
   Filename: mpl_links.js

*/

//this block of code allows the content that is selected to load into another webpage.
window.addEventListener("load", function () {

    var allSelect = document.forms.govLinks;
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            window.location.href = e.target.value;
        }
    }

});