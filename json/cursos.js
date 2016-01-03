//JSON Javascript Object Notation
var curso = {
	titulo: "Curso de JavaScript",
	videos: 100,
	tutor: "Jesus Rosas",
	introducction : function(){
		console.log("Bienvenido al curso: " + this.titulo + " que tiene " + this.videos);
	}
}

console.log(curso.introducction());