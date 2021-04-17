class Point {

    constructor(x, y){
        this.y = y
        this.x = x
    }

getY(){
    return `${this.y}`;
}

getX(){
    return `${this.x}`;
}
    
setY(value){
    this.y = value;
}

setX(value){
    this.x = value;
 }

}


module.exports = Point;

//let pointOne = new Point(7, 9)

//console.log(pointOne.getY, point.getX)