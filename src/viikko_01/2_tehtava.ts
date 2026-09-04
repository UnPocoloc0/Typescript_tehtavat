/*
1. Define interfaces: 
-Circle: { kind: "circle"; radius: number } 
-Rectangle: { kind: "rectangle"; width: number; height: number } 
-Square: { kind: "square"; size: number }
*/
interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Square {
    kind: "square";
    size: number;
}

/* 
2. Create union type: 
-Shape = Circle | Rectangle | Square.

*/
// kind-arvo kertoo, millainen muoto on kyseessä
type Shape = Circle | Rectangle | Square;


/* 
"Ohjelmoijan määrittelemä tyyppivahti"
3. Implement a custom user-defined type guard: 
-Parameter: isCircle(shape: Shape)
-Return type: shape is Circle
-that returns true if shape.kind === "circle".
*/
function isCircle(shape: Shape): shape is Circle {
    if (shape.kind === "circle") {
        return true;
    }
    else {
        return false;
    }
}
/*
4. Implement calculateArea(shape: Shape): number 
-using a switch statement.
-In the default case, assign the shape to a never variable to guarantee exhaustiveness check at compile time.
 */
function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        // Jos muoto ei ole mikään annetuista 
        default:
            const check: never = shape;
            // Annetaan TS:lle varmistus
            return check;

    }
}

// Testaus: 
const circle: Circle = {
    kind: "circle",
    radius: 13,
}

const rectangle: Rectangle = {

    kind: "rectangle",
    width: 13,
    height: 25,
}

const square: Square = {

    kind: "square",
    size: 13.5,
}

console.log(`Ympyra: ${calculateArea(circle)}`);
console.log(`Suorakulmio: ${calculateArea(rectangle)}`);
console.log(`Nelio: ${calculateArea(square)}`);