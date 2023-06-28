function encrypt() {
    var text = document.getElementById("text").value;
    var encryptedText = "";
  
    for (var i = 0; i < text.length; i++) {
      var letter = text[i];
  
      switch (letter) {
        case "e":
          encryptedText += "enter";
          break;
        case "i":
          encryptedText += "imes";
          break;
        case "a":
          encryptedText += "ai";
          break;
        case "o":
          encryptedText += "ober";
          break;
        case "u":
          encryptedText += "ufat";
          break;
        default:
          encryptedText += letter;
      }
    }
  
    document.getElementById("output").value = encryptedText;
  }
  
  function decrypt() {
    var encryptedText = document.getElementById("output").value;
    var decryptedText = "";
  
    var i = 0;
    while (i < encryptedText.length) {
      var letter = encryptedText[i];
  
      if (letter === "e" && encryptedText.substr(i, 5) === "enter") {
        decryptedText += "e";
        i += 5;
      } else if (letter === "i" && encryptedText.substr(i, 4) === "imes") {
        decryptedText += "i";
        i += 4;
      } else if (letter === "a" && encryptedText.substr(i, 2) === "ai") {
        decryptedText += "a";
        i += 2;
      } else if (letter === "o" && encryptedText.substr(i, 4) === "ober") {
        decryptedText += "o";
        i += 4;
      } else if (letter === "u" && encryptedText.substr(i, 4) === "ufat") {
        decryptedText += "u";
        i += 4;
      } else {
        decryptedText += letter;
        i++;
      }
    }
  
    document.getElementById("text").value = decryptedText;
    document.getElementById("output").value = decryptedText;
  }
  

  
  function copyToClipboard() {
    var output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");
  }
  