const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2) 

    // toFixed -Para Arredondar o numero

    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso- Precisa engordar🤏'
    } else if (imc < 25) {
      classification = 'Peso normal - Parabéns 👍'
    } else if (imc < 30) {
      classification = ' Obesidade  🍔'
    } else if (imc < 35) {

    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Campos Em Branco 🤨'

    Pra avisar quando ficar em branco
  }
}