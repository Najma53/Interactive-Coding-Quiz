// getting variables from HTML files

var start = document.getElementById("start");
var questions = document.getElementById("questions");
var choices1 = document.getElementById("1");
var choices2 = document.getElementById("2");
var choices3 = document.getElementById("3");
var choices4 = document.getElementById("4");
var counter = document.getElementById("counter");
var end = document.getElementById("end-screen");
var time = document.getElementById(time);

// creating variables
var lastQuestion = questions.length - 1; //index of last question 
var runningQuestion = 0;
var score = 0;