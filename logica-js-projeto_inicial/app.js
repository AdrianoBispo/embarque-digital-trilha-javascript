// Dar as boas vindas ao jogador.
alert('Boas vindas ao jogo do número secreto');

// Cria a variável e apresenta no console do navegador.
let numeroSecreto = 9;
console.log(numeroSecreto)

// Cria a variável "chute" que é responsável por receber o número digitado pelo jogador.
let chute = prompt('Escolha um número entre 1 e 10');

// Valida se o número digitado pelo jogador é o mesmo que o número secreto e retorna uma mensagem.
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}