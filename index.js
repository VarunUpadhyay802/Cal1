var display_ = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
operand1=0;
var arr = ["*", "+", "-", "/"];
//now we need to figure out which button is getting clicked
//if a number is getting clicked then  i should append that number on the display
//if a operator is getting clicked then display should get cleared and operand 1 should get saved and wait for the second
//if equal to get clicked you should have your expression ready and it should evaluate the expression
//now for identifying the button we are using data attribute here
//value is the attribute that we are createing , so we need to first store that value on click in the for loop first step
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    
    //so now this value is stored then you can say that different calculation will happen regarding the valuethat whether it is operator or  numeric value
    if (value == "operator[p]") {
      operand1 = parseFloat(display.textContent);
      display_.innerText = "";
      // operand 1 is being stored from above thing , parse float
    } else if (value == "=") {
      operand2 = parseFloat(display_.textContent);
      // console.log(operand1);
      // console.log(operand2);
      display_.innerText =+value;
      alert(eval("display_.innertext"))
      var x= display_.innerText;
      
    } else {
      display_.innerText += value;
      //so from above code we are specifying that it shold display element which was pressed eaerlier as well as which was pressed later on
    }
    //so you are having problem that how can we choose number in else if condition , well the logic is
    //that if operators are chosen as well as equal to sign is chosen then the only thing left is numbers , so you can put them in the else condition with no parameter
  });
}
var ac_ = document.getElementById("button-clear");
ac_.addEventListener("click", function () {
  // operand1=0;
  // operand2=0;
 
  display_.innerText = "";
  
});