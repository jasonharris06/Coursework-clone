function Programmers (name, possition, age, favLanguage){
    this.name = name;
    this.possition = possition;
    this.age = age;
    this.favLanguage = favLanguage;
    // this.printProgrammer = function(){
    //     console.log(`name: ${this.name},
    //     possition: ${this.possition},
    //     age: ${this.age},
    //     favorite Language: ${this.favLanguage}
    //     `)
    // }
}

Programmers.prototype.printProgrammer = function(){
    console.log(`name: ${this.name},
    possition: ${this.possition},
    age: ${this.age},
    favorite Language: ${this.favLanguage}
    `)
}
var bob = new Programmers("Jason Harris", "CTO", 30, "all")
bob.printProgrammer();
