const numContador = document.querySelector("#num-contador")
let contagem = numContador.value

function contar() {
    const numContador = document.querySelector("#num-contador")
    numContador.value = ++contagem
}

const btContar = document.querySelector("#bt-contar")
btContar.addEventListener("click", contar)