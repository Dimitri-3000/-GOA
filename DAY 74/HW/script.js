
class animals{
    constructor(name, age, height){
        this.saxeli = name;
        this.asaki = age;
        this.simagle = height;

    }

    xnieroba(){
        console.log(this.asaki)
    }

    get dasaxeleba(){
        console.log(this.saxeli)
    }

    static classname = "es aris cxovelebis klasi"

}

class tiger extends animals{
    constructor(name, age, height, number_of_stripes){
        super(name, age, height);
        this.zolebi = number_of_stripes;
    }

    stripes(){
        console.log(this.zolebi);
    }

    asaki_da_zolebi(){
        console.log(this.asaki + this.zolebi);
    }
}

let cxoveli = new animals("lomi", 6, 1.1)

let vefxvi = new tiger("vefxvi", 5, 0.9, 56)

vefxvi.asaki_da_zolebi();
vefxvi.stripes();
cxoveli.dasaxeleba;
cxoveli.classname;