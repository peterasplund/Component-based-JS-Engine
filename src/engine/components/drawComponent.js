import Component from '../Component';

/*
* This component handels the canvas and context. It's also responsible for painting the sprites to the canvas
*/
export default class DrawComponent extends Component {
	ID = "DRAW";

	constructor(width, height, antialias) {
		super();
		antialias = antialias || false;

		this.width = width || 800;
		this.height = height || 450; 

		this.canvas = document.createElement("canvas");
		this.canvas.style.border = "1px solid #ccc";
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		this.ctx = this.canvas.getContext("2d");
		this.ctx.webkitImageSmoothingEnabled = antialias;
	}

	drawText = function(pos, text, color) {
		this.ctx.fillStyle = color || "#333333";
		pos = pos || { x: 0, y: 0 };
		this.ctx.fillText(text, pos.x, pos.y);
	}

	exec = function(entity) {
		var sprite = entity.getComponent("SPRITE");
		var framePos = sprite.rectangles()[sprite.frame];
		var frameSize = sprite.rectangles()[sprite.frame];
		var pos = entity.getPos();
		var size = entity.getSize();

		this.ctx.drawImage(sprite.img,
							framePos.x,			//Image start clip x
							framePos.y,			//Image start clip y
							frameSize.width,	//The width of the clipped image
							frameSize.height,	//The height of the clipped image
							pos.x,			//The x coordinate where to place the image on the canvas
							pos.y,			//The y coordinate where to place the image on the canvas
							size.width,	//The width of the image to use (stretch or reduce the image)
							size.height	//The height of the image to use (stretch or reduce the image)
		);


		//DEBUG
		this.ctx.fillText("id: " + entity.id,pos.x + 18,pos.y - 1);
		this.ctx.strokeStyle="#5eea12";
		this.ctx.strokeRect(pos.x,pos.y, size.width, size.height);
	}

	show(panel) {
		panel = panel || document.body;
		panel.appendChild(this.canvas);
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}