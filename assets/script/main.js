// Feature responsável por replicar no cartão o valor que receber nos inputs do formulário

// Variável nome do formulário
const cardNameInput = document.querySelector('#cardNameInput');
// Variável nome da imagem do cartão
const cardName = document.querySelector('#cardName');

// Chama a função quando usuário escreve algo no input(Cardholder Name)
cardNameInput.oninput = () => receiveName();

// Função que atribui o valor do input(Cardholder Name) no nome do cartão 
function receiveName() {
    cardName.innerHTML = cardNameInput.value;
}

// Variável número do formulário
const cardNumberInput = document.querySelector('#cardNumberInput');
// Variável número da imagem do cartão
const cardNumber = document.querySelector('#cardNumber');

// Chama a função quando usuário escreve algo no input(Card Number)
cardNumberInput.oninput = () => receiveNumber();

// Função que atribui o valor do input(Card Number) no número do cartão
function receiveNumber() {
    cardNumber.innerHTML = format(cardNumberInput.value);
}

// Função que formata a string em blocos de 4 números
function format(element) {
    return element.toString().replace(/\d{4}(?=.)/g, "$& ")
}



const monthInput = document.querySelector('#monthInput');
const cardMonth = document.querySelector('#cardMonth');

function receiveMonth() {
    cardMonth.innerHTML = monthInput.value;
}

monthInput.oninput = () => receiveMonth();


const yearsInput = document.querySelector('#yearsInput');
const cardYears = document.querySelector('#cardYears');

function receiveYears() {
    cardYears.innerHTML = yearsInput.value;
}

yearsInput.oninput = () => receiveYears();


const cvcInput = document.querySelector('#cvcInput');
const cardCvc = document.querySelector('#cardCvc');

function receiveCvc() {
    cardCvc.innerHTML = cvcInput.value;
}

cvcInput.oninput = () => receiveCvc();