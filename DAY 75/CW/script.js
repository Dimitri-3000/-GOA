
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;

    }

    get p(){
        let a = this.width + this.height
        return 2*a
    }
}

let rec = new Rectangle(3,2)

console.log(rec.p);



class Animal{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    a(){
        console.log(this.name, this.age, this.height)
    }
}

class mammal extends Animal{
    constructor(saxeli, asaki, simagle, gender){
        super(saxeli, asaki, simagle);
        this.gender = gender;
    }

    a(){
        super.a() 
        console.log(this.gender)
    }
}

class dog extends mammal{
    constructor(name, age, height, gender, color){
        super(name, age, height, gender);
        this.color = color;
    }

    a(){
        super.a();
        console.log(this.color)
    }

}

const doggy = new dog("omara", 7, 0.7, "male", "white");

doggy.a();

