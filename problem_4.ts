



type Shape = Circle | Rectangle;

interface Circle {
    shape: "circle";
    radius: number;
}

interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
}

function calculateShapeArea(shape: Shape): number {
    if ("radius" in shape) {
        
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
        
    } else if ("width" in shape) {
        
        return shape.width * shape.height;
    }
    return 0;
}



// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea);


// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(rectangleArea);
