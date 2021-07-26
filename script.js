/*
document.getElementById('9').style.width="750px";
document.getElementById('9').style.fontSize="14pt";

document.getElementById('10').style.width="750px";
document.getElementById('10').style.fontSize="14pt";

document.getElementById('11').style.width="750px";
document.getElementById('11').style.fontSize="14pt";

document.getElementById('12').style.width="750px";
document.getElementById('12').style.fontSize="14pt";

document.getElementById('1').style.width="750px";
document.getElementById('1').style.fontSize="14pt";

document.getElementById('2').style.width="750px";
document.getElementById('2').style.fontSize="14pt";

document.getElementById('3').style.width="750px";
document.getElementById('3').style.fontSize="14pt";

document.getElementById('4').style.width="750px";
document.getElementById('4').style.fontSize="14pt";

document.getElementById('5').style.width="750px";
document.getElementById('5').style.fontSize="14pt";
*/
//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "taskarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

var input = document.getElementById("0");
localStorage.setItem("zero", input.value);
document.getElementById('0').value = localStorage.getItem('zero');

var input = document.getElementById("1");
localStorage.setItem("one", input.value);
document.getElementById('1').value = localStorage.getItem('one');

var input = document.getElementById("2");
localStorage.setItem("two", input.value);
document.getElementById('2').value = localStorage.getItem('two');

var input = document.getElementById("3");
localStorage.setItem("three", input.value);
document.getElementById('3').value = localStorage.getItem('three');

var input = document.getElementById("4");
localStorage.setItem("four", input.value);
document.getElementById('4').value = localStorage.getItem('4');

var input = document.getElementById("5");
localStorage.setItem("five", input.value);
document.getElementById('5').value = localStorage.getItem('five');

var input = document.getElementById("6");
localStorage.setItem("six", input.value);
document.getElementById('6').value = localStorage.getItem('six');

var input = document.getElementById("7");
localStorage.setItem("seven", input.value);
document.getElementById('7').value = localStorage.getItem('seven');