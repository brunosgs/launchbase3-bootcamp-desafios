/** Desafio 1-2: Lidando com objetos e vetores
 * Desafios para fortalecer alguns conceitos, entre eles:
 *    Objetos;
 *    Vetores.
 */

/* Crie um programa com um objeto para armazenar dados de um programador 
como nome, idade e tecnologias que trabalha. Um programador pode trabalhar com várias tecnologias, 
por isso armazene essas tecnologias em um array.
As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:
    { nome: 'C++', especialidade: 'Desktop' }
    { nome: 'Python', especialidade: 'Data Science' }
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
*/

const developer = {
    nome: "Bruno Gomes",
    idade: 26,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${developer.nome} tem ${developer.idade} anos e usa a tecnolgoia ${developer.tecnologias[0].nome} com especialidade em ${developer.tecnologias[0].especialidade}`)