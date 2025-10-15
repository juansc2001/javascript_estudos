let list = [6,5,4,3,2,1] //vetor

console.log(`a lista ${list} possui ${list.length} elementos`)
console.log('\n')


list.push(7)//acrescenta um elemento ao vetor

list_ordenada = list.sort()//organiza a lista

console.log(`lista antiga: ${list}  \n  lista ornanizada: ${list_ordenada} `)


let valor1 = list_ordenada.indexOf(5)//retorna o index do valor
let valor2 = list_ordenada.indexOf(10)//caso exista este valor dentro do vetor, retorna -1

console.log(`\n\n dentro da lista ${list_ordenada} o valor 5 se encontra em ${valor1} posição \n ja o valor 10 nao existe ${valor2}`)



