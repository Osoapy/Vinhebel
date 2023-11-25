function encriptografarTexto(event) {
  let c1 = document.getElementById("encriptografar"), c2 = document.getElementById("descriptografar");
  let v1 = c1.value;
  c1.value = ""; c2.value = "";
  for (let k = 0, tamanho = v1.length; k < tamanho; k++) {
    let letra = v1[k];
    let letraCriptografada = criptografar(letra);
    c2.value += letraCriptografada;
  }
}

function descriptografarTexto(event) {
  let c1 = document.getElementById("encriptografar"), c2 = document.getElementById("descriptografar");
  let v2 = c2.value;
  c1.value = ""; c2.value = "";
  for (let k = 0, tamanho = v2.length; k < tamanho; k++) {
    let letra = v2[k];
    let letraDescriptografada = descriptografar(letra);
    c1.value += letraDescriptografada;
  }
}

function criptografar(letra) {
  letra = letra.toLowerCase();
  switch (letra) {
    case 'a': return 'n';
    case 'b': return 'o';
    case 'c': return 'p';
    case 'd': return 'q';
    case 'e': return 'r';
    case 'f': return 's';
    case 'g': return 't';
    case 'h': return 'u';
    case 'i': return 'v';
    case 'j': return 'w';
    case 'k': return 'x';
    case 'l': return 'y';
    case 'm': return 'z';
    case 'n': return 'a';
    case 'o': return 'b';
    case 'p': return 'c';
    case 'q': return 'd';
    case 'r': return 'e';
    case 's': return 'f';
    case 't': return 'g';
    case 'u': return 'h';
    case 'v': return 'i';
    case 'w': return 'j';
    case 'x': return 'k';
    case 'y': return 'l';
    case 'z': return 'm';
    default: return letra;
  }
}

function descriptografar(letra) {
  letra = letra.toLowerCase();
  switch (letra) {
    case 'n': return 'a';
    case 'o': return 'b';
    case 'p': return 'c';
    case 'q': return 'd';
    case 'r': return 'e';
    case 's': return 'f';
    case 't': return 'g';
    case 'u': return 'h';
    case 'v': return 'i';
    case 'w': return 'j';
    case 'x': return 'k';
    case 'y': return 'l';
    case 'z': return 'm';
    case 'a': return 'n';
    case 'b': return 'o';
    case 'c': return 'p';
    case 'd': return 'q';
    case 'e': return 'r';
    case 'f': return 's';
    case 'g': return 't';
    case 'h': return 'u';
    case 'i': return 'v';
    case 'j': return 'w';
    case 'k': return 'x';
    case 'l': return 'y';
    case 'm': return 'z';
    default: return letra;
  }
}