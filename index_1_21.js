// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function



// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not

function findTarget(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return target
        }
    }
    return undefined 
}


console.log(findTarget([1,2,3,4,5], 5));


// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

function biggerThan14(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 14){
            return arr[i]
        }
    }
    return undefined
}


// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

function findLongString(arr) {
    let longString = arr.find(str => str.length > 4);
    return longString;
  }

// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object - 
/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/
function findObjectById(array, id) {
    return object;
  }
return undifined 

[
    {
      "id": "Y42C_a",
      "name": "Robert",
      "occupation": "Chef",
      "eyeColor": "green"
    },
    {
      "id": "Y42C_b",
      "name": "Robert",
      "occupation": "Chef",
      "eyeColor": "green"
    },
    {
      "id": "Y42C_c",
      "name": "Robert",
      "occupation": "Chef",
      "eyeColor": "green"
    },
    {
      "id": "Y42C_d",
      "name": "Robert",
      "occupation": "Chef",
      "eyeColor": "green"
    },

// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this - 
/*
{
 name: "Robert"
}
*/
function nameWithObj(arr,targetid){
    const obj = {}; 
   for(let ele of arr) {
       if(ele.id === targetid){
        
        return {name:ele.name} 
        
        }
      }
      return undefined;


