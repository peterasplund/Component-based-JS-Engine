var test = require('tape');

import Component from '../src/engine/component';
import Entity from '../src/engine/entity';
import {
  PhysicsComponent,
  PositionComponent
} from '../src/engine/components/';

test("should be able to creeate a new entity", (t) => {
  const entity = new Entity();
  t.notEqual(entity, undefined);
  t.end();
});

test("should be able to add a component to an entity", (t) => {
  const entity = new Entity();
  const compEmpty = new Component();

  t.equal(Object.keys(entity.components).length, 0);

  entity.addComponent(compEmpty);

  t.equal(Object.keys(entity.components).length, 1);
  t.end();
});

test("should be able to remove a component from an entity", (t) => {
  const entity = new Entity();
  const compEmpty = new Component();

  entity.addComponent(compEmpty);
  entity.removeComponent(compEmpty);

  t.equal(Object.keys(entity.components).length, 0);
  t.end();
});

test("should be able to remove a component from an entity by ID", (t) => {
  const entity = new Entity();
  const compEmpty = new Component();

  entity.addComponent(compEmpty);
  entity.removeComponentByID("ABSTRACT");

  t.equal(Object.keys(entity.components).length, 0);
  t.end();
});

test("should be able to get a component by ID", (t) => {
  const entity = new Entity();
  const compEmpty = new Component();

  entity.addComponent(compEmpty);
  const comp = entity.getComponent("ABSTRACT");

  t.notEqual(comp, null);
  t.end();
});

test("should be able to use components properties", (t) => {
  const entity = new Entity();

  entity.addComponent(new PhysicsComponent());

  t.notEqual(entity.getComponent("PHYSICS").vel.x, undefined);
  t.end();
});

test("should be able to locate some components", (t) => {
  const entity = new Entity();

  entity.addComponent(new PositionComponent({x: 10, y : 65}));
  entity.addComponent(new PhysicsComponent({x: 1, y: 0}));

  t.equal(entity.getComponent("PHYSICS").vel.x, 1);
  t.end();
});
