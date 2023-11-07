function Atleta (nome, modalidade, medalhas, patrocinio, valor_Recebido) {
    this.nome = nome;
    this.modalidade = modalidade;
    this.medalhas = medalhas;
    this.patrocinio = patrocinio;
    this.valor_Recebido = valor_Recebido;
}

const atleta1 = new Atleta ("Carlos", "Boxe", 4, "sim", 7000);
const atleta2 = new Atleta ("Paula", "Tênis", 2, "não", null);

console.log (atleta1);
console.log (atleta2);