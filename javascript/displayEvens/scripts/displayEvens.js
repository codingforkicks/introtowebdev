// // Function's purpose - reset form fields to their natural state
// // Input - none
// // Output - none
// function clearErrors(){
//    for (let loopCounter = 0; 
//       loopCounter < document.forms["displayEvens"].elements.length; 
//       loopCounter++) {
//       if (document.forms["displayEvens"].elements[loopCounter]
//          .parentElement.className.indexOf("has-") != -1) {
          
//          document.forms["displayEvens"].elements[loopCounter]
//             .parentElement.className = "form-group";
//       }
//   }   
// };

// // Function's purpose - clear all fields in the <form>
// // Input - none
// // Output - none
// function resetForm() {
//    clearErrors();
//    document.forms["displayEvens"]["start"].value = "";
//    document.forms["displayEvens"]["end"].value = "";
//    document.forms["displayEvens"]["step"].value = "";
//    document.getElementById("results").style.display = "none";
//    document.getElementById("submitButton").innerText = "Submit";
//    document.forms["displayEvens"]["start"].focus();
// };

// Function's purpose - verify the user's input is expected
// Input - none
// Output - none
function validateForm() {
   // clearErrors();
   let start = document.getElementById("start").value;
   let end = document.getElementById("end").value;
   let step = document.getElementById("step").value;
   console.log(`working: start ${start} \n end: ${end} \n step: ${step}`);
   if (start == "" || isNaN(start) || start < 0) {
      alert("Starting number a positive number.");
      document.forms["formContent"]["start"]
         .parentElement.className = "form-group has-error";
      document.forms["formContent"]["start"].focus();
      return false;
   }
   if (end == "" || isNaN(end) || end < start || end < 0) {
      alert("Ending number must be  a positive number greater than the start number.");
      document.forms["formContent"]["end"]
         .parentElement.className = "form-group has-error"
      document.forms["formContent"]["end"].focus();
      return false;
   }
   if (step == "" || isNaN(step) || step < 0) {
      alert("Step must be a positive number greater than 0.");
      document.forms["formContent"]["step"]
         .parentElement.className = "form-group has-error"
      document.forms["formContent"]["step"].focus();
      return false;
   }
   document.getElementsByClassName("results");
   console.log();
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   console.log("working")
   document.getElementById("numStart").innerText = start;
   document.getElementById("numEnd").innerText = end;
   document.getElementById("numStep").innerText = step;

   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
};