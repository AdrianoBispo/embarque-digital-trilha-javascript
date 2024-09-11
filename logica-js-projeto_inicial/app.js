// Dar boas vindas ao usuario
alert('Boas vindas ao jogo do número secreto');

// Cria o número aleatório através do método matemático padrão do javascript
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto) // Informa o número secreto no console do navegador

// Define as variáveis chute e tentativas
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto ele repetirá o prompt da variável "chute"
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    
    // se chute for igual ao número secreto ele encerra o loop
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        
        tentativas++ // tentativas = tentativas + 1
    }
}

// Valida se o número de tentativas é maior que 1, caso seja, exibe 'tentativas'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

// Imprime uma mensagem de felicitação caso o "chute" for igual a "númeroSecreto"
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);