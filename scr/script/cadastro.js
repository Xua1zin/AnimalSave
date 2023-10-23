function mostrarTexto() {
    var tipoCadastroDiv = document.getElementById('tipoCadastroDIV');
    var cadFisicoDiv = document.getElementById('cadfisico');

    tipoCadastroDiv.style.display = 'none';
    cadFisicoDiv.style.display = 'flex';
}

function salvarCadastro() {
    var tipoCadastroDiv = document.getElementById('tipoCadastroDIV');
    var cadConcluido = document.getElementById('cadConcluido');
    var cadFisicoDiv = document.getElementById('cadfisico');

    tipoCadastroDiv.style.display = 'none';
    cadConcluido.style.display = 'block';
    cadFisicoDiv.style.display = 'none';
}
