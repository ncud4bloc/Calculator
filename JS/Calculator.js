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

var clickCount = 0;
var activEO = 'enter';
var pmSign = 0;

// Functions:

var help = function(){
    alert('This calculator uses Reverse Polish Notation, RPN, where the numbers are input first followed by the desired mathematical operand.\n\nFor example,\n\nto multiply 3 times 5 you would enter:\n\n"3 - Enter - 5 - *", to get 15.\n\nThe "back" button is a backspace to correct input typos.\nThe "dec" button sets the number of places after the decimal point.\nThe "Clear" button erases all display fields.');
}

var makeFloat = function(arrayInput){
    return parseFloat(arrayInput);
}

var fixNumDec = function(){
    var decNum = prompt('Enter desired number of places after the decimal point:');
    return decNum;
}

var opSetupNum1 = function(){
    var inLength = currentInput.length;
    for (var i = 0; i < inLength; i++){
    num1Str += currentInput[i]; 
    }
    if (pmSign == 1){
        num1Flt = (makeFloat(num1Str) * -1);
        num1Str = num1Flt.toString();
    } else {
        num1Flt = makeFloat(num1Str);
    }
    pmSign = 0;
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
     if (pmSign == 1){
        num2Flt = (makeFloat(num2Str) * -1);
        num2Str = num2Flt.toString();
    } else {
        num2Flt = makeFloat(num2Str);
    }
    pmSign = 0;
    $num2Display.text(num2Str);
    currentInput = [];
    num2Str = [];
    activEO = 'enter';
}

var oppoNum = function(){
    pmSign = 1;
}

// Events:

$howTo.on('click',function(){
    help();
});

$numPlaces.on('click',function(){
    fixNumDec();
});

$zero.on('click',function(){
    currentInput.push("0");
    console.log(currentInput);
});

$one.on('click',function(){
    currentInput.push("1");
    console.log(currentInput);
});

$two.on('click',function(){
    currentInput.push("2");
    console.log(currentInput);
});

$three.on('click',function(){
    currentInput.push("3");
    console.log(currentInput);
});

$four.on('click',function(){
    currentInput.push("4");
    console.log(currentInput);
});

$five.on('click',function(){
    currentInput.push("5");
    console.log(currentInput);
});

$six.on('click',function(){
    currentInput.push("6");
    console.log(currentInput);
});

$seven.on('click',function(){
    currentInput.push("7");
    console.log(currentInput);
});

$eight.on('click',function(){
    currentInput.push("8");
    console.log(currentInput);
});

$nine.on('click',function(){
    currentInput.push("9");
    console.log(currentInput);
});

$point.on('click',function(){
    currentInput.push(".");
    console.log(currentInput);
});

$undo.on('click',function(){
    currentInput.pop();
    console.log(currentInput);
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
    oppoNum();
});

$clear.on('click',function(){
    num1Flt = 0;
    num2Flt = 0;
    $num1Display.text('num1');
    $num2Display.text('num2');
    $actionDisplay.text('action');
    $answerDisplay.text('answer');
});