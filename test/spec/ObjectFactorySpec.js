describe("ObjectFactory", function() {


  it("should be able to creeate a stdObject (Standard object with position, physics, sprite and rectangle)", function() {

  	var factory = new ObjectFactory();

  	var img = new Image("../../engine/assets/img/default.gif",
		{x: 0, y: 0},
		{width: 60, height: 60}
	);
  	var obj = factory.createStdObj(img, {x: 0, y: 0}, { width:32, height:32 }, { x:1, y: 0});

  	expect(obj.findComponent("PHYSICS_COMPONENT").vel.x).toBe(1);
  });


});