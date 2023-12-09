
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


//Example
class Animal {
  constructor(name, legCount,speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  speak(){
    console.log("hi There", this.speaks)
  }
  static mytype() {
    console.log("Animal");
  }
}
 let dog = new Animal('dog', 4,"Bow bow");//create function
 let cat = new Animal('cat', 2,"meow");
dog.speak(); // call functopn from obj
cat.speak();
Animal.mytype(); //statc methid called using call and not using objects
//output
// hi There Bow bow
// hi There meow


//static