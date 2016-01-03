//Definimos el prototipo

function Vaso(altura, diametro)
{
	this.diametro = diametro;
	this.altura = altura;

	this.calcularVolumen = function(){
		return this.diametro * this.altura;
	}
}

var vasoCoca = new Vaso(5, 2.3);

Vaso.prototype.obtenerAltura = function(){
	return this.altura;
}
vasoCoca.calcularVolumen();