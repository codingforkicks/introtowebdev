function findMax(arr) {
   let highestNum = Number(arr[0]);
   arr.forEach(element => {
      if (Number(element) > Number(highestNum)) {
         highestNum = element;
      }
   });
   return highestNum;
}

let arr = prompt("Enter your array separated by commas").split(",")
console.log(findMax(arr));