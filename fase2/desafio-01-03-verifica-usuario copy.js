/** Desafio 1-3: Funções e estruturas de repetição
 * Desafios para fortalecer alguns conceitos, entre eles:
 *    Funções e métodos;
 *    Estruturas de repetição;
 *    Escopos.
 */

/*Crie uma função que recebe os dados de um objeto de usuário e retorna 
SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false. Exemplo:

    function checaSeUsuarioUsaCSS(usuario) {
        // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
        // SE encontrar, retorne true da função, caso contrário retorne false
    }

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS 
utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:
}
*/

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS" || tecnologia == "css") {
            return true
        }
    }
    return false
}

for (let usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
}