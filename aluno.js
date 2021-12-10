const aluno = {
  nome: '',
  qtdFaltas: 0,
  notas: [],
  construtor: function (nome, faltas, notas) {
    this.nome = nome
    this.qtdFaltas = faltas
    this.notas = notas
  },
  calcMedia: function(aluno) {
    let total = 0

    aluno.notas.forEach(nota => {
      total += nota
    });

    return total / aluno.notas.length;
  },
  outraFalta: function(aluno) {
   aluno.qtdFaltas++;
  }
}

module.exports = aluno
