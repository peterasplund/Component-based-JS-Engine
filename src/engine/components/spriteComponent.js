import Component from '../component';

export default class SpriteComponent extends Component {
	ID = "SPRITE";

	constructor(img, spriteSize) {
		super();
		this.img = img;
		this.frame = 0;
		this.zindex = 0;
		this.rects = [];

		//Add rectangles
		const spriteWidth = img.width / spriteSize.width || img.width;
		const spriteHeight = img.height / spriteSize.height || img.height;

		for (let y = 0; y < spriteHeight; y++) {
			for (let x = 0; x < spriteWidth; x++) {
				this.rects.push({ x: x * spriteSize.width, y: y * spriteSize.height, width: spriteSize.width, height: spriteSize.height });
			}
		}
	}

	exec() {
		
	}

	getRectangles() {
		return this.rects;
	}

	getPos() {
		return this.pos;
	}

	getImage() {
		return this.img;
	}
}