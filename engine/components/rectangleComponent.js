var RectangleComponent = function(size, solid) {
	this.size = size || { width:32, height:32 };
	this.solid = solid || false;
};

RectangleComponent.prototype = new Component();



RectangleComponent.prototype.intersects = function(entity, other) {

	var r1 = { x : entity.getPos().x, y: entity.getPos().y,
	 			 x2 : entity.getSize().width + entity.getPos().x, y2 : entity.getSize().height + entity.getPos().y };

	var r2 = { x : other.getPos().x, y: other.getPos().y,
				 x2 : other.getSize().width + other.getPos().x, y2 : other.getSize().height + other.getPos().y };



	if (r1.x < r2.x2 && r1.x2 > r2.x && r1.y < r2.y2 && r1.y2 > r2.y)
		return true;
	return false;
}

var Vector2d = function(x,y) {
	this.x = x;
	this.y = y;
}

RectangleComponent.prototype.IntersectDepthVector = function (r1, r2) {

	r1.Width = r1.getComponent("RECTANGLE").size.width;
	r1.Height = r1.getComponent("RECTANGLE").size.height;
	r1.HalfWidth = r1.Width / 2;
	r1.HalfHeight = r1.Height / 2;
	r2.Width = r2.getComponent("RECTANGLE").size.width;
	r2.Height = r2.getComponent("RECTANGLE").size.height;
	r2.HalfWidth = r2.Width / 2;
	r2.HalfHeight = r2.Height / 2;
	r1.X = r1.getPos().x;
	r1.Y = r1.getPos().y;
	r1.Top = r1.Y;
	r1.Left = r1.X;
	r2.X = r2.getPos().x;
	r2.Y = r2.getPos().y;
	r2.Top = r2.Y;
	r2.Left = r2.X;

	// Calculate centers.
  centerA = new Vector2d(r1.Left + r1.HalfWidth, r1.Top + r1.HalfHeight);
  centerB = new Vector2d(r2.Left + r2.HalfWidth, r2.Top + r2.HalfHeight);

  // Calculate current and minimum-non-intersecting distances between centers.
  distanceX = centerA.x - centerB.x;
  distanceY = centerA.y - centerB.y;
  minDistanceX = r1.HalfWidth + r2.HalfWidth;
  minDistanceY = r1.HalfHeight + r2.HalfHeight;

  // If we are not intersecting at all, return (0, 0).
  if (Math.abs(distanceX) >= minDistanceX || Math.abs(distanceY) >= minDistanceY)
    return new Vector2d(0,0);

  // Calculate and return intersection depths.
  depthX = distanceX > 0 ? minDistanceX - distanceX : -minDistanceX - distanceX;
  depthY = distanceY > 0 ? minDistanceY - distanceY : -minDistanceY - distanceY;
  return new Vector2d(depthX, depthY);
}

RectangleComponent.prototype.getSideCollision = function(entity, other)
{
	v = this.IntersectDepthVector(entity, other);
	return v;
	console.log(v);

	if (! (v.x ==0 && v.y ==0) ) {

		absx = Math.abs(v.x);
		absy = Math.abs(v.y);

		// if a collision has happened		
		if (! (v.x ==0 && v.y ==0) ) {
			if (absx > absy) // the shallower impact is the correct one- this is on the y axis
			{
				axis = 'y';
				if (v.y < 0)
					return 'top';
				else
					return 'bottom';
			}
			else // the x axis!
			{
				axis = 'x';
				if (v.x < 0)
					return 'left';
				else
					return 'right';
			}
		}
	}
}



/*
var GetSidesCollided = function(Vector2 sourcePoint, other)  
        {  
            Vector2 centerLocation = new Vector2(targetRect.Center.X, targetRect.Center.Y);  
 
            SideCollided returnVal = SideCollided.None;  
 
            // test left side  
            if (sourcePoint.X > targetRect.Left && sourcePoint.X < centerLocation.X &&  
                sourcePoint.Y > targetRect.Top && sourcePoint.Y < targetRect.Bottom)  
                returnVal = (returnVal | SideCollided.Left);  
 
            // test top side  
            if (sourcePoint.X > targetRect.Left && sourcePoint.X < targetRect.Right &&  
                sourcePoint.Y > targetRect.Top && sourcePoint.Y < centerLocation.Y)  
                returnVal = (returnVal | SideCollided.Top);  
 
            // test right side  
            if (sourcePoint.X > centerLocation.X && sourcePoint.X < targetRect.Right &&  
                sourcePoint.Y > targetRect.Top && sourcePoint.Y < targetRect.Bottom)  
                returnVal = (returnVal | SideCollided.Right);  
 
            // test bottom side  
            if (sourcePoint.X > targetRect.Left && sourcePoint.X < targetRect.Right &&  
                sourcePoint.Y > centerLocation.Y && sourcePoint.Y < targetRect.Bottom)  
                returnVal = (returnVal | SideCollided.Bottom);  
 
     
            return returnVal;  
        } 

*/













RectangleComponent.prototype.ID = "RECTANGLE";

RectangleComponent.prototype.exec = function(self) {

};	