var Game = function() {

	var cm = new ContentManager();

	cm.loadImages( [{name: "player", src: "engine/assets/img/defaultAnimation.png"},
					{name: "enemy", src: "engine/assets/img/defaultAnimation2.png"},
					{name: "bush", src: "engine/assets/img/bush.png"}],
	function() {


		var player = new Player(cm.getImage("player"));


		var enemy = new Enemy(cm.getImage("enemy"), {x: 500, y: 100});
		var bush = new Bush(cm.getImage("bush"), {x: 10, y: 200});


		var drawComp = new DrawComponent();
		drawComp.show();
		var scene = new RenderComponent(drawComp);



		//Order
		scene.addEntity(player);
		scene.addEntity(enemy);
		scene.addEntity(bush);
		
		var gameLoop = new GameloopComponent(scene);
		gameLoop.startGame();


	});
};