
let botao = document.getElementById('botao_caucular')
botao.addEventListener('click', gerar_tabuada)




function gerar_tabuada(){
    let num_tabuada = document.getElementById('numero_tabuada')
    let lista_tabuada = document.getElementById('tabuada')

    let opção_selectag = document.createElement('option')    


    for(x = 0 ; x <= 10; x++){// loop que cria tags option com o valor da taboada de 1 a 10
        let opção_selectag = document.createElement('option') 
        let resultado = x * Number(num_tabuada.value)
        opção_selectag.textContent = `${x} x ${num_tabuada.value} = ${resultado}`
        lista_tabuada.appendChild(opção_selectag)
    }

        

}