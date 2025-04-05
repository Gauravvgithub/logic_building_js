// Date : 30/03/2025

// Questions 
// leetcode two sum 

// Solution

function getIndex(arr,target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
}
console.log(getIndex([2,7,11,15],9))