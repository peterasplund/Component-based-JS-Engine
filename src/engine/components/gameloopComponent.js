import Component from '../component';

export default class GameloopComponent extends Component {
	ID = "GAMELOOP";

	constructor(renderer) {
		super();
		this.renderer = renderer;
	}

	startGame() {
		this.exec();
	}

	exec() {
		this.renderer.exec();
		requestAnimationFrame(this.exec.bind(this));
	}
}