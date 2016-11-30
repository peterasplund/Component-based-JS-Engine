import Component from '../Component';

export default class AnimationComponent extends Component {
	ID = "GAMELOOP";

	constructor(renderer) {
		super(this);
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