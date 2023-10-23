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
    id: "",
    especie: "",
    sexo: "",
    nome: "",
    descricao: "",
    idade: "",
    raca: "",
    img: "",
    endereco: {
        cidade: "",
        bairro:"",
        rua: "",
        numero: ""
    }
}

let botao = document.getElementById("botao");
let form = document.querySelector('input[name="especie"]:checked').value;
botao.addEventListener('click', function (event) {
console.log("oi")
console.log(form);
});

function nextForm(){
    let especie = document.querySelector('input[name="especie"]:checked');
    let Sexo = document.querySelector('input[name="sexo"]:checked').value;
    let nome = document.getElementById("nomeID").value
    let descricao = document.getElementById("descricaoID").value
    let idade = document.getElementById("idadeID").value
    let raca = document.getElementById("racaID").value

    pet.especie = especie;
    pet.sexo = Sexo;
    pet.nome = nome;
    pet.descricao = descricao;
    pet.idade = idade;
    pet.raca = raca;

    console.log(pet)
    const next = document.getElementById("formDivID1");
    next.classList.add("esconde");
    const now = document.getElementById("formDivID2");
}