function abrirMenu() {
    let ligar = document.getElementById("menuUsuarioID");
    if (ligar.style.display === "" || ligar.style.display === "none") {
        ligar.style.display = "block";
    } else {
        ligar.style.display = "none";
    }
}
let user = { nome: "Rafaelzinho123" };
function menuUsuario(user) {
    let username = document.getElementById("nomeUsuario");
    username.innerText = user.nome;
    console.log(user.nome);
}
menuUsuario(user);

let pet = {
    especie: "",
    sexo: "",
    nome: "",
    descricao: "",
    idade: "",
    raca: "",
    endereco: {
        cidade: "",
        bairro:"",
        rua: "",
        numero: ""
    }
}

function nextForm(){
    let especie = document.querySelector('input[name="especie"]:checked').value;
    let Sexo = document.querySelector('input[name="sexo"]:checked').value;
    let nome = document.querySelector('input[name="Nome"]:checked').value;
    let descricao = document.querySelector('input[name="descricao"]:checked').value;
    let idade = document.querySelector('input[name="idade"]:checked').value;
    let raca = document.querySelector('input[name="raca"]:checked').value;

    pet.especie = especie;
    pet.sexo = Sexo;
    pet.nome = nome;
    pet.descricao = descricao;
    pet.idade = idade;
    pet.raca = raca;

    const next = document.getElementById("formDivID");
    next.classList.add("esconde");
}