
let lista_numeros = []
let adicionar_num = document.getElementById('adicionar')
let botao_analizar = document.getElementById('analizar')



window.prompt('teste')



adicionar_num.addEventListener('click', add_lista)
botao_analizar.addEventListener('click', analizar)


function add_lista(){
    
    let num = document.getElementById('numero_user')
    let select = document.getElementById('numero_lista')

    if ((num.value).length == 0 ){//trata os dados passados pelo usuario
        alert('você precisa colocar um número')
    }else if(num.value <= 0 || num.value >= 101){
        alert('apenas numeros entre 1 e 100')
    }else if(lista_numeros.indexOf(Number(num.value)) != -1 ){
        alert('ops ja existe este numero na lista')
    }else if(true){
        lista_numeros.push(Number(num.value))//guarda na lista o numero tratado
    }



    //imprimi os numeros da lista pro usuario 
    select.innerHTML = ''
    let opcao = ''
    for ( i in lista_numeros){
        opcao = document.createElement('option')
        opcao.textContent = `valor ${lista_numeros[i]} selecionado`
        select.appendChild(opcao)
    }
} 



function analizar(){
    let corpo_pagina = document.getElementById('corpo_principal')
    let quantia_elementos = lista_numeros.length
    


    //descobre o maior e menor elemento da lista, e soma todos valores da lista
    let maior_elemento = lista_numeros[0]
    let menor_elemento = lista_numeros[0]
    let soma_valores = 0
    for (let i = 0; i <= quantia_elementos; i++ ){
        if(maior_elemento < lista_numeros[i]){//maior elemento
            maior_elemento = lista_numeros[i]
        }

        if(menor_elemento > lista_numeros[i]){//menor elemento
            menor_elemento = lista_numeros[i]
        }

        if(i+1 < quantia_elementos){//faz a soma dos valores da lista
            numero = parseInt(lista_numeros[i])
            soma_valores += numero
        }
    }
    let media = soma_valores / quantia_elementos //faz a media dos valores da lista








    if (lista_numeros.length != 0){
        //imprime para o usuario as respostas
        let tag_div = document.createElement('div')
        tag_div.setAttribute('id', 'resposta')
        tag_div.innerHTML = `
        <div>
            <p>foram colocados ${quantia_elementos} numeros dentro da lista</p> 
        <div>
        <div>
            <p>maior numero da lista é ${maior_elemento}</p>
        <div>
        <div>
            <p>menor numero da lista é ${menor_elemento}</p>
        <div>

        <div>
            <p>a soma de todos os numeros da lista é ${soma_valores}</p>
        <div>

        <div>
            <p>a media de todos os numeros d alista é ${media}</p>
        <div>
        `
        corpo_pagina.appendChild(tag_div)
    }else{
        alert('você deve adicionar números')
    }
}