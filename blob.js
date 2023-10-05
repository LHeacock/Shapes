const squareButton = document.getElementById("cube");
const sphereButton = document.getElementById("sphere");
const prismButton = document.getElementById("prism");
const pyramidButton = document.getElementById("pyramid");
const containter = document.getElementById("board4shapes");

const rectangeInput = document.getElementById("Rectanglewidth");
const rectangeInput2 = document.getElementById("Rectangleheight");
const radiusInput = document.getElementById("circleInput");
const squareInput = document.getElementById("squareInput");
const triangleInput = document.getElementById("triangleInput");


const shapeName = document.getElementById("shapeName");
const shapeHeight = document.getElementById("shapeHeight");
const shapeWidth = document.getElementById("shapeWidth");
const shapeRadius = document.getElementById("shapeRadius");
const shapeArea = document.getElementById("shapeArea");
const shapePerimeter = document.getElementById("shapePerimeter");

const shapes = [];


class Shape {

    constructor(width, height, radius, name) {
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.name = name;
        this.getArea();
        this.getPerimiter();

    }

    getPerimiter() {
        switch (this.name) {
            case "cirlce":
                this.perimeter = 2 * Math.PI * this.radius
                break;
            case "triangle":
                this.perimeter = 2 * this.height + Math.sqrt(2) * this.height
                break;
            case "rectangle":
                this.perimeter = 2(this.width + this.height);
                break;
            case "square":
                this.perimeter = (this.width + this.width);
                break;
            default:
                this.perimeter = 0;
                break;
        }
    }

    getArea() {
        switch (this.name) {
            case "circle":
                this.area = Math.PI * (Math.pow(this.radius, 2));
                break;
            case "triangle":
                this.area = (0.5 * this.height * this.height);
                break;
            case "square":
                this.area = (this.width * this.width);
                break;
            case "rectangle":
                this.area = this.width * this.height;
            default:
                this.area = 0;
                break;
        }
    }

    placeOnBoard(div) {
        div.addEventListener("dblclick", (e)=>{
            this.removeFromBoard(e.target);
        })
        div.addEventListener("click", (e)=>{
            this.fillInfo(e.target);
        })
        containter.appendChild(div);
    }

    removeFromBoard(div)
    {
        div.style = "";
    }

    fillInfo(){
        shapeName.value = this.name;
        shapeWidth.value = this.width;
        shapeHeight.value = this.height;
        shapeRadius.value = this.radius;
        shapeArea.value = this.area;
        shapePerimeter.value = this.perimeter;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(0, 0, radius, "circle");
        let div = document.createElement("div");
        div.className = 'sphere';
        div.style.height = radius + 'px';
        div.style.width = radius + 'px';
        this.placeOnBoard(div);
    }
}

class Rectange extends Shape {
    constructor(width, height) {
        super(width, height, 0, "square");
        let div = document.createElement("div");
        div.className = "prism";
        div.style.height = height + "px";
        div.style.width = width + "px";
        this.placeOnBoard(div);
    }
}



class Square extends Shape {
    constructor(sides) {
        super(sides,sides,0,"square");
        let div = document.createElement("div");
        div.className = "cube";
        div.style.height = sides + "px";
        div.style.width = sides + "px";
        this.placeOnBoard(div);
    }
}
class Triangle extends Shape {
    constructor(height) {
        super(height,height,0,"triangle");
        let div = document.createElement("div");
        div.className = "pyramid";
        div.style.height = height + "px";
        div.style.width = height + "px";
        this.placeOnBoard(div);
    }
}



sphereButton.addEventListener("click", function newSphere() {
    let radius = radiusInput.value
    new Circle(radius);
});

squareButton.addEventListener("click", function newSquare() {
    let sides = squareInput.value;
    new Square(sides);
})

prismButton.addEventListener("click", function newRectangle() {
    let w = rectangeInput.value
    let h = rectangeInput2.value
    new Rectange(h, w);
})

pyramidButton.addEventListener("click", function newTriangle() {
    let height = triangleInput.value;
    new Triangle(height);
})

// this.div.addEventListener("dblclick", () => {
//     this.antiShape();
//     ////x.innterHTML = Name: " ";

// });