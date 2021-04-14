class Hippopotamus {

    constructor(name, weight, tusksSize){
        this.name = name;
        this.tusksSize = tusksSize;
        this.weight = weight;
    }

    swim(){
        return this.weight  -=  0.3 ;
    }

    eat(){
        return this.weight  +=  1.0 ;
    }


    toString(){
        return `Name: ${this.name} : weight: ${this.weight } tusksSize: ${this.tusksSize}`  
    }
}

let hippo = new Hippopotamus('thomas', 84, 18)

console.log(hippo.swim())

console.log(hippo.eat())

console.log(hippo.toString())