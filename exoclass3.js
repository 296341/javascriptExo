const Point = require("./exoClass2");

var points = new Point(6, 7);

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
    let diffx = points.Xaxis - this.point1
    let diffy = points.Yaxis - this.point2

    console.log(`diffy :${diffy}`)
    console.log(`diffx :${diffx}`)

    
    let longueur = Math.sqrt((diffx * diffx)+(diffy * diffy))
    console.log(`longueur : ${longueur}`)

    if(longueur<= this.raduis && longueur >= 0){
        console.log('true')
    } else {
        console.log('false')
    }
  }
}



let c = new Circle(1,2,7)

console.log(c.containPoint())

console.log(`the area is : ${c.areaCircle()}`)