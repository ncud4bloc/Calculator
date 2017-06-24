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

// Functions:

var help = function(){
    alert('This calculator uses Reverse Polish Notation, RPN, where the numbers are input first followed by the desired mathematical operand.\n\nFor example,\n\nto multiply 3 times 5 you would enter:\n\n"3 - Enter - 5 - *", to get 15.\n\nThe "back" button is a backspace to correct input typos.\nThe "dec" button sets the number of places after the decimal point.\nThe "Clear" button erases all display fields.');}

// Events:

$howTo.on('click',function(){
    help();
});