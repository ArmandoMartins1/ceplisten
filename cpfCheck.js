const CPF = require('cpf-check');

var resultado = CPF.validate("012.345.678-90");

if(resultado){
	console.log("CPF Válido.");
}else{
	console.log("CPF Inválido.");
}

console.log(resultado);
