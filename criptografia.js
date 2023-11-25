let chave = "vinhebel";

function encriptografarTexto(event) {
  let inputCriptografar = document.getElementById("encriptografar"), inputDescriptografar = document.getElementById("descriptografar");
  if (inputCriptografar.value != "") {
    let v1 = inputCriptografar.value;
    inputCriptografar.value = ""; inputDescriptografar.value = "";
    for (let k = 0, i = 0, tamanho_chave = chave.length, tamanho = v1.length; k < tamanho; k++, i++) {
      if(i > tamanho_chave - 1) {
        i = 0;
      }
      let caractere = v1[k];
      let chave_atual = caractereParaInteiro(chave[i]);
      if (letraDoAlfabeto(caractere)) {
        let letraCriptografada = criptografar(caractere, chave_atual);
        if (caractere === caractere.toUpperCase()) {
          inputDescriptografar.value += letraCriptografada.toUpperCase();;
        }
        else {
          inputDescriptografar.value += letraCriptografada;
        }
      }
      else {
        inputDescriptografar.value += caractere;
      }
    }
  }
}

function descriptografarTexto(event) {
  let inputCriptografar = document.getElementById("encriptografar"), inputDescriptografar = document.getElementById("descriptografar");
  if (inputDescriptografar.value != "") {
    let v2 = inputDescriptografar.value;
    inputCriptografar.value = ""; inputDescriptografar.value = "";
    for (let k = 0, i = 0, tamanho_chave = chave.length, tamanho = v2.length; k < tamanho; k++, i++) {
      if (i > tamanho_chave - 1) {
        i = 0;
      }
      let caractere = v2[k];
      let chave_atual = caractereParaInteiro(chave[i]);
      if (letraDoAlfabeto(caractere)) {
        let letraDescriptografada = descriptografar(caractere, chave_atual);
        if (caractere === caractere.toUpperCase()) {
          inputCriptografar.value += letraDescriptografada.toUpperCase();;
        }
        else {
          inputCriptografar.value += letraDescriptografada;
        }
      }
      else {
        inputCriptografar.value += caractere;
      }
    }
  }
}

function caractereParaInteiro(letra) {
  switch(letra) {
    case 'a': return 1;
    case 'b': return 2;
    case 'c': return 3;
    case 'd': return 4;
    case 'e': return 5;
    case 'f': return 6;
    case 'g': return 7;
    case 'h': return 8;
    case 'i': return 9;
    case 'j': return 10;
    case 'k': return 11;
    case 'l': return 12;
    case 'm': return 13;
    case 'n': return 14;
    case 'o': return 15;
    case 'p': return 16;
    case 'q': return 17;
    case 'r': return 18;
    case 's': return 19;
    case 't': return 20;
    case 'u': return 21;
    case 'v': return 22;
    case 'w': return 23;
    case 'x': return 24;
    case 'y': return 25;
    case 'z': return 26;
  }
}

function inteiroParaCaractere(numero) {
  switch(numero) {
    case 1: return 'a';
    case 2: return 'b';
    case 3: return 'c';
    case 4: return 'd';
    case 5: return 'e';
    case 6: return 'f';
    case 7: return 'g';
    case 8: return 'h';
    case 9: return 'i';
    case 10: return 'j';
    case 11: return 'k';
    case 12: return 'l';
    case 13: return 'm';
    case 14: return 'n';
    case 15: return 'o';
    case 16: return 'p';
    case 17: return 'q';
    case 18: return 'r';
    case 19: return 's';
    case 20: return 't';
    case 21: return 'u';
    case 22: return 'v';
    case 23: return 'w';
    case 24: return 'x';
    case 25: return 'y';
    case 26: return 'z';
  }
}

function criptografar(letra, chave) {
  letra = letra.toLowerCase();
  let letraCriptografada = (caractereParaInteiro(letra) + chave);
  if (letraCriptografada > 26) {
    letraCriptografada -= 26;
  }
  return inteiroParaCaractere(letraCriptografada);
}

function descriptografar(letra, chave) {
  letra = letra.toLowerCase();
  let letraCriptografada = (caractereParaInteiro(letra) - chave);
  if (letraCriptografada < 1) {
    letraCriptografada += 26;
  }
  return inteiroParaCaractere(letraCriptografada);
}

function letraDoAlfabeto(letra) {
  letra = letra.toLowerCase();
  switch(letra) {
    case 'a': 
    case 'b': 
    case 'c': 
    case 'd': 
    case 'e': 
    case 'f': 
    case 'g': 
    case 'h': 
    case 'i': 
    case 'j': 
    case 'k': 
    case 'l': 
    case 'm': 
    case 'n': 
    case 'o': 
    case 'p': 
    case 'q': 
    case 'r': 
    case 's': 
    case 't': 
    case 'u': 
    case 'v': 
    case 'w': 
    case 'x': 
    case 'y': 
    case 'z': return 1;
  }
  return 0;
}