function abrirMenu() {
    let ligar = document.getElementById("menuUsuarioID");
    if (ligar.style.display === "" || ligar.style.display === "none") {
        ligar.style.display = "block";
    } else {
        ligar.style.display = "none";
    }
}
let user = {
    nome: "Rafaelzinho123"
};
function menuUsuario(user){
    let username = document.getElementById("nomeUsuario");
    username.innerText = user.nome;
    console.log(user.nome);
}

menuUsuario(user);