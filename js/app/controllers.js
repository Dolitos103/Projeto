angular.module("meuModulo",)
.controller("indexController", function($scope){
    $scope.titulo = "Home";
    $scope.alunos = [
         {nome:"Jose",email:"jose@gmail.com",nota1:75,nota2:80,nota3:75},
         {nome:"Agnaldo",email:"agnaldo@gmail.com",nota1:65,nota2:70,nota3:75},
         {nome:"Carlos",email:"carlos@gmail.com",nota1:45,nota2:90,nota3:75},
         {nome:"Lauro",email:"lauro@gmail.com",nota1:55,nota2:70,nota3:75},
         {nome:"Antonio",email:"antonio@gmail.com",nota1:75,nota2:80,nota3:75}
    ];

    var init = function(){
         $scope.alunos.forEach(function(aluno){
             aluno.media = media(aluno);
         });
         limparForm();
    };
     var contar2 = 0;
     var media = function(Aluno){
         console.log(contar2++);
         var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3))/3;
         return media.toFixed(2);
    };


     $scope.addAluno =function(Aluno){
         Aluno.media = media(Aluno);
         $scope.alunos.push(Aluno);
         limparForm();

    };

     $scope.editando = false;
     var alunoEditar;

     $scope.editarAluno = function(Aluno){
         $scope.editando = true;
         angular.copy(Aluno,$scope.Aluno)
         alunoEditar = Aluno;
    };

    $scope.salvarAluno = function(Aluno){
         alunoEditar.nome = Aluno.nome;
         alunoEditar.email = Aluno.email;
         alunoEditar.nota1 = Aluno.nota1;
         alunoEditar.nota2 = Aluno.nota2;
         alunoEditar.nota3 = Aluno.nota3;
         alunoEditar.media = media(Aluno);
         limparForm();
    };

    $scope.deletarAluno = function(Aluno){
         for (var index in $scope.alunos){
             var aux = $scope.alunos[index];
             if (Aluno === aux){
                 $scope.alunos.splice(index,1);
                 limparForm();
             }
         }
    };

    $scope.limpoTudo = function(Aluno){
         limparForm();
    };

    var limparForm = function(){
         $scope.Aluno = {nome: "",email:"",nota1:'',nota2:'',nota3:'', media:''};
    };
    
    init();
})

.controller("contatoController", function($scope){
    $scope.titulo = "Contato";
})