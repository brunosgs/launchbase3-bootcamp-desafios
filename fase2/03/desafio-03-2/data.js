const about = {
    title: "Rocketseat",
    description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
    subtitle: "Tecnologias utilizadas",
    items: [
        { item: "HTML" },
        { item: "CSS" },
        { item: "JavaScript" }
    ]
}

const courses = [{
    id: "starter",
    img: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg",
    title: "Starter",
    module: "5 módulos",
    price: "FREE"
}, {
    id: "launchbase",
    img: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg",
    title: "LaunchBase",
    module: "17 módulos",
    price: "PAY"
}, {
    id: "gostack",
    img: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg",
    title: "GoStack",
    module: "10 módulos",
    price: "PAY"
}]

module.exports = { about, courses }