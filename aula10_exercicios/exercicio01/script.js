
let botao = document.getElementById('botao_caucular')

botao.addEventListener('click',caucular)




function caucular(){
    let num_inicial = document.getElementById('numero_inicio')
    let num_final = document.getElementById('numero_fim')
    let num_pulo = document.getElementById('numero_pulos')
    let resposta = document.getElementById('responder2')


    if(num_inicial.value == '' || num_final.value == ''){
        window.alert('algo deu errado')

    }else if(num_pulo.value == '0' || num_pulo == ''){
        window.alert('resposta passo inadequada, considerando como 1')
        num_pulo.value = 1

    }
    
    resposta.innerText = ``
    for(let x = Number(num_inicial.value); x <= Number(num_final.value) ; x += Number(num_pulo.value) ){
        resposta.innerText += `${x} >>` //se vc por += em vez de apenas = ele nao substitui
        
    }
}