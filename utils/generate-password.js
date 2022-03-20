// generates password
// takes in 4 params


function generatePassword(numRequired = false, charRequired =false, length = 12, capsRequired = false ){

let passwordArray = [];
//generate number
var generateNumber = () => {
  let number = Math.floor(9*Math.random());
  return number.toString();
};

//generate a special character
var generateChar = () => {
const charArray = [33, 95, 64, 38, 35, 37, 36, 42, 43];
let index = Math.floor(charArray.length * Math.random());
return String.fromCharCode(charArray[index]);
};


//generate capital letters

var generateCaps = ()=>{
return String.fromCharCode(Math.floor(25 * Math.random() + 65));

};


//generate small letters

var generateSMall = ()=>{
return String.fromCharCode(Math.floor(25 * Math.random() + 97))
};

//generate the whole pass

let generate = (len) => {

let turn = Math.floor(len/3);
var rem = len;

if(charRequired){
  let temp = Math.floor(turn * Math.random() + 1);
  for(i=0; i<temp; i++){
    passwordArray.push(generateChar());
    }
  rem = rem - temp;
}

if(numRequired){
  let temp = Math.floor(turn * Math.random() + 1);
  for(i=0; i<temp; i++){
    passwordArray.push(generateNumber());
    }
  rem = rem - temp;

}

if(capsRequired){
  let temp = Math.floor(turn * Math.random() + 1);
  for(i=0; i<temp; i++){
    passwordArray.push(generateCaps());
    }
  rem = rem - temp;
}

for(i=0; i<rem; i++){
  passwordArray.push(generateSMall());
  }

return passwordArray;

};

//shuffle Array
function shuffleArray(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

var resultArray = shuffleArray(generate(length));
var output = resultArray.join("")
return output;
}

module.exports = generatePassword;
