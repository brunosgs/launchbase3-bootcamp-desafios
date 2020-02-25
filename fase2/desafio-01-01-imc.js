/** Desafio 1-1: Primeiros passos com JS 
 * Desafios para fortalecer alguns conceitos, entre eles:
 *    Variáveis;
 *    Condicionais;
 *    Operadores.
 */

/*  Cálculo do IMC:
  Crie um programa para calcular o IMC e nível de obesidade de uma pessoa. 
  Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa. 
  A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
  
  peso / (altura * altura);

  Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
  SE o IMC maior ou igual a 30: Carlos você está acima do peso;
  SE o IMC menor que 29.9: Carlos você não está acima do peso;
 */

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