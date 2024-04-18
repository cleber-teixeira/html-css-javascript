// Função de ação do botão expandir menu
document.getElementById('open_btn').addEventListener('click', function () {
    // pega o elemento sidebar e alterna entre acrescenta e tirar a classe 'open-sidebar'
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});
