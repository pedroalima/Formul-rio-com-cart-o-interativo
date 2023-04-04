// *** Feature responsável por replicar no cartão o valor que receber nos inputs do formulário ***

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


// Variável mês do formulário
const monthInput = document.querySelector('#monthInput');
// Variável mês da imagem do cartão
const cardMonth = document.querySelector('#cardMonth');
// Função que atribui o valor do input(Exp. Date) MM no mês do cartão
function receiveMonth() {
    cardMonth.innerHTML = monthInput.value;
}
// Chama a função quando usuário escreve algo no input(Exp. Date) MM
monthInput.oninput = () => receiveMonth();


// Variável ano do formulário
const yearsInput = document.querySelector('#yearsInput');
// Variável ano da imagem do cartão
const cardYears = document.querySelector('#cardYears');
// Função que atribui o valor do input(Exp. Date) YY no ano do cartão
function receiveYears() {
    cardYears.innerHTML = yearsInput.value;
}
// Chama a função quando usuário escreve algo no input(Exp. Date) YY
yearsInput.oninput = () => receiveYears();


// Variável CVC do formulário
const cvcInput = document.querySelector('#cvcInput');
// Variável CVC da imagem do cartão
const cardCvc = document.querySelector('#cardCvc');
// Função que atribui o valor do input(CVC) no CVC do cartão
function receiveCvc() {
    cardCvc.innerHTML = cvcInput.value;
}
// Chama a função quando usuário escreve algo no input(CVC)
cvcInput.oninput = () => receiveCvc();



// Feature responsável pela validação de dados em branco

// Variável da seção formulário
const form = document.querySelector('#form');
// Chama a função quando usuário submete o formlário
form.addEventListener('submit', (element) => {
    element.preventDefault();

    checkInputs();
});
// Função que verifica os valores dos inputs
function checkInputs() {
   const cardNameInputValue = cardNameInput.value;
   const cardNumberInputValue = cardNumberInput.value;
   const monthInputValue = monthInput.value;
   const cvcInputValue = cvcInput.value;
   // Fluxo de dados que verifica se os inputs estão vazios
   if (!cardNameInputValue) {
    setErrorFor(cardNameInput, "can't be blank");
    } 
    else if (!cardNumberInputValue) {
        setErrorFor(cardNumberInput, "can't be blank");
    } 
    else if (!monthInputValue) {
        setErrorFor(monthInput, "can't be blank");
    } 
    else if (!cvcInputValue) {
        setErrorFor(cvcInput, "can't be blank");
    } 
    else {
    alternationForms();
    }
};
// Funcão que altera a mensagem do input alvo
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    small.className = 'error error-visible';
};



// Feature responsável por mostrar e esconder a versão completa do formulário

// Variável do botão da versão completa
const formCompleteButton = document.querySelector('#formCompleteButton');
// Chama a função quando o botão é clicado
formCompleteButton.addEventListener('click', () => alternationForms()
);
// função que verifica e altera as classes das versões do formulário
function alternationForms() {
    const formComplete = document.querySelector('#formComplete');
    
    form.classList.toggle('hide');
    formComplete.classList.toggle('hide');
};