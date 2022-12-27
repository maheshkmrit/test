
function isWord(sentence, latter) {
    let words = [];
    let res;
    words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.includes(latter)) {
            let aInd = isAplha(word, latter)
            let rs = aInd.toString();
            return i + rs;
        }
    }

}

function isAplha(word, latt) {
    for (let i = 0; i < word.length; i++) {
        let ch = word.charAt(i)
        if (ch === latt) {
            return i;
        }
    }

}



const string = "the quick brown fox jumps over the lazy dog"
let result = ""
const words = string.split(" ")


function encrypt(word) {
    for (const i in word) {
        //console.log(word[+1])
        if (word[i] == " ") result+="-"

        else {
            for (const eachWord of words) {

                if (eachWord.includes(word[i])) {
                    result += `${words.indexOf(eachWord)}${eachWord.indexOf(word[i])}`
                    //console.log(word[+1])
                    break
                }
                if(word[Number(i)+1] != " "){
                    result+=","
                }
            }
        }
    }

}                       






////////////------------------////////////////////

// function isT(sentence) {
//     let words = [];
//     let res;
//     words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
         

//             for (let j = 0; j < word.length; j++) {
//                 let ch = word.charAt(i)

//                 if (word.includes(ch)) {
//                     console.log(word+toString(j));
//                 }
//             }
//         }


//     }


// isT("This a Dog");


// function encode(id)
// {
//     str = "";
//     let arr=["the", "quick", "brown","fox","jumps","over","the","lazy","dog"];
//     for (let i = 0; i < arr.length; i++) {
//         word = arr[i];
//         if(word.includes(id)){
//             tword = id.split();

//             for(let j = 0; j<wordt; j++){
                
//                 if(tword === id[i]){
//                     str = str+i+j;
//                     console.log(str);
//                 }
//             }
//         }
        
//     }
// }

// console.log(encode("Hello"));







