texto_numeros = open('numeros.txt', 'r')




string_numeros = texto_numeros.read()

lista_numeros = []
sequencia_numeros = ''

#transforma o texto cheio de numeros em uma lista de numeros
for i in string_numeros:

    if i.isspace():
        lista_numeros.append(sequencia_numeros)
        sequencia_numeros = ''
    else:
        sequencia_numeros += i





#procura por sequencia de numeros dentro da lista_numeros
def procurar_sequencia(sequencia):
    for i in lista_numeros:
        if(i == sequencia):
            print(f'a sequencia {i} foi encontrada na lista ')
        else:
            encontrou = False

    if encontrou == False:
        print('nao encontramos a sequencia')


while(True):
    sequencia_do_usuario = input('qual é a sequencia de numeros que você esta buscando? ')


    procurar_sequencia(sequencia_do_usuario)
    
