const name = "Pedro"
const weight = 79.200
const height = 1.78
const gender = "M"

const imc = weight / (height * height)

if (imc >= 30) {
    console.log(`${name}, você esta acima do peso!`)
} else {
    console.log(`${name}, você não está acima do peso!`)
}