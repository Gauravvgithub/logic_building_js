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

// console.log(isAnagramOrNot("listen","silent")) // O(n^2)