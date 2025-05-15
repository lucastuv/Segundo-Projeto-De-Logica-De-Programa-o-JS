let heroi = "Hero Lucas"
let vitoria = 230
let derrota = 100

function calcularVitoria(vitoria, derrota) {
    return vitoria - derrota
}

let saldoVitorias = calcularVitoria(vitoria, derrota);
let rank;

if (saldoVitorias >= 0 && saldoVitorias <= 10) {
    rank = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    rank = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    rank = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    rank = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    rank = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    rank = "Lendario";
} else if (saldoVitorias >= 101) {
    rank = "Imortal";
} else {
    rank = heroi + " não tem rank";
}

console.log(heroi + ", tem um saldo vitorias de : " + saldoVitorias + ", esta no nivel de: " + rank + "." );
