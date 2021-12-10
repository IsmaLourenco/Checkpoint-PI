const aluno = require('./aluno');
const estudante = require('./estudante');

const curso = {
  nomeDoCurso: 'JavaHell!!!',
  notaDeAprovacao: 5,
  maxFaltas: 50,
  listaDeEstudantes: [
    estudante.ismael,
    estudante.dareska,
    estudante.dryesko,
    estudante.isaque,
    estudante.pedro,
    estudante.kelly
  ],
  addAluno: function(nome, faltas, notas) {
    this.listaDeEstudantes.push(new aluno.construtor(nome, faltas, notas));
  },

  aprovados: function(estudante) {
    const media = aluno.calcMedia(estudante);

    if (media >= this.notaDeAprovacao && estudante.qtdFaltas < this.maxFaltas) {
      return `${estudante.nome}: Aprovação geral`;
    } else if (media > this.notaDeAprovacao * 1.1 && estudante.qtdFaltas === this.maxFaltas) {
      return `${estudante.nome}: Aprovado por nota`;
    } else {
      return `${estudante.nome}: Reprovado`;
    }
  },
  listaDeAprovados: function() {
    let geral = [];

    this.listaDeEstudantes.forEach(estudante => {
      geral.push(this.aprovados(estudante));
    });
    return geral;
  }

}

curso.addAluno('Júlia', 0, [5, 5, 4]);

const alunosAprovados = curso.listaDeAprovados();

alunosAprovados.forEach(aprovado => {
  console.log(aprovado);
});

console.log(curso);