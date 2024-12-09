// Script simples para capturar o evento de envio do formulário e exibir uma mensagem
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de sucesso (isso pode ser expandido no futuro)
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
});
