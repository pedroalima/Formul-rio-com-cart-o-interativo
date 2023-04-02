// Feature responsável por replicar no cartão o valor que receber no input(Cardholder Name) do formulário

// Variável nome do formulário
const nomeInput = document.querySelector('#cardholder');
// Variável nome do cartão
const nomeCartao = document.querySelector('#nomeCartao');

// Chama a função quando um usuário escreve algo no input(Cardholder Name)
nomeInput.oninput = () => {
    receiveName();
}

// Função que atribui o valor do input(Cardholder Name) no nome do cartão 
function receiveName() {
    nomeCartao.innerHTML = nomeInput.value;
}

