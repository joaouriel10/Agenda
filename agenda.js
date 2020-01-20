var quantidadeCadastroAgenda = 0;
var quantidadeAgenda = 0;

var pessoas = new Array();

quantidadeAgenda = prompt("Quantas agendas vai ter?");

function cadastro(){
    for(var i = 0; i < quantidadeAgenda; i++){

        var nomeDonoAgenda = prompt("Qual o seu nome? ")
        pessoas.push([nomeDonoAgenda, new Array()]);
    
        quantidadeCadastroAgenda = prompt("Quantos cadastros quer fazer na agenda?");
    
        for(var contador = 0; contador < quantidadeCadastroAgenda; contador++){
    
            var nomePessoaAgenda = prompt("Qual o nome?")
            var numeroPessoaAgenda = prompt("Qual o numero?")
            pessoas[i][1].push([nomePessoaAgenda,numeroPessoaAgenda])
        }
    }
}


function consulta(){
    for(var i = 0; i < quantidadeAgenda; i++){
        console.log(i + " " + pessoas[i][0])
    }
    
    var escolhaConsulta = prompt("Qual agenda quer ver? ");
    
    //console.log(pessoas[escolhaConsulta][1].length)
    
    for(var i = 0; i < pessoas[escolhaConsulta][1].length; i++){
        //console.log(pessoas[escolhaConsulta][1][i])
        console.log(pessoas[escolhaConsulta][1][i][0])
        console.log(pessoas[escolhaConsulta][1][i][1])
    
    }
}




console.log(cadastro());
console.log(consulta());
