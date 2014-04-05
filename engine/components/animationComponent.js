var AnimationComponent = function(animationSpeed) {
	
	this.animations = {};
	this.animationSpeed = animationSpeed || 10;
	this.currentFrame = 0;
	this.isPlaying = true;
	this.animationDelay = 0;
	this.currentAnimation = '';
	animationDelay = 0;
};

AnimationComponent.prototype = new Component();

AnimationComponent.prototype.ID = "ANIMATION";

AnimationComponent.prototype.addAnimation = function(name, frames) {
	if (frames !== undefined)
		this.animations[name] = frames;
};
AnimationComponent.prototype.getAnimation = function(name) {
	return this.animations[name] || null;
};
AnimationComponent.prototype.setAnimation = function(name) {
	this.currentAnimation = name;
};
AnimationComponent.prototype.play = function() {
	this.isPlaying = true;
};
AnimationComponent.prototype.stop = function() {
	this.isPlaying = false;
};


AnimationComponent.prototype.exec = function(entity) {

	entity.getComponent("SPRITE").rectangle = entity.getSize();

	if (this.isPlaying == false || this.animations[this.currentAnimation] == undefined)
		return;


	this.animationDelay++;

	if (!(this.animationDelay >= this.animationSpeed))
		return;
	else
		this.animationDelay = 0;


	if (this.currentFrame >= this.animations[this.currentAnimation][0] && this.currentFrame < this.animations[this.currentAnimation][1])
		this.currentFrame++;
	else
		this.currentFrame = this.animations[this.currentAnimation][0];

	//Animate

	entity.getImage().frame = this.currentFrame;

};
