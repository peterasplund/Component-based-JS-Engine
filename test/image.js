describe("Image", function() {
	it("should be able to create a new image", function() {
		var img = new Image("../engine/assets/img/default.gif", {x: 0, y: 0}, {width: 60, height: 60});
		expect(img).not.toBe(undefined);
	});
});