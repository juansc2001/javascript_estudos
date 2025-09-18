let tempo_agora= new Date()/*pega a hora atual do dispositivo no qual codigo esta rodando */
let hora = tempo_agora.getHours()

console.log(`sao exatamente${hora}horas agora`)
if (hora >=12 && hora <= 17){
    console.log('boa tarde')
}else if(hora >=17 && hora <= 23){
    console.log('boa noite')
}else if(hora <=12 && hora >=6 ){
    console.log('bom dia')
}