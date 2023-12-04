function abrirMenu(){
    let ligar = document.getElementById("moldaLoginID");
    if(ligar.style.display == "none"){
        ligar.style.display = "block";
    }else{
        ligar.style.display = "none";
    };
};
function login(chave){
    localStorage.setItem("login", chave);
    window.location.href = "http://127.0.0.1:5500/AnimalSave/scr/pages/menu_usuario.html";
}
window.onload = function verificaLogin(){
    let loginRecuperada = localStorage.getItem('login')
    if(loginRecuperada === "logado"){
        //window.location.href = "http://127.0.0.1:5500/scr/pages/menu_usuario.html";
    }
};
