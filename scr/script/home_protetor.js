function abrirMenu() {
    let ligar = document.getElementById("menuProtetorID");
    if (ligar.style.display === "" || ligar.style.display === "none") {
        ligar.style.display = "block";
    } else {
        ligar.style.display = "none";
    }
}
let user = { nome: "Vida Animal" };
function menuProtetor(user) {
    let username = document.getElementById("nomeProtetor");
    username.innerText = user.nome;
    console.log(user.nome);
}
menuProtetor(user);

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