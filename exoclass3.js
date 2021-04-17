const Point = require("./exoClass2");

class Circle extends Point{

    constructor(point, raduis){
        super()
        this.point = point;
        this.raduis = raduis;
    }

  areaCircle (){
    return Math.PI * this.raduis * this.raduis; 
  }

  containPoint(p){
    const diffx = this.point.getX() - p.getX();
    const diffy = this.point.getY() - p.getY();

    console.log(`diffy :${diffy}`)
    console.log(`diffx :${diffx}`)

    
    const longueur = Math.sqrt((diffx * diffx)+(diffy * diffy))
    console.log(`longueur : ${longueur}`)

    if(longueur<= this.raduis && longueur >= 0){
        console.log('true')
    } else {
        console.log('false')
    }
  }

  toString(){
    return `x1: ${this.point.getX()} y1: ${this.point.getY() } raduis: ${this.raduis}`  
}
}



let ppoint = new Point(7, 9);
ppoint.setX(8);

let pointOne = new Point(7, 9);
let pointTwo = new Point(5, 6);

let c = new Circle(pointOne,7);

console.log(`${c.containPoint(pointTwo)}`)

console.log(`the area is : ${c.areaCircle()}`)

console.log(c.toString())