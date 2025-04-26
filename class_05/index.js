const twoSum = (number,target) => {
    for(let i = 0;i<number.length;i++){
        for(let j = i+1;j<number.length;j++){
            if(number[i] + number[j]===target){
               return [i,j] 
            }
        }
    }
}

console.log(twoSum([1,2,9,10,8],9))