/*
	Author: Jesus Rosas Ramirez
	Name: Juego de Ping Pong
	Date: 2 de Enero de 2016

*/
//Funcion que define el el constructor de la pizarra principal del juego
(function(){
		self.Board = function(width,height){
		this.width = width;
		this.height = height;
		this.playing = false;
		this.game_over = false;
		this.bars = [];
		this.ball = null;
	}

	Board.prototype = {
		get elements(){
			var elements = this.bars;
			elements.push(ball);
			return elements;
		}		
	}
})();

//Funcion para dibujar la vista
(function(){
		self.BoardView = function(canvas, board){
		this.canvas = canvas;
		this.canvas.width = board.width;
		this.canvas.height = board.height;
		this.board = board;
		this.ctx = canvas.getContext("2d");
	}
})();

window.addEventListener("load", main);
function main(){
	var board = new Board(800, 400);
	var canvas = document.getElementById("canvas");

	var board_view = new BoardView(canvas, board);
}