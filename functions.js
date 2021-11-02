const functions = {
    stringLength: (string) => {
          const stringCount = string.length;
          if (stringCount > 0 && stringCount <= 10) {
            return stringCount;
          } 
    },
    reverseString: (string) =>{
        let newStr = "";
        for(let i = string.length - 1; i >= 0; i--){
            newStr += string[i];
        }
        return newStr;
    }
}



module.exports = functions;