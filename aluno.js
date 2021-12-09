const aluno = {
  nome: '',
  qtdFaltas: 0,
  notas: [],
  construtor: function (nome, faltas, notas) {
    this.nome = nome
    this.qtdFaltas = faltas
    this.notas = notas
  },
  calcMedia: aluno => {
    let total = 0

    aluno.notas.forEach(nota => {
      total += nota
    })

    total / aluno.notas.length
  },
  outraFalta: aluno => {
    aluno.qtdFaltas++
  }
}

module.exports = aluno
