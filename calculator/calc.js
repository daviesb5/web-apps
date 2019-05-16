//Basic Values
var initialVal = 0;
var x = initialVal;
var decimalNum = initialVal;
var decimalAmount = initialVal;
var inputDisplay = initialVal;
var answerDisplay = initialVal;
var oldInput = '0';
var operChoice;
var operQuantity = initialVal;
var decimalUse = false;
var operInUse = false;
var newAnswer = initialVal;
var preZero = '';
//fixes decimal math
var curDecimus = initialVal;
var maxDecimus = initialVal;
var decimusNumber = 1;
document.getElementById('inputVal').innerHTML = initialVal;
document.getElementById('answerDisplay').innerHTML = initialVal;
document.getElementById('decimalNum').innerHTML = initialVal;

/*
(function (){
  resetCalc();
}());

window.onload = function(){
  alert("window.onload = function();"); d
  resetCalc();
};
*/

/*
=======================
RESETS CALCULATOR
=======================
*/
//Applies Initial Value to Calculator
function resetCalc() {
  //alert("function resetCalc();");
  //global variables
  inputDisplay = initialVal;
  answerDisplay = initialVal;
  oldInput = '';
  decimalNum = initialVal;
  decimalAmount = initialVal;
  decimalUse = false;
  operQuantity = initialVal;
  operInUse = false;
  newAnswer = initialVal;
  preZero = '';
  //fixes decimal math
  curDecimus = initialVal;
  maxDecimus = initialVal;
  decimusNumber = 10;
  //display values
  document.getElementById('inputVal').innerHTML = initialVal;
  document.getElementById('answerDisplay').innerHTML = initialVal;
  document.getElementById('decimalNum').innerHTML = initialVal;
}
function inputReset() {
  preZero = '';
  decimalNum = initialVal;
  decimalUse = false;
  //fixes decimal math
  curDecimus = initialVal;
}
//automatically resets calculator (for spacing)
function loadedCalc() {
  //alert("Auto Reset");
  resetCalc();
};
loadedCalc();

/*
=======================
DECIMALS / NUMBERS
=======================
*/
//enters values
function enterVal(x) {
  inputDisplay = document.getElementById('inputVal').innerHTML;
  //document.getElementById('inputVal').innerHTML = inputDisplay + x;
  /*
  alert("enterVal(x) -- answerDisplay: " + answerDisplay);
  alert("enterVal(x) -- inputDisplay: " + inputDisplay);
  */
  //User is entering values, not operations
  operInUse = false;
  //alert("enterVal(x) -- answerDisplay: " + answerDisplay);
  if (x === '.') {
    if (inputDisplay === '0') {
      inputDisplay = '';
      enterDec('0.');
    } else {
      enterDec(x);
    }
  } else {
    enterNum(x);
  }
}
//stops user from enter multiple decimals
function enterDec(x) {
  //document.getElementById('inputVal').innerHTML = inputDisplay + x;
  /*
  alert("enterDec(x) -- answerDisplay: " + answerDisplay);
  alert("enterDec(x) -- inputDisplay: " + inputDisplay);
  */
  if (decimalUse === false) {
    decimalUse = true;
    //sets oldInput to value of x
    oldInput = x;
    enterItem(x);
  } else {
    alert("Decimal already in use");
  }
}
function enterNum(x) {
  if (inputDisplay.length <= 2) {
    if (inputDisplay === '0') {
      inputDisplay = '';
    } else if (inputDisplay === '.') {
      //nothing happens
    }
  } else {
    if (decimalUse === false) {
      if (oldInput === '0') {
        //cuts off last item of string
        inputDisplay = inputDisplay.slice(0, -1);
        //alert("inputDisplay: " + inputDisplay);
        document.getElementById('inputVal').innerHTML = inputDisplay;
        answerDisplay = inputDisplay;
      } else if (oldInput === '.') {
        //nothing happens
      }
    }
  }
  if (decimalUse === true) {
    curDecimus += 1;
    if (curDecimus > maxDecimus) {
      maxDecimus = curDecimus;
    } else {
      curDecimus = curDecimus;
    }
    //alert("maxDecimus: " + maxDecimus);
  };
  //sets oldInput to value of x
  oldInput = x;
  enterItem(x);
}
function enterItem(x) {
  document.getElementById('inputVal').innerHTML = inputDisplay + x;
  answerDisplay = inputDisplay + x;
  //
  solveEquation();
}

/*
=======================
MATH OPERATIONS
=======================
*/
//Fix later
function performOper(operChoice) {
  //sets oldInput to non-zero input
  oldInput = "operInUse";
  //determines operation
  if (operInUse == false) {
    operInUse = true;
    operQuantity++;
    inputReset();
    //answerDisplay = inputDisplay;
    if (operChoice == 'divi') {
      diviFunction(inputDisplay, answerDisplay);
    } else if (operChoice == 'mult') {
      multFunction(inputDisplay, answerDisplay);
    } else if (operChoice == 'subt') {
      subtFunction(inputDisplay, answerDisplay);
    } else if (operChoice == 'addi') {
      addiFunction(inputDisplay, answerDisplay);
    }
  } else {
    alert('Please enter number(s)');
  }
}
function diviFunction(inputDisplay, answerDisplay) {
  answerDisplay = answerDisplay + "/";
  document.getElementById('inputVal').innerHTML = answerDisplay;
}
function multFunction(inputDisplay, answerDisplay) {
  answerDisplay = answerDisplay + "*";
  document.getElementById('inputVal').innerHTML = answerDisplay;
}
function subtFunction(inputDisplay, answerDisplay) {
  answerDisplay = answerDisplay + "-";
  document.getElementById('inputVal').innerHTML = answerDisplay;
}
function addiFunction(inputDisplay, answerDisplay) {
  answerDisplay = answerDisplay + "+";
  document.getElementById('inputVal').innerHTML = answerDisplay;
}
/*
=======================
ANSWER DISPLAY
=======================
*/
function solveEquation() {
  newAnswer = eval((document.getElementById('inputVal').innerHTML));
  /*
  var x1 = new Big ((document.getElementById('inputVal').innerHTML));
  alert ("x1: " + x1);
  */
  document.getElementById('answerDisplay').innerHTML = newAnswer;
}

/*
=======================
TEXTOVERFLOW
=======================

function clipText() {
  //Clipping Text
  document.getElementById('inputVal').style.textOverflow = "ellipsis";
  document.getElementById('answerDisplay').style.innerHTML.textOverflow = ellipsis;
}
*/