const char_syn_num = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
    , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ","
    , "|", ":", ";", "<", ">", ".", "?", "/"];

const char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
    , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const char_num = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
    , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const char_syn = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"
    , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ","
    , "|", ":", ";", "<", ">", ".", "?", "/"];


let generateBtn = document.querySelector(".btn");
let len = document.querySelector(".len");
let onep = document.querySelector(".oneP");
let twop = document.querySelector(".twoP");
let firstPass = "";
let secondPass = "";

function generatePassword() {
    var num = document.querySelector('input[name="pap"]:checked')
    var sym = document.querySelector('input[name="pappu"]:checked')
    let l = len.value;
    // alert(l);
   //alert(num.value+" "+sym.value);
    if (num.value == "Yes" && sym.value == "Yes") {
        for (let i = 0; i < l; i++) {
            firstPass += getRandomCharacter(char_syn_num);
        }
        for (let i = 0; i < l; i++) {
            secondPass += getRandomCharacter(char_syn_num);
        }
    } else if (num.value == "No" && sym.value == "Yes") {
        for (let i = 0; i < l; i++) {
            firstPass += getRandomCharacter(char_syn);
        }
        for (let i = 0; i < l; i++) {
            secondPass += getRandomCharacter(char_syn);
        }
    } else if (num.value == "Yes" && sym.value == "No") {
        for (let i = 0; i < l; i++) {
            firstPass += getRandomCharacter(char_num);
        }
        for (let i = 0; i < l; i++) {
            secondPass += getRandomCharacter(char_num);
        }
    } else {
        for (let i = 0; i < l; i++) {
            firstPass += getRandomCharacter(char);
        }
        for (let i = 0; i < l; i++) {
            secondPass += getRandomCharacter(char);
        }
    }
    onep.textContent = firstPass;
    twop.textContent = secondPass;
}
function clearScreen(){
    firstPass = "";
    secondPass ="";
}
generateBtn.addEventListener("click", 
    function(){
        clearScreen();
        generatePassword();
});
function getRandomCharacter(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)];
}







// onep.onclick = function() {
//   document.execCommand("copy");
// }

// onep.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     console.log(event.clipboardData.getData("text"))
//   }
// });