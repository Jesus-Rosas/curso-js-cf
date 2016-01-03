function Tutor(nombre){
	this.nombre = nombre;
	this.saludar = function(){
		console.log("Hola a todos soy " + this.nombre);
	} 
}
var uriel = new Tutor("Uriel");
uriel.saludar();

var jesus = new Tutor("Jesus");
Jesus.saludar();