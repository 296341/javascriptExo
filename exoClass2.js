class Point {

    constructor(x, y){
        this.y = y
        this.x = x
    }

get Yaxis(){
    return `${this.y}`
}

get Xaxis(){
    return `${this.x}`;
}
    
set Yaxis(y){
    this.y;
}

set Xaxis(x){
    this.x;
 }

}

module.exports = Point;

//let user = new Point(7, 9)

//console.log(user.Xaxis, user.Yaxis)