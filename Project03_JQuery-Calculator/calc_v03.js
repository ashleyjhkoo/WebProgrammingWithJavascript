/*
 * Implement all your JavaScript in this file!
 */

var calculator = function(displayContent) {
    this.displayContent = displayContent;

    this.clear = function() {
       this.firstOperand = '';
       this.currentOperand = '';
       this.operation = '';
    }

    this.appendNumber = function(number) {
          this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    this.chooseOperation = function(operation) {
       operationCount += 1;
       if(this.currentOperand === '') {
           return '';
       }
       if(this.firstOperand !== '') {
           this.compute();
       }
       this.operation = operation;
       this.firstOperand = this.currentOperand;
       this.currentOperand = '';

    }

    this.compute = function() {
       var result = 0;
       var firstNum = Number(this.firstOperand);
       var currentNum = Number(this.currentOperand);
       if(isNaN(firstNum) || isNaN(currentNum)) {
           return '';
       }
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
       this.currentOperand = result;
       this.operation = '';
       this.firstOperand = '';       
    }


    this.updateDisplay = function() {
       if(this.operation != '') {
          this.displayContent.val(this.currentOperand);        
       }
       else {
          this.displayContent.val(this.currentOperand);
       }
    }

};


/********** Var Definition **********/
var displayContent = $('#display');
var calcul = new calculator(displayContent);
var value = 0;
var text = '';
var operationCount = 0;


/********** Page Loaded **********/
$(window).on("load", function(){
    calcul.clear();
    $('#display').val('');
    $('#display').html('');
});


$('.numButton').click(function(){
    $('#display').prop("disabled", false);
    value = $(this).val();
    calcul.appendNumber(value);
    calcul.updateDisplay();
});

$('.oprButton').click(function(){
    text = $(this).text();
    calcul.chooseOperation(text);
    calcul.updateDisplay();
});

$('#equalsButton').click(function(){
    calcul.compute();
    calcul.updateDisplay();
});

$('#clearButton').click(function(){
    calcul.clear();
    calcul.updateDisplay();
});








