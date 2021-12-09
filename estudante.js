const aluno = require('./aluno')

const ismael = new aluno.construtor('Isma', 10, [6, 7, 5])
aluno.outraFalta(ismael)

const dareska = new aluno.construtor('Drika', 20, [9, 10, 8])
aluno.outraFalta(dareska)

const dryesko = new aluno.construtor('Pqd', 2, [5, 9, 10])
aluno.outraFalta(dryesko)

const isaque = new aluno.construtor('Izy', 10, [10, 8, 9])
aluno.outraFalta(isaque)

const pedro = new aluno.construtor('Pedro', 30, [6, 6, 6])
aluno.outraFalta(pedro)

const kelly = new aluno.construtor('Kelly', 40, [4, 3, 7])
aluno.outraFalta(kelly)

module.exports = {
  ismael,
  dareska,
  dryesko,
  isaque,
  pedro,
  kelly
}
