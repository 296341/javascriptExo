const Point = require("./exoClass2");

var points = new Point(8, 4);

class Circle extends Point{

    constructor(point1, point2, raduis){
        super()
        this.point1 = point1
        this.point2 = point2;
        this.raduis = raduis;
    }

  areaCircle (){
    return Math.PI * this.raduis * this.raduis; 
  }

  containPoint(){
    const diffx = points.Xaxis - this.point1
    const diffy = points.Yaxis - this.point2

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
    return `x1: ${this.point1} y1: ${this.point2 } raduis: ${this.raduis}`  
}
}



let c = new Circle(3,2,7)

console.log(`${c.containPoint()}`)

console.log(`the area is : ${c.areaCircle()}`)

console.log(c.toString())