let bt = window.document.getElementById('btverificar')

bt.addEventListener('click',idade_verify)


function idade_verify(){    
    let tempo = new Date()
    let anoatual = tempo.getFullYear()
    let ano_nascimento = window.document.getElementById('txtano')
    let resposta = document.getElementById('res')

    if( ano_nascimento.value <= 1 || ano_nascimento.value >= anoatual){
        window.alert('algo deu errado')
    }else{
        let sexo = document.getElementsByName('radsex') //imput radio tem que ser pego pelo nome
        let genero = ''
        let idade = anoatual - Number(ano_nascimento.value)
        let img = document.createElement('img')//cria uma tag img no html
        img.setAttribute('id','foto')//cria um id para a tag que foi criada

        if(sexo[0].checked){//mascolino
            genero = 'mascolino'
            if( idade >= 0 && idade <= 10){//criança
                img.setAttribute('src', '../../fotos/crianca_homem.jpg')
            }else if( idade >=10 && idade <= 21){//adulto
                img.setAttribute('src', '../../fotos/crianca_homem.jpg')

            }else if( idade >=21 && idade <= 50 ){
                img.setAttribute('src', '../../fotos/adulto.jpg')

            }else if(idade >= 50){//idoso
                img.setAttribute('src', '../../fotos/idoso_homen.jpg')

            }
        }else if(sexo[1].checked){//feminino
            genero = 'feminino'
            if( idade >= 0 && idade <= 10){//criança
                img.setAttribute('src', '../../fotos/crianca_mulher.jpg')

            }else if( idade >=10 && idade <= 21){//adulto
                img.setAttribute('src', '../../fotos/crianca_mulher.jpg')

            }else if( idade >=21 && idade <= 50 ){
                img.setAttribute('src', '../../fotos/adulto_mulher.jpg')

            }else if(idade >= 50){//idoso
                img.setAttribute('src', '../../fotos/idoso_mulher.jpg')
            }
        }else{
            img.setAttribute('src', '../../fotos/adulto_mulher.jpg')
            alert('haaaa codigo')
        }

        resposta.innerText = `sua idade é ${idade}`
        resposta.appendChild(img)
        

    }

}