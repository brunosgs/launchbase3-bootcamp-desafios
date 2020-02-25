/** Desafio 1-3: Funções e estruturas de repetição
 * Desafios para fortalecer alguns conceitos, entre eles:
 *    Funções e métodos;
 *    Estruturas de repetição;
 *    Escopos.
 */

/* Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome 
e suas tecnologias (novo array). Percorra a lista de usuários com uma estrutura de 
repetição imprimindo em tela as informações dos usuários. Exemplo:
   Carlos trabalha com HTML, CSS
   Jarmine trabalha com JavaScript, CSS
   Tuane trabalha com HTML, Node.js
*/

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}