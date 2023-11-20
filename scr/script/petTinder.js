function abrirMenu() {
    let ligar = document.getElementById("menuUsuarioID");
    if (ligar.style.display === "" || ligar.style.display === "none") {
        ligar.style.display = "block";
    } else {
        ligar.style.display = "none";
    }
}
let user = { nome: "Hiago Rocha" };
function menuUsuario(user) {
    let username = document.getElementById("nomeUsuario");
    username.innerText = user.nome;
    console.log(user.nome);
}
menuUsuario(user);

let petsLike = [];
let petsDisLike = [];

let pets = [
{
    id: "1",
    especie: "cachorro",
    sexo: "Macho",
    nome: "Rebert",
    descricao: "Grande e pequeno mas forte e fraco.",
    idade: "18",
    raca: "SMD",
    img: "../imgs/Rectangle 61.png",
    endereco: { 
        cidade: "foz do iguaçu",
        bairro: "morumbi",
        rua: "não entre",
        numero: "123",
    },
    like: ""
},
{
    id: "2",
    especie: "gato",
    sexo: "macho",
    nome: "chimbliz",
    descricao: "gato gordo que dorme o dia todo e come muito",
    idade: "7",
    raca: "gato do deserto",
    img: "../imgs/gato-do-deserto.jpg",
    endereco: { 
        cidade: "foz",
        bairro: "",
        rua: "baraiba",
        numero: "",
    },
    like: ""
}
];
let contador = 0;

function criaCachorro(){
    if(pets[contador].like == ""){
        const main = document.getElementById("main1");
        const divPrincipal = document.createElement("div");
        const divEsquerda = document.createElement("div");
        const nomePet = document.createElement("h1");
        const idadePet = document.createElement("h2");
        const divImg = document.createElement("div");
        const imgPet = document.createElement("img");
        const divBotoes = document.createElement("div");
        const imgBotaoNao = document.createElement("img");
        const imgBotaoSim = document.createElement("img");
        const sectionPet = document.createElement("section");
        const listaUl = document.createElement("ul");
        const liSexo = document.createElement("li");
        const liRaca = document.createElement("li");
        const liPerfil = document.createElement("li");
        const liConheca = document.createElement("li");
        const pSexo = document.createElement("p");
        const pSexoValor = document.createElement("p");
        const pRaca = document.createElement("p");
        const pRacaValor = document.createElement("p");
        const pPerfil = document.createElement("p");
        const pPerfilValor1 = document.createElement("p");
        const pConheca = document.createElement("p");
        const h5 = document.createElement("h5");
        const h5Endereco = document.createElement("h5");

        divPrincipal.classList.add("mainPetTinder");
        divEsquerda.classList.add("classEsquerda");
        divImg.classList.add("imgPet");
        divBotoes.classList.add("divBotoes");
        listaUl.classList.add("descripcion");
        liSexo.classList.add("classLI");
        liRaca.classList.add("classLI");
        liPerfil.classList.add("classLI");
        liConheca.classList.add("classLI");
        pSexo.classList.add("tituloDatos");
        pRaca.classList.add("tituloDatos");
        pPerfil.classList.add("tituloDatos");
        pConheca.classList.add("tituloDatos")
        pSexoValor.classList.add("espacioDados");
        pRacaValor.classList.add("espacioDados");
        pPerfilValor1.classList.add("espacioDados");
        h5.classList.add("espacioDados");
        h5Endereco.classList.add("espacioDados");

        nomePet.innerText = pets[contador].nome;
        idadePet.innerText = `${pets[contador].idade} anos`;
        imgPet.src = pets[contador].img;
        imgBotaoNao.src = "../imgs/Slice 2.png";
        imgBotaoSim.src = "../imgs/Slice 3.png";
        pSexo.innerText = "Sexo:";
        pSexoValor.innerText = pets[contador].sexo;
        pRaca.innerText = "Raça:";
        pRacaValor.innerText = pets[contador].raca;
        pPerfil.innerText = "Perfil comportamental:";
        pPerfilValor1.innerText = pets[contador].descricao;
        pConheca.innerText = "Para me conhecer melhor:";
        h5.innerText = "Animal Save";
        h5Endereco.innerText = `Rua ${pets[contador].endereco.rua}, Numero ${pets[contador].endereco.numero}.`;

        imgBotaoNao.addEventListener("click", ()=>{
            pets[contador].like = "não";
            dislike(pets[contador]);
            divPrincipal.remove();
            contador++
            criaCachorro()
        })

        imgBotaoSim.addEventListener("click", ()=>{
            pets[contador].like = "sim";
            like(pets[contador]);
            divPrincipal.remove();
            contador++
            criaCachorro()
        })

        main.appendChild(divPrincipal);
        divPrincipal.appendChild(divEsquerda);
        divEsquerda.appendChild(nomePet);
        divEsquerda.appendChild(idadePet);
        divPrincipal.appendChild(divImg);
        divImg.appendChild(imgPet);
        divImg.appendChild(divBotoes);
        divBotoes.appendChild(imgBotaoNao);
        divBotoes.appendChild(imgBotaoSim);
        divPrincipal.appendChild(sectionPet);
        sectionPet.appendChild(listaUl);
        listaUl.appendChild(liSexo);
        liSexo.appendChild(pSexo);
        liSexo.appendChild(pSexoValor);
        listaUl.appendChild(liRaca);
        liRaca.appendChild(pRaca);
        liRaca.appendChild(pRacaValor);
        listaUl.appendChild(liPerfil);
        liPerfil.appendChild(pPerfil);
        liPerfil.appendChild(pPerfilValor1);
        listaUl.appendChild(liConheca);
        liConheca.appendChild(pConheca);
        liConheca.appendChild(h5);
        liConheca.appendChild(h5Endereco);

    }else{
        contador++
        criaCachorro();
    }
    

}

function dislike(pet){
    petsDisLike.push(pet);
}
function like(pet){
    petsLike.push(pet);
}

criaCachorro();
