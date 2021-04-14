class Hippopotamus {

    constructor(name, weight, tusksSize){
        this.name = name;
        this.tusksSize = tusksSize;
        this.weight = weight;
    }

    swim(){
        return this.weight-0.3 ;
    }

    eat(){
        return this.weight+1.0 ;
    }


    str(){
        return "Name: " + str(this.name) + ", weight: " + str(this.weight) + ", tusksSize: " + str(this.tusksSize) + "."
    }
}