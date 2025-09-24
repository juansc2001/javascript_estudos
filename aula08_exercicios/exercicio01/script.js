
function load_page(){
    let msg = window.document.getElementById('msg')
    let foto = window.document.getElementById('foto')
    let tempo_agora = new Date()
    let hora = tempo_agora.getHours( )



    if(hora >= 5 && hora <= 11){//manhã
        msg.style.color = '#b2a6b0'
        document.body.style.background = '#b2a6b0'
        msg.innerText = `sao ${hora} da manhã`
        foto.src = '../../fotos/manha.jpg'
    }else if(hora >= 11 && hora <= 18){//tarde
        msg.style.color =  'rgb(47, 107, 109)'
        msg.innerText = `sao ${hora} da tarde`
        foto.src = '../../fotos/tarde.jpg'
    }else if(hora >= 18 && hora <= 23){//noite
        msg.style.color = '#284865'
        document.body.style.background = '#284865'
        msg.innerText = `sao ${hora} da noite`
        foto.src = '../../fotos/noite.jpg'
    }else{
        msg.innerText = hora
        
    }
    
}
