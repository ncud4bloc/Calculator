// Variables:

$num1Display = $('#input1');
$num2Display = $('#input2');
$actionDisplay = $('#act2');
$answerDisplay = $('#answer');

$howTo = $('#howTo_box');

$zero = $('#zero');
$one = $('#one');
$two = $('#two');
$three = $('#three');
$four = $('#four');
$five = $('#five');
$six = $('#six');
$seven = $('#seven');
$eight = $('#eight');
$nine = $('#nine');

$point = $('#point');
$undo = $('#undo');

$divide = $('#divide');
$multiply = $('#multiply');
$minus = $('#minus');
$plus = $('#plus');
$plusMinus = $('#plusMinus');
$sqrt = $('#sqrt');
$square = $('#square');
$numPlaces = $('#numPlaces');

$enter = $('#opEnter');
$clear = $('#opClear');

var currentInput = [];
var num1Str = [];
var num2Str = [];
var act2Str = [];
var answerStr = [];

var num1Flt;
var num2Flt;
var answerFlt;

var activEO = 'enter';
var displayDump;
var pmSign = 0;
var rootX = 0;
var sqX = 0;

// Functions:

var help = function(){
    alert('This calculator uses Reverse Polish Notation, RPN, where the numbers are input first followed by the desired mathematical operand.\n\nFor example,\n\nto multiply 3 times 5 you would enter:\n\n"3 - Enter - 5 - *", to get 15.\n\nThe "back" button is a backspace to correct input typos.\nThe "dec" button sets the number of places after the decimal point.\nThe "Clear" button erases all display fields.');
}

var makeFloat = function(arrayInput){
    return parseFloat(arrayInput);
}

var fixNumDec = function(){
    var decNum = prompt('Enter desired number of places after the decimal point:');
    var detail = answerFlt.toFixed(decNum);
    $answerDisplay.text('');
    $answerDisplay.text(detail);
}

var opSetupNum1 = function(){
    var inLength = currentInput.length;
    for (var i = 0; i < inLength; i++){
    num1Str += currentInput[i]; 
    }
    num1Flt = makeFloat(num1Str);
    if (rootX == 1){
        num1Flt = Math.sqrt(makeFloat(num1Str));
        num1Str = num1Flt.toString();
    } else {
        num1Flt = makeFloat(num1Str);
    }
    rootX = 0;
    if (sqX == 1){
        num1Flt = (makeFloat(num1Str) * makeFloat(num1Str));
        num1Str = num1Flt.toString();
    } else {
        num1Flt = makeFloat(num1Str);
    }
    sqX = 0;
    $num1Display.text(num1Str);
    currentInput = [];
    num1Str = [];
    activEO = 'action';
}

var opSetupNum2 = function(){
    var inLength = currentInput.length;
    for (var i = 0; i < inLength; i++){
    num2Str += currentInput[i]; 
    }
    num2Flt = makeFloat(num2Str);
    if (rootX == 1){
        num2Flt = Math.sqrt(makeFloat(num2Str));
        num2Str = num2Flt.toString();
    } else {
        num2Flt = makeFloat(num2Str);
    }
    rootX = 0;
    if (sqX == 1){
        num2Flt = (makeFloat(num2Str) * makeFloat(num2Str));
        num2Str = num2Flt.toString();
    } else {
        num2Flt = makeFloat(num2Str);
    }
    sqX = 0;
    $num2Display.text(num2Str);
    currentInput = [];
    num2Str = [];
    activEO = 'enter';
}

var oppoNum = function(){
    pmSign = 1;
}

var getSQRT = function(){
    rootX = 1;
}

var getSquare = function(){
    sqX = 1;
}

var currentDisplay = function(){
    displayDump = currentInput;
    if (activEO == 'enter'){
        $num1Display.text(displayDump);
    } else {
        $num2Display.text(displayDump);
    }
}

// Events:

$howTo.on('click',function(){
    help();
});

$numPlaces.on('click',function(){
    fixNumDec();
    /*$answerDisplay.text('');
    $answerDisplay.text(detail);*/
});

$zero.on('click',function(){
    currentInput.push("0");
    console.log(currentInput);
    currentDisplay();
});

$one.on('click',function(){
    currentInput.push("1");
    console.log(currentInput);
    currentDisplay();
});

$two.on('click',function(){
    currentInput.push("2");
    console.log(currentInput);
    currentDisplay();
});

$three.on('click',function(){
    currentInput.push("3");
    console.log(currentInput);
    currentDisplay();
});

$four.on('click',function(){
    currentInput.push("4");
    console.log(currentInput);
    currentDisplay();
});

$five.on('click',function(){
    currentInput.push("5");
    console.log(currentInput);
    currentDisplay();
});

$six.on('click',function(){
    currentInput.push("6");
    console.log(currentInput);
    currentDisplay();
});

$seven.on('click',function(){
    currentInput.push("7");
    console.log(currentInput);
    currentDisplay();
});

$eight.on('click',function(){
    currentInput.push("8");
    console.log(currentInput);
    currentDisplay();
});

$nine.on('click',function(){
    currentInput.push("9");
    console.log(currentInput);
    currentDisplay();
});

$point.on('click',function(){
    currentInput.push(".");
    console.log(currentInput);
    currentDisplay();
});

$undo.on('click',function(){
    currentInput.pop();
    console.log(currentInput);
    currentDisplay();
});

$enter.on('click',function(){
    opSetupNum1();
});

$divide.on('click',function(){
    opSetupNum2();
    $actionDisplay.text('divide');
    answerFlt = num1Flt / num2Flt;
    $answerDisplay.text(answerFlt);
});

$multiply.on('click',function(){
    opSetupNum2();
    $actionDisplay.text('multiply');
    answerFlt = num1Flt * num2Flt;
    $answerDisplay.text(answerFlt);
});

$minus.on('click',function(){
    opSetupNum2();
    $actionDisplay.text('minus');
    answerFlt = num1Flt - num2Flt;
    $answerDisplay.text(answerFlt);
});

$plus.on('click',function(){
    opSetupNum2();
    $actionDisplay.text('plus');
    answerFlt = num1Flt + num2Flt;
    $answerDisplay.text(answerFlt);
});

$plusMinus.on('click',function(){
    currentInput.unshift("-");
    currentDisplay();
    console.log(currentInput);
});

$sqrt.on('click',function(){
    getSQRT();
 //   if (activEO == 'action'){
 //       opSetupNum2();
 //   }
});

$square.on('click',function(){
    getSquare();
});

$clear.on('click',function(){
    num1Flt = 0;
    num2Flt = 0;
    $num1Display.text('num1');
    $num2Display.text('num2');
    $actionDisplay.text('action');
    $answerDisplay.text('answer');
});