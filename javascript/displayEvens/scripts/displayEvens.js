// Function's purpose - check if even
// Input num
// Output T/F
function isEven(num){
   if (num % 2 == 0){
      return true;
   };
   return false;
};

// Function's purpose - calculate even numbers in series
// Input start end and increment
// Output array
function evenNumbers(start, end, increment){
   arr = [];
   current = start;
   while (current < end){
      if (isEven(current)){
         arr.push(current);
      };
      current += increment;
   };
   return arr;
};

// Function's purpose - clear previous contents
// Input: none
// Output: none

function clearResults() {
   document.getElementById("evens").innerText = "";
};

// Function's purpose - verify the user's input is expected
// Input - none
// Output - none
function validateForm() {
   clearResults();
   let start = document.getElementById("start").value;
   let end = document.getElementById("end").value;
   let step = document.getElementById("step").value;
   if (start == "" || isNaN(start) || Number(start) < 0) {
      alert("Starting number must be a positive number.");
      document.forms["formContent"]["start"]
         .parentElement.className = "form-group has-error";
      document.forms["formContent"]["start"].focus();
      return false;
   };
   if (end == "" || isNaN(end) || Number(end) < Number(start) || Number(end) < 0) {
      alert("Ending number must be a positive number greater than the start number.");
      document.forms["formContent"]["end"]
         .parentElement.className = "form-group has-error"
      document.forms["formContent"]["end"].focus();
      return false;
   };
   if (step == "" || isNaN(step) || Number(step) < 0) {
      alert("Step must be a positive number greater than 0.");
      document.forms["formContent"]["step"]
         .parentElement.className = "form-group has-error"
      document.forms["formContent"]["step"].focus();
      return false;
   };

   document.getElementsByClassName("results")[0].style.display = "block";
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("numStart").innerText = start;
   document.getElementById("numEnd").innerText = end;
   document.getElementById("numStep").innerText = step;

   results = evenNumbers(Number(start), Number(end), Number(step));
   console.log(results);
   console.log(typeof results);
   document.getElementById("evens").innerText = results

   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
};