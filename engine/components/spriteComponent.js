var SpriteComponent = function(img, spriteSize) {
	this.img = img;
	this.frame = 0;
	this.zindex = 0;
	var rects = [];

	this.rectangles = function () {
		return rects;
	};

	//Add rectangles
	var spriteWidth = img.width / spriteSize.width || img.width;
	var spriteHeight = img.height / spriteSize.height || img.height;

	for (var y = 0; y < spriteHeight; y++) {
		for (var x = 0; x < spriteWidth; x++) {
			rects.push({ x: x * spriteSize.width, y: y * spriteSize.height, width: spriteSize.width, height: spriteSize.height });
		}
	}

	console.log("rectangles: " + this.rectangles().length)

};

SpriteComponent.prototype.getPos = function() {
	return this.pos;
};

SpriteComponent.prototype.getImage = function() {
	return this.img;
};




SpriteComponent.prototype = new Component();

SpriteComponent.prototype.ID = "SPRITE";

SpriteComponent.prototype.exec = function() {
};