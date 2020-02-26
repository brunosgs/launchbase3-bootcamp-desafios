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