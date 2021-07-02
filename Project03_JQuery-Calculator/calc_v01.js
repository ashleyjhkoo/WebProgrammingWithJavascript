/*
 * Implement all your JavaScript in this file!
 */

   /********* Case #1 ****************
  ************************************
  ************************************/



  /********** Page Loaded **********/
    $(window).on("load", function(){
        $('#display').html('');
    });

  /********** Var Definition **********/
    var displayArray = [];
    var displayArray02 = [];
    var allOperator = [];
    var numArray = [];
    var operatorIdPool = ["addButton","subtractButton","multiplyButton","divideButton"];

    var firstNum = null;
    var secondNum = null;
    var result = 0;
    var currentOperator = null;
    var tempNum = 0;
    var tempNum02 = 0;
    var tempNum03 = 0;
    var value = 0;
    var value02 = 0;


  /********** While Clicking Buttons **********/
    $('.Button').click(function() {
		$('#display').prop("disabled", false); 

        /********** First Number Display **********/
        if(operatorIdPool.indexOf(this.id) === -1){		          
	        value = $(this).val();
	        displayArray.push(value);
	        if(value != ""){        
	        	firstNum = Number(displayArray.join(''));
	        }	

	        $('#display').val(firstNum);
	        // var num01 = $('#display').val(firstNum);
	        // numArray.push(firstNum);
	    }    


        /********** Second Number Display **********/

	        if( (firstNum != null) && (operatorIdPool.indexOf(this.id) != -1) ){
                // $('.oprButton').click(function() {

		            currrentOperator = $(this).text();
		            allOperator.push(currentOperator);
		            displayArray02 = [];
			        $('#display').html('');
			        $('.numButton').click(function() {

			        	// tempNum = Number(displayArray.toString());
            //     	    numArray.push(tempNum);
            //     	    if(displayArray02 != []){
	           //      	    tempNum02 = Number(displayArray02.toString());
	           //      	    numArray.push(tempNum02);
	           //      	}    
				        value02 = $(this).val();
				        displayArray02.push(value02);
				        if(value02 != ""){   	        
					        secondNum = Number(displayArray02.join(''));
					    }  

				        $('#display').val(secondNum);    
				        var num02 = $('#display').val(secondNum);  
				        // numArray.push(secondNum);     	
			        });
	            // });	
	        }
    
        // numArray.push(displayArray02);
 
        /********** When Operator Clicked First **********/
        if( (firstNum == null) && (operatorIdPool.indexOf(this.id) === -1) ){       
     
        } 

		$('#equalsButton').click(function() {
			var i = 0;
			var j = 0;
	        if( (firstNum != null) && (secondNum != null) ){
	        	// tempNum03 = Number(displayArray02.toString());
	         //    numArray.push(tempNum03);
	        	for(i=0; i<numArray.length ; i+=2) {
                    for(j=0; j<allOperator.length; j++) {
                    	if( (numArray.length >= 2) && (allOperator.length >= 1) ) {
				        	result += Number(eval("numArray[i]" + "allOperator[j]" + "numArray[i+1]"));
				        	$('#display').val(result);
				        }	
			        }	
		        }	

	        }
        });

 		$('#clearButton').click(function() {

            displayArray02 = [];
            displayArray = [];
            
		    $('#display').html('');
            $('#display').val('');
        });       

    });	
 





   /********* End of Case #1 *********
  ************************************
  ************************************/
  