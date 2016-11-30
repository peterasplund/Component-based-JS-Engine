export default class ContentManager extends Component {
	constructor() {
		this.images = {};
		this.sounds = {};
		this.length = 0;
		this.done = false;
		this.loadedImages = 0;
	}

	loadImages(imagesList, callback) {
		this.length = imagesList.length;

		for (let i = 0; i < imagesList.length; i++) {
			this.loadImage(imagesList[i].src, imagesList[i].name, callback);
		}
	};

	loadImage(src, name, callback) {
		this.done = false;

		var img = document.createElement("img");
		img.src = src;
		
		img.onload = this.loadedImage.bind(this, callback);
		this.images[name] = img;
	};

	loadedImage(callback) {
		this.loadedImages ++;

		if (this.loadedImages == this.length) {
			callback();
		}
	};

	getImage(title) {
		return this.images[title] || null;
	};
};