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
/*const controls = document.querySelectorAll('.control');
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
})*/
function moveToSelected(element) {
    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass("hideRight");
    $(prevSecond).prevAll().removeClass().addClass("hideLeft");
}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected("prev");
            break;

        case 39: // right
            moveToSelected("next");
            break;

        default:
            return;
    }
    e.preventDefault();
});

$("#carousel div").click(function () {
    if (parseFloat($(this).css("opacity")) > 0) {
      moveToSelected($(this));
    }
  });
  
  $("#prev").click(function () {
    var selected = $(".selected");
    if (selected.length > 0 && parseFloat(selected.css("opacity")) > 0) {
      moveToSelected("prev");
    }
  });
  
  $("#next").click(function () {
    var selected = $(".selected");
    if (selected.length > 0 && parseFloat(selected.css("opacity")) > 0) {
      moveToSelected("next");
    }
  });