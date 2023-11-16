const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Boas vindas aos campos de batalha");
console.log("Faça boas escolhas e seja o melhor dentre todos!");
console.log("Em nosso mundo temos alguns tipos de Hérois, são eles -> Magos, Monges, Guerreiros e Ninjas \n");

class Hero {
  constructor(nome, nivel, tipo, arma, estiloDeLuta) {
    this.nome = nome;
    this.nivel = nivel;
    this.tipo = tipo;
    this.arma = arma;
    this.estiloDeLuta = estiloDeLuta;
  }

  apresentacao() {
    console.log(`Olá, eu sou o herói de nível ${this.nivel}, o meu nome é ${this.nome}, sou classificado como ${this.tipo}, minhas armas preferidas são ${this.arma} e o meu estilo de combate é ${this.estiloDeLuta}`);
  }

  atacar() {
    console.log(`O Heroi ${this.nome} está atacando com suas ${this.arma}`);
  }
}

const herois = [
  new Hero("Aragorn", "S", "Guerreiro", "Espadas", "Combate Corpo a Corpo \n"),
  new Hero("Legolas", "S", "Mago", "Cajados de poder", "Combate a distancia \n"),
  new Hero("Boromir", "S", "Monge", "Clavas", "Combate Corpo a Corpo \n"),
  new Hero("Zed", "S", "Ninja", "Shuriken", "Combate Corpo a Corpo \n")
];

console.log("Escolha seu herói digitando o número correspondente:\n");
herois.forEach((heroi, index) => {
  console.log(`${index + 1}. ${heroi.nome}`);
});

rl.question('\n Digite o número do herói escolhido: ', (resposta) => {
  const indiceEscolhido = parseInt(resposta) - 1;

  if (indiceEscolhido >= 0 && indiceEscolhido < herois.length) {
    const heroiEscolhido = herois[indiceEscolhido];
    console.log("\nVocê escolheu o seguinte herói:\n");
    heroiEscolhido.apresentacao();
    heroiEscolhido.atacar(); 
    
    rl.close();
  } else {
    console.log("Opção inválida. Tente novamente.");
    rl.close();
  }
});
