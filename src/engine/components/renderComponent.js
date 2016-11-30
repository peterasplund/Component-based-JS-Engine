import Component from '../Component';

export default class RenderComponent extends Component {
	ID = "RENDER";

	constructor(drawComp) {
		super(this);
		this.drawComp = drawComp;
		this.entities = [];
	}

	addEntity(entity) {
		entity.id = this.entities.length;
		this.entities.push(entity);
	}

	exec() {
		this.drawComp.clear();

		//Calculate fps
		if(!this.lastCalledTime) {
		    this.lastCalledTime = new Date().getTime();
		    this.fps = 0;
		    return;
		}
		this.delta = (new Date().getTime() - this.lastCalledTime)/1000;
		this.lastCalledTime = new Date().getTime();
		this.fps = 1/this.delta;

		this.drawComp.drawText({ x: 10, y: 10 },"FPS: " + Math.round(this.fps));

		for (var i = 0; i < this.entities.length; i++) {
			this.drawComp.exec(this.entities[i]);

			var test = Object.create(this.entities).splice(i + 1,2);

			this.entities[i].update(test);
		}
	}
}