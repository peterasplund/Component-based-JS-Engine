describe("Entity", function() {


  it("should be able to creeate a new entity", function() {
    
    var entity = new Entity();
    

    //demonstrates use of custom matcher
    expect(entity).not.toBe(undefined);
  });

  it("should be able to add a component to an entity", function() {
    
    var entity = new Entity();

    var compEmpty = new Component();

    expect(Object.keys(entity.components).length).toBe(0);

    entity.addComponent(compEmpty);
    
    //demonstrates use of custom matcher
    expect(Object.keys(entity.components).length).toBe(1);
  });

  it("should be able to remove a component from an entity", function() {

    var entity = new Entity();

    var compEmpty = new Component();

    entity.addComponent(compEmpty);

    entity.removeComponent(compEmpty);

    //demonstrates use of custom matcher
    expect(Object.keys(entity.components).length).toBe(0);
  });

  it("should be able to remove a component from an entity by ID", function() {

    var entity = new Entity();

    var compEmpty = new Component();

    entity.addComponent(compEmpty);

    entity.removeComponentByID("ABSTRACT");

    //demonstrates use of custom matcher
    expect(Object.keys(entity.components).length).toBe(0);
  });

  it("should be able to get a component by ID", function() {

    var entity = new Entity();

    var compEmpty = new Component();

    entity.addComponent(compEmpty);

    var comp = entity.getComponent("ABSTRACT");

    expect(comp).not.toBe(null);
  });
  it("should be able to use components properties", function() {

    var entity = new Entity();

    entity.addComponent(new PhysicsComponent());


    expect(entity.getComponent("PHYSICS").vel.x).not.toBe(undefined);
  });
  it("should be able to locate some components", function() {

    var entity = new Entity();

    entity.addComponent(new PositionComponent({x: 10, y : 65}));
    entity.addComponent(new PhysicsComponent({x: 1, y: 0}));

    expect(entity.getComponent("PHYSICS").vel.x).toBe(1);
  });

});

