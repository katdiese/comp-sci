function charToBinary(char) {
  console.log(char.charCodeAt(0).toString(2));
}

function binaryToChar(binary) {
  var currChar = parseInt(binary,2).toString(10);
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(i = 0; i < alphabet.length - 1; i++) {
    if(alphabet[i].charCodeAt(0) ==currChar ) {
      console.log("This is " + alphabet[i]);
    }
  }
}

charToBinary('A');
binaryToChar(1000001);