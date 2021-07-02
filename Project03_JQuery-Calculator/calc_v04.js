/*
 * Implement all your JavaScript in this file!
 */

/********** 'calculator' Object Definition **********/
var calculator = function(displayContent) {
    this.displayContent = displayContent;

    this.clear = function() {
       this.firstOperand = '';
       this.currentOperand = '';
       this.operation = '';
       operationCount = 0; 
    }

    this.appendNumber = function(number) {
       this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    this.chooseOperation = function(operation) {
       if(/[\+\-\*\÷][\+\-\*\÷]$/.test(tempText)) {
          this.operation = operation;      
       }
       if(this.currentOperand === '') {
          return '';
       }
       if(this.firstOperand !== '') {
          this.compute();
          // Exception Case03 - Performing an operation on multiple numbers
          if(operationCount>=2){
             this.updateDisplay();
          }
       }
       this.operation = operation;
       this.firstOperand = this.currentOperand;
       this.currentOperand = '';
    }

    this.compute = function() {
       var result = 0;
       var firstNum = Number(this.firstOperand);
       var currentNum = Number(this.currentOperand);
       // Exception Case04 - When consecutive equalsButtons clicked
       if(/==$/.test(tempText)){
          firstNum = this.currentOperand;
          currentNum = tempNumber;
          this.operation = tempOperation;
       }
       // Exception Case05 - Either firstNum or currentNum is not a number
       if(isNaN(firstNum) || isNaN(currentNum)) {
           return '';
       }
       // Exception Case06 - When an equalsButtons clicked without clicking the 2nd operand and click the operand only and click equalsButton again
       // if(/\d[\+\-\*\÷]=\d=/.test(tempText)){
       //    firstNum = tempNumber02;
       //    currentNum = Number(this.currentOperand);
       //    this.operation = tempOperation02;
       // }

      tempOperation = this.operation;
      tempNumber = currentNum;
       switch(this.operation) {
          case '+':
             result = firstNum + currentNum;
             break;
          case '-':
             result = firstNum - currentNum;
             break;   
          case '*':
             result = firstNum * currentNum;
             break; 
          case '÷':
             result = firstNum / currentNum;
             break;   
          default:
             result = '';                           
       }
       // Exception Case02 - When an equal button clicked without clicking any operation button
       if(operationCount === 0){
          this.currentOperand = currentNum; 
          this.operation = '';
          this.firstOperand = '';                
       }
       else {
          // Exception Case04 - When an equal button clicked without clicking the second operand button
          if(this.currentOperand === ''){
             this.currentOperand = firstNum; 
             tempNumber02 = firstNum;
             this.operation = this.operation;
             tempOperation02 = this.operation;
             this.firstOperand = ''; 
          }
          else{  
             // Normal Cases
             this.currentOperand = result;   
             this.operation = '';
             this.firstOperand = '';  
          }   
       }
    }


    this.updateDisplay = function() {
       this.displayContent.val(this.currentOperand);        
    }

};


/********** Var Definition **********/
var displayContent = $('#display');
var calcul = new calculator(displayContent);
var value = 0;
var text = '';
var operationCount = 0;
var clickedElements = [];
var tempText = '';
var tempOperation = '';
var tempOperation02 = '';
var tempNumber = 0;
var tempNumber02 = 0;


/********** When Page Loaded **********/
$(window).on("load", function(){
    calcul.clear();
    $('#display').val('');
    $('#display').html('');
});

/********** When Special Cases Clicked **********/
$('.Button').click(function(){
    tempText = $(this).text();
    clickedElements.push(tempText);
    tempText = clickedElements.join('');
    // Exception Case01 - When a new number clicked right after clicking the equalsButton
    if(/=\d/.test(tempText)) {
       calcul.clear();
       calcul.updateDisplay();  
       clickedElements = [];
       tempText = '';
    }
});

/********** When Each Button Clicked **********/
$('.numButton').click(function(){
    $('#display').prop("disabled", false);
    value = $(this).val();
    calcul.appendNumber(value);
    calcul.updateDisplay();
});

$('.oprButton').click(function(){
    operationCount += 1;
    text = $(this).text();
    calcul.chooseOperation(text);
});

$('#equalsButton').click(function(){
    calcul.compute();
    calcul.updateDisplay();
});

$('#clearButton').click(function(){
    calcul.clear();
    calcul.updateDisplay();
});









