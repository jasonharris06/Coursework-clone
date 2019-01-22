function Character(name, profession, gender, age, strength, HP, ) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;
    this.printStats = function () {
        console.log(`name: ${this.name},
        profession: ${this.profession},
        gender: ${this.gender},
        age: ${this.age},
        strength: ${this.strength},
        HP: ${this.HP}`)
        this.isAlive = function () {
            if (this.HP > 0) {
                console.log("Character is Alive");

            }
            else
                console.log("You're Dead");
        }
    };

    this.Attack = function (character2) {
        character2.HP -= this.strength;
    }
}

var male = new Character("Lon", "Mage", "M", "23", 100, 999);
var female = new Character("Nala", "assasin", "F", "21", 101, 1000);

male.printStats();
female.printStats();

male.Attack(female);
female.printStats();
female.isAlive();
