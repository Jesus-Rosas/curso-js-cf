//Numero maximo

var max = 100;
//numero minimo

var min = 1;

var numero_secreto = Math.random() * (max-min) * min;
num_secreto = parseInt(numero_secreto);
console.log(num_secreto);


var mensaje = "Ingresa un numero para adivinar el numero mágico";
while(true){
	var num_usuario = prompt(mensaje, "0");
	
	nume_usuario = parseInt(num_usuario);
	
	if(nume_usuario === num_secreto){
		alert("Ganaste!, adivinaste el numero secreto");
		break;
	}
	else if(nume_usuario === 0){
		break;
	}
	else if(nume_usuario > num_secreto){
		mensaje = "Lo sentimos, el numero que ingresaste es mayor al numero mágico"

	}
	else if(nume_usuario < num_secreto){
		mensaje = "Lo sentimos, el numero que ingresaste es menor al numero mágico"
	}
}