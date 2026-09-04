/*
1. Define interfaces: - Circle: { kind: "circle"; radius: number } - Rectangle: { kind: "rectangle"; width: number; height: number } - Square: { kind: "square"; size: number }
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
2. Create union type Shape = Circle | Rectangle | Square.

*/
// kind-arvo kertoo, millainen muoto on kyseessä
type Shape = Circle | Rectangle | Square;


/* 
3. Implement a custom user - defined type guard isCircle(shape: Shape): shape is Circle that returns true if shape.kind === "circle".
*/

/*
4. Implement calculateArea(shape: Shape): number using a switch statement.In the default case, assign the shape to a never variable to guarantee exhaustiveness check at compile time.
 */