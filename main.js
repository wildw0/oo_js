function Patrocinado(nome, modalidade, valor_Recebido) {
        this.nome = nome;
        this.modalidade = modalidade;
        this.valor_Recebido = valor_Recebido;
    }

function Artista (nome, modalidade, apresentacaoes, valor_Recebido,) {
    Patrocinado.call(this, nome, modalidade, valor_Recebido)
        this.apresentacaoes = apresentacaoes;
    }

const artista1 = new Artista("Kurt", "Cantor", 124, 10000);
const artista2 = new Artista("Tarsila", "Pintora", null, 12500);

console.log (artista1);
console.log (artista2);


function Atleta (nome, modalidade, medalhas, valor_Recebido,) {
    Patrocinado.call(this, nome, modalidade, valor_Recebido)
        this.medalhas = medalhas;
    }

const atleta1 = new Atleta("Maguila", "Boxe", 4, 1000);
const atleta2 = new Atleta("Carmen", "Atletismo", 26, 12800);

console.log (atleta1);
console.log (atleta2);