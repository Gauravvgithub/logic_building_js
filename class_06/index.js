// let n=1

function printName(name,i){
    i++
    if(i==10)return 2;
    console.log(name,i)
    printName(name,i)
    console.log("After",name,i)
}
function mulitply(){
    return 2
}
// printName("Anand",1)

//Basic
// let arr = [1,2,3,4,5]

// function printArr(arr,i){
//     if(arr.length<=i) return;
//     i++;
//     printArr(arr,i)
//     console.log(arr[i])
// }

// printArr(arr,0)

function sumArray(arr, i) {
    if (i === arr.length - 1) return arr[i];
    return arr[i] + sumArray(arr, i + 1);
}

// Example usage:
const arr = [1, -2, 43, 42,5,6];
// console.log(sumArray(arr, 0)); // Output: 10

function max(arr,i){
    if(arr.length-1===i) return arr[i]
    i++;
    let newmax = max(arr,i)
    return arr[i]>newmax ? arr[i]:newmax;
}
console.log(max(arr,0))