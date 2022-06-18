function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0;i<array.length;i++){
    const complement=target-array[i];
    for (let j=i+1;j<array.length;j++){
      if(array[j]===complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n*n)
*/

/* 
  Add your pseudocode here
  iterate over array of numbers
    for the current number, identify complimentary number which can add to target
    iterate over remaining array numbers
   check to see which one in the remaining bunch is a complement
    if found, return false
   if end of array is reached and complement not found, return false  
*/

/*
  Add written explanation of your solution here
  The function takes in two parameters, the array and a target. A for loop is defined to iterate over each elements in the array.
  A constant variable known as compliment seeks to determine the value that can be added to an element in an array to find the target.
  The function then iterates over the remaining values in array to determine the availability of the complement.
  If found, the functio would return true and if not, would return a false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
