var GameloopComponent = function(renderer) {
	Component.call(this);
	this.renderer = renderer;
};

GameloopComponent.prototype = new Component();

GameloopComponent.prototype.startGame = function() {
	this.exec();
};



GameloopComponent.prototype.ID = "GAMELOOP";

GameloopComponent.prototype.exec = function() {
	this.renderer.exec();
	requestAnimationFrame(this.exec.bind(this));
};