/*
Atributos de ataque dos herois:
Monge: 1
Guerreiro: 2
Mago: 3
Ninja: 4

Armas dos jogadores:
Monge: Artes marciais
Guerreiro: Espada
Mago: Magia
Ninja: Shuriken
*/

const herois = {
    monge: { arma: "artes marciais", ataque: 1 },
    guerreiro: { arma: "espada", ataque: 2 },
    mago: { arma: "magia", ataque: 3 },
    ninja: { arma: "shuriken", ataque: 4 }
};

// Função para obter entrada do usuário
function obterDadosUsuario() {
    const nome = prompt("Digite seu nome:");
    const idade = parseInt(prompt("Digite sua idade:"));
    let classe = prompt("Escolha sua classe (monge, guerreiro, mago, ninja):").toLowerCase();

    // Validar classe
    while (!herois[classe]) {
        classe = prompt("Classe inválida! Escolha novamente (monge, guerreiro, mago, ninja):").toLowerCase();
    }

    return { name: nome, age: idade, class: classe };
}

const profile = obterDadosUsuario();

generateProfile(profile);

function generateProfile(profile) {
    console.log(`Name: ${profile.name}`);
    console.log(`Age: ${profile.age}`);
    console.log(`Class: ${profile.class}`);
    console.log("-----------------");
}

function ataqueMessage(classe) {
    const hero = herois[classe];
    if (hero) {
        console.log(`Vi que você é um ${classe} e vai fazer um ataque ao boss usando sua ${hero.arma}, boa sorte!`);
        console.log("O boss tem 5 de HP");
    } else {
        console.log("Classe inválida ou indisponível, verifique as opções e tente novamente!");
    }
}

ataqueMessage(profile.class);

console.log("");

class Hero {
    constructor(tipo) {
        this.tipo = tipo;
        this.arma = herois[tipo].arma;
        this.ataque = herois[tipo].ataque;
    }

    atacar() {
        if (herois[this.tipo]) {
            console.log(`O ${this.tipo} atacou usando ${this.arma}...`);
            console.log("");
        } else {
            console.log("Classe inválida ou indisponível, verifique as opções e tente novamente!");
        }
    }
}

const theHero = new Hero(profile.class);
theHero.atacar();

function ataqueBoss(classe) {
    const bossHP = 5;
    let totalDano = 0;
    const { ataque } = herois[classe];

    switch (classe) {
        case "guerreiro":
            totalDano = 3 * ataque;
            break;
        case "mago":
            totalDano = 2 * ataque;
            break;
        case "monge":
            totalDano = 5 * ataque;
            break;
        case "ninja":
            totalDano = 2 * ataque;
            break;
        default:
            console.log("Classe inválida ou indisponível, verifique as opções e tente novamente!");
            return;
    }

    for (let i = 1; i <= totalDano / ataque; i++) {
        console.log(`Você atacou o boss e tirou ${ataque} ponto(s) de vida`);
    }

    if (totalDano >= bossHP) {
        console.log("Parabéns, o boss foi derrotado!");
    } else {
        console.log("O boss ainda está vivo, continue lutando!");
    }

    console.log("");
}

ataqueBoss(profile.class);
