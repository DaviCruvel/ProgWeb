let estado = 0;
let pontuacao = 0;
while (estado === 0) {
    let opcaoPc = Math.floor(Math.random() * 3 + 1);
    console.log("Escolha sua jogada!");
    let opcao = window.prompt();
    console.log("1 - Papel" + "<br>"+  "2 - Pedra" + "<br>" + "3 - Tesoura" + "<br>");
    console.log(opcao);
    if (opcao === 1 && opcaoPc === 2) {
        console.log("O computador jogou Pedra");
        console.log("Você ganhou!");
        pontuacao++;
    }else if (opcao === 1 && opcaoPc === 3) {
        console.log("O computador jogou Tesoura");
        console.log("Você perdeu!");
        estado = 1;
    }else if (opcao === 2 && opcaoPc === 3) {
        console.log("O computador jogou tesoura");
        console.log("Você ganhou!");
        pontuacao++;
    }else if (opcao === 2 && opcaoPc == 1) {
        console.log("O computador jogou Papel");
        console.log("Você perdeu!");
        estado = 1;
    }else if (opcao === 3 && opcaoPc === 2) {
        console.log("O computador jogou Pedra");
        console.log("Você perdeu!");
        estado = 1;
    }else if (opcao === 3 && opcaoPc === 1) {
        console.log("O computador jogou Pedra");
        console.log("Você ganhou!");
        pontuacao++;
    }
}
console.log("Sua pontuação foi:", pontuacao);


/* 1 - Papel
   2 - Pedra
   3 - Tesoura*/