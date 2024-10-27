class eight{
    constructor(one){
        this.one = one;
    }

    a(){
        console.log("i am divisble by 1")
    }
}

class four1 extends eight{
    constructor(erti){
        super(erti);
        
    }

    b(){
        super.a();
        console.log("and im an even number");
    }
}

class four2 extends eight{
    constructor(o){
        super(o);
    }

    c(){
        super.a();
        console.log("and im not an odd number");
    }
}

class two1 extends four1{
    constructor(l){
        super(l);
    }

    d(){
        super.b();
        console.log("also i am a prime number")
    }

}

class two2 extends four1{
    constructor(m){
        super(m);
    }

    d(){
        super.b();
        console.log("also i am not a composite number")
    }

}

class two3 extends four2{
    constructor(m){
        super(m);
    }

    d(){
        super.c();
        console.log("also im the only even prime number")
    }

}

class two4 extends four2{
    constructor(m){
        super(m);
    }

    d(){
        super.c();
        console.log("also im not an odd prime number")
    }

}




let tw = new two3();
tw.d();