function numAleatorio(max) {
  return Math.floor(Math.random() * (max + 1));
}

function animacaoEstrela() {
  let div = document.getElementById("estrelas");
  let maxW = document.body.clientWidth;
  let maxH = document.body.clientHeight;
  let imagem = document.createElement("img");
  imagem.src = "images/estrela.png";
  imagem.classList.add("estrelinha");
  imagem.style.position = "fixed";
  imagem.style.left = `${numAleatorio(maxW)}px`;
  imagem.style.top = `${numAleatorio(maxH)}px`;
  div.appendChild(imagem);
  setTimeout(function() {
    imagem.remove();
  }, 10000);
}

setInterval(animacaoEstrela, 1000);