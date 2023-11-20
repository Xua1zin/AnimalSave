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

function moveToSelected(element) {
    if (element == "nextVideo") {
        var selectedVideo = $(".selectedVideo").next();
    } else if (element == "prevVideo") {
        var selectedVideo = $(".selectedVideo").prev();
    } else {
        var selectedVideo = element;
    }

    var nextVideo = $(selectedVideo).next();
    var prevVideo = $(selectedVideo).prev();
    var prevSecondVideo = $(prevVideo).prev();
    var nextSecondVideo = $(nextVideo).next();

    $(selectedVideo).removeClass().addClass("selectedVideo");

    $(prevVideo).removeClass().addClass("prevVideo");
    $(nextVideo).removeClass().addClass("nextVideo");

    $(nextSecondVideo).removeClass().addClass("nextRightSecondVideo");
    $(prevSecondVideo).removeClass().addClass("prevLeftSecondVideo");

    $(nextSecondVideo).nextAll().removeClass().addClass("hideRightVideo");
    $(prevSecondVideo).prevAll().removeClass().addClass("hideLeftVideo");
}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected("prevVideo");
            break;

        case 39: // right
            moveToSelected("nextVideo");
            break;

        default:
            return;
    }
    e.preventDefault();
});

$("#carouselVideo div").click(function () {
    if (parseFloat($(this).css("opacity")) > 0) {
        moveToSelected($(this));
    }
});

$("#prev").click(function () {
    var selected = $(".selectedVideo");
    if (selected.length > 0 && parseFloat(selected.css("opacity")) > 0) {
        moveToSelected("prevVideo");
    }
});

$("#next").click(function () {
    var selected = $(".selectedVideo");
    if (selected.length > 0 && parseFloat(selected.css("opacity")) > 0) {
        moveToSelected("nextVideo");
    }
});