import {
	DrawComponent,
	RenderComponent,
	GameloopComponent
} from './engine/components';

import ContentManager from './engine/contentManager';

import {
	Player,
	Bush,
	Enemy
} from 'exampleGame';


const cm = new ContentManager();

cm.loadImages( [{name: "player", src: "engine/assets/img/character_ness_walk.png"},
				{name: "enemy", src: "engine/assets/img/character_ness_walk.png"},
				{name: "bush", src: "engine/assets/img/bush.png"}],

const player = new Player(cm.getImage("player"));

const enemy = new Enemy(cm.getImage("enemy"), {x: 500, y: 100});
const bush = new Bush(cm.getImage("bush"), {x: 10, y: 200});

const drawComp = new DrawComponent();
drawComp.show();
const scene = new RenderComponent(drawComp);

scene.addEntity(player);
scene.addEntity(enemy);
scene.addEntity(bush);

const gameLoop = new GameloopComponent(scene);
gameLoop.startGame();

