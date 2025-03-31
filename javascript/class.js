class Animal{
    constructor(name,legcount,speaks){
        this.name=name;  //here this keyword means newly object being created
        this.legcount=legcount;
        this.speaks=speaks;
    }
    static myType(){
        console.log("Animal")
    }
    speak(){
        console.log("hii there " + this.speaks);
    }
}
console.log(Animal.myType()); //static method can be directly called on the class
let dog=new Animal("dog",4,"bhow bhow"); //created object
let cat=new Animal("cat",4,"meow meow");
cat.speak(); //here speak function has been called on the object of the class 