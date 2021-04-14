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
   return this.y;
}

set Xaxis(x){
    return this.x;
 }

}

let user = new Point('john', 'antoine')

console.log(user.Yaxis)