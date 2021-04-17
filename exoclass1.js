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

    fight(hippopotamus){
        if (this.tusksSize > hippopotamus.tusksSize){
            console.log(`${this.name} is the winner`);
        } else {
            console.log(`${hippopotamus.name} is the winner`);
        }
    }

    toString(){
        return `Name: ${this.name} : weight: ${this.weight } tusksSize: ${this.tusksSize}`  
    }
}

let hippoOne = new Hippopotamus('thomas', 84, 18);

let hippoTwo = new Hippopotamus('paul', 84, 20);

console.log(hippoOne.swim());

console.log(hippoOne.eat());

hippoOne.fight(hippoTwo);

console.log(hippo.toString())