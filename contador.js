const numContador = document.querySelector("#num-contador")
const numX10 = document.querySelector("#num-x10")

let contagem = numContador.value
let contagemX10 = numX10.value

function contar() {    
    numContador.value = ++contagem
}

function zerar() {
    contagem = 0
    contagemX10 = 3

    numContador.value = 0
    numX10.value = contagemX10
}

function x10() {
    if(contagemX10>0){
        contagemX10--

        numContador.value = contagem *= 10    
        numX10.value = contagemX10
    } 
    if(contagemX10==0) {
        const btX10 = document.querySelector("#bt-x10")
        btX10.disabled = "true"
    }
    
}

const btContar = document.querySelector("#bt-contar")
btContar.addEventListener("click", contar)

const btZerar = document.querySelector("#bt-zerar")
btZerar.addEventListener("click", zerar)

const btX10 = document.querySelector("#bt-x10")
btX10.addEventListener("click", x10)

