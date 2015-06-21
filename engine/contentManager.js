var ContentManager = function() {
	this.images = {};
	this.sounds = {};
	this.length = 0;
	this.done = false;
	this.loadedImages = 0;

};

ContentManager.prototype.loadImages = function(imagesList, callback) {
	this.length = imagesList.length;
	for (var i = 0; i < imagesList.length; i++) {
		this.loadImage(imagesList[i].src, imagesList[i].name, callback);
	}
};

ContentManager.prototype.loadImage = function(src, name, callback) {
	this.done = false;

	var img = document.createElement("img");
	img.src = src;
	
	img.onload = this.loadedImage.bind(this, callback);
	this.images[name] = img;
};

ContentManager.prototype.loadedImage = function(callback) {
	this.loadedImages ++;
	if (this.loadedImages == this.length)
	{
		callback();
	}
};


ContentManager.prototype.getImage = function(title) {
	return this.images[title] || null;
};