function abrirMenu() {
    let ligar = document.getElementById("menuUsuarioID");
    if (ligar.style.display === "" || ligar.style.display === "none") {
        ligar.style.display = "block";
    } else {
        ligar.style.display = "none";
    }
}
let user = {nome: "Rafaelzinho123"};
function menuUsuario(user){
    let username = document.getElementById("nomeUsuario");
    username.innerText = user.nome;
    console.log(user.nome);
}

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const item = document.querySelectorAll('.item');
const maxItem = item.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrowLeft');
    
        if(isLeft){
            currentItem -= 1;
        }
        else{
            currentItem += 1;
        }

        if(currentItem >= maxItem){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItem - 1;
        }

        console.log("control", isLeft, currentItem);
        item.forEach(item => item.classList.remove('currentItem'));

        item[currentItem].scrollIntoView({
            inline:"center",
            behavior: "smooth"
        })
        item[currentItem]. classList.add("currentItem");
    })
})

menuUsuario(user);