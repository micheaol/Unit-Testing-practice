const functions = {
    stringLength: (string) => {
          const stringCount = string.length;
          if (stringCount > 0 && stringCount <= 10) {
            return stringCount;
          } 
    }
}



module.exports = functions;