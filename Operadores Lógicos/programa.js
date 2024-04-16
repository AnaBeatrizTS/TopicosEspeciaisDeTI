var cpf = "04407868279";
var pais = "Brasil";
var idade = 18;

var matrizM = new Array(4);
//QUESTÃO NUMERO 1

for (i = 0; i < 4; i++){
        matrizM[i] = new Array()
    for ( j = 0; j < 4; j++) {        
        matrizM[i][j] = (i * 4) + j;
    }
}

//QUJESTÃO NUMERO 2

for (i = 0; i < 4; i++){
    matrizM[i] = new Array()
for ( j = 0; j < 4; j++) {        
    matrizM[i][j] = (i * 4) + j;


    if(matrizM[i][j] === 10){
        document.writeln("O valor 10 foi encontrado com sucesso!");
    }
}
}


//QUESTÃO NUMERO 3
//Igual

if(pais.length == 6){
    document.writeln("O país digitado possui 6 letras");
}

//DIferente

if(pais.length != 6){
    document.writeln("O país digitado possui mais ou menos que 6 letras");
}

//Identico

if(cpf.length === "04407868279"){
    document.writeln(" O cpf prenchido no campo ja foi cadastrado");
}

// Não Identico

if(cpf.length !== "04407868279"){
    document.writeln(" O cpf prenchido no campo ainda não foi cadastrado");
}

//Menor que

if(pais.length < 6){
    document.writeln("O país digitado possui menos que 6 letras");
}

//Maior que

if(pais.length > 6){
    document.writeln("O país digitado possui mais que 6 letras");
}

//Menor ou igual
if(pais.length <= 6){
    document.writeln("O país digitado possui 6 letras ou menos");
}

//Maior ou igual

if(pais.length >= 6){
    document.writeln("O país digitado possui 6 letras ou mais");
}
// Or

if(cpf.length >= 11 || cpf.length<= 11){
    document.writeln("O cpf digitado não possui a quantidade de caracteres correta");
}

// and 
if(idade = 18 && idade < 18){
    document.writeln("Menor de idade - Cadastro indisponível");
}