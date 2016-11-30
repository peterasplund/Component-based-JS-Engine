import Component from '../Component';

export default class AnimationComponent extends Component {
	ID = "ANIMATION";

	constructor(animationSpeed) {
		this.animations = {};
		this.animationSpeed = animationSpeed || 10;
		this.currentFrame = 0;
		this.isPlaying = true;
		this.animationDelay = 0;
		this.currentAnimation = '';
		this._queueStop = false;
		animationDelay = 0;
	}

	addAnimation(name, frames) {
		if (frames !== undefined)
			this.animations[name] = frames;
	};

	.getAnimation(name) {
		return this.animations[name] || null;
	};

	setAnimation(name) {
		this.currentAnimation = name;
	};

	play() {
		this.isPlaying = true;
	};

	stop() {
		this.isPlaying = false;
	};

	resetFrame() {
		this.currentFrame = this.animations[this.currentAnimation][0];
	}

	exec(entity) {
		entity.getComponent("SPRITE").rectangle = entity.getSize();

		if (!this.isPlaying || typeof(this.animations[this.currentAnimation]) === "undefined") {
			return;
		}

		this.animationDela y++;

		if (this.animationDelay < this.animationSpeed) {
			return;
		} else {
			this.animationDelay = 0;
		}

		if (this.currentFrame >= this.animations[this.currentAnimation][0] && this.currentFrame < this.animations[this.currentAnimation][1]) {
			this.currentFrame++;
		} else {
			this.currentFrame = this.animations[this.currentAnimation][0];
		}

		entity.getImage().frame = this.currentFrame;
	};

};
