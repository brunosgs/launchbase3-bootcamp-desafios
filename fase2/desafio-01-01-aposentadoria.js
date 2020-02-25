/** Desafio 1-1: Primeiros passos com JS 
 * Desafios para fortalecer alguns conceitos, entre eles:
 *    Variáveis;
 *    Condicionais;
 *    Operadores.
 */

/*  Cálculo de aposentadoria:
  Crie um programa para calcular a aposentadoria de uma pessoa. Comece criando constantes 
  para armazenar nome, sexo, idade e contribuicao(em anos). Utilize as fórmulas a seguir para calcular 
  se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela:
  
  O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
  Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
  enquanto a mulher precisa ter no mínimo 85 anos na soma;

  Com base nas regras acima imprima na tela as mensagens:
  SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
  SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/

const name = "Silvana"
const gender = "f"
const age = 65
const contribution = 30

const totalContribution = age + contribution

const manCanRetire = ((gender == "F" || gender == "f") && contribution >= 30 && totalContribution >= 85)
const womanCanRetire = ((gender == "M" || gender == "m") && contribution >= 35 && totalContribution >= 95)

if (manCanRetire || womanCanRetire) {
    console.log(`${name}, você pode se aposentar!`)
} else {
    console.log(`${name}, você ainda não pode se aposentar!`)
}