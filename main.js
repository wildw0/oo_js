function Artista (nome, modalidade, apresentacaoes, valor_Recebido) {
    this.nome = nome;
    this.modalidade = modalidade;
    this.apresentacaoes = apresentacaoes;
    this.valor_Recebido = valor_Recebido;
}

function Atleta (nome, modalidade, medalhas, valor_Recebido) {
    this.nome = nome;
    this.modalidade = modalidade;
    this.medalhas = medalhas;
    this.valor_Recebido = valor_Recebido;
}

const atleta1 = new Atleta ("Carlos", "Boxe", 4, 7000);
const atleta2 = new Atleta ("Paula", "Tênis", 2, null);

console.log (atleta1);
console.log (atleta2);