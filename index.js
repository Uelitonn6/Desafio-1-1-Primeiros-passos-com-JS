//Cálculo IMC

const nome = 'Uéliton'
const peso = 70
const altura = 1.91

const imc = peso / (altura * altura)

if(imc >= 30){
    console.log(`${nome} você está acima do peso.`)
}else if(imc < 29.9){
    console.log(`${nome} você não está acima do peso.`)
}

//Cálculo de Aposentadoria 

const seuNome = 'Maria'
const sexo = 'f'.toUpperCase()
const idade = 55
const contruibuicao = 30

const somaAposentadoria = idade + contruibuicao

if(sexo === 'F'){
    if(somaAposentadoria >= 85 && contruibuicao === 30){
        console.log(`${seuNome}, você pode se aposentar.`)
    }else{
        console.log(`${seuNome}, você ainda não pode se aposentar.`)
    }
}else if(sexo === 'M'){
    if(somaAposentadoria >= 95 && contruibuicao === 35){
        console.log(`${seuNome}, você pode se aposentar.`)
    }else{
        console.log(`${seuNome}, você ainda não pode se aposentar.`)
    }
}




