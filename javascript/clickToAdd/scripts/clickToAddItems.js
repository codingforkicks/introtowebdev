// Function's purpose - reset form fields to their natural state
// Input - none
// Output - none
function clearErrors(){
   for (let loopCounter = 0; 
      loopCounter < document.forms["numberFun"].elements.length; 
      loopCounter++) {
      if (document.forms["numberFun"].elements[loopCounter]
         .parentElement.className.indexOf("has-") != -1) {
          
         document.forms["numberFun"].elements[loopCounter]
            .parentElement.className = "form-group";
      }
  }   
};

// Function's purpose - clear all fields in the <form>
// Input - none
// Output - none
function resetForm() {
   clearErrors();
   document.forms["numberFun"]["num1"].value = "";
   document.forms["numberFun"]["num2"].value = "";
   document.getElementById("results").style.display = "none";
   document.getElementById("submitButton").innerText = "Submit";
   document.forms["numberFun"]["num1"].focus();
};

// Function's purpose - verify the user's input is expected
// Input - none
// Output - none
function validateForm() {
   console.log("working");
   clearErrors();
   let num1 = document.forms["numberFun"]["num1"].value;
   let num2 = document.forms["numberFun"]["num2"].value;
   console.log(`num1: ${num1}, num2: ${num2}`);
   if (num1 == "" || isNaN(num1)) {
      alert("Num1 must be filled in with a number.");
      document.forms["numberFun"]["num1"]
         .parentElement.className = "form-group has-error";
      document.forms["numberFun"]["num1"].focus();
      return false;
   }
   if (num2 == "" || isNaN(num2)) {
      alert("Num2 must be filled in with a number.");
      document.forms["numberFun"]["num2"]
         .parentElement.className = "form-group has-error"
      document.forms["numberFun"]["num2"].focus();
      return false;
   }
   document.getElementById("results").style.display = "block";
   console.log("display change");
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1) +
                                                   Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
};