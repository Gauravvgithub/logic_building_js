// Time Complexity // Mathematical
// Space Complexity 
// Notation

// let arr = []
// let obj = {}

// Memory (RAM)

// let arr = [1,2,3,4,5,6,9... ] // O(n)
// let obj = {name:"anand",dev:"mobile",address:"ksdfj"} // O(1)

// let brr = [...arr] // O(n)

// silent listen
// function isAnagramOrNot(s,t){ // [1,2,3,4,5]
//     if(s.length!==t.length) return false
//     let flag = false;
//     for(let i=0;i<s.length;i++){
//         let ch = s[i] //
//        const [foundOrNOt,frequency] =  checkWordisPresentOrNot(t,ch)
//        if(!foundOrNOt){
//         console.log("Character misMatch")
//         break;
//        }else{   
//             flag = true
//        }

//     }
//     if(flag) console.log("Valid Anagaram")
// }

// function checkWordisPresentOrNot(str,word){
//         let occurences=0;  // listen , z
//     for(let i=0;i<str.length;i++){
//         if(str[i] === word){
//             occurences++
//         }
//     }
//     if(occurences!==0)
//     return [true,occurences]
//     else
//     return [false,occurences]
// }

console.log(isAnagramOrNot("listen","earth8")) // O(n^2)

function isAnagramOrNot(s,t){ // O(n) + O(n) = O(n) + O(n)
    if(s.length!==t.length) return false;
    let hashMap1 = {}
    let hashMap2 = {}
    for(let i=0;i<s.length;i++){
        if(hashMap1[s[i]]!==undefined){
            hashMap1[s[i]] = hashMap1[s[i]]+1
        }else{
            hashMap1[s[i]] = 1
        }
    }
    for(let i=0;i<t.length;i++){
        if(hashMap2[t[i]]!==undefined){
            hashMap2[t[i]] = hashMap2[t[i]]+1
        }else{
            hashMap2[t[i]] = 1
        }
    }
    let hashMap1Keys = Object.keys(hashMap1)
    let hashMap2Keys = Object.keys(hashMap2)
    if(hashMap1Keys.length !== hashMap2Keys.length) return false
    return true;
}