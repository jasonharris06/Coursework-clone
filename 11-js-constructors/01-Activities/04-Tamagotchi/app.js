function DigitalPal(){
    
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function(){
        if(this.hungry === true){
            this.hungry = false;
            console.log("That was yummy");
        }
        else
        console.log("No Thanks");
    };
    this.sleep = function(){
        if(this.sleepy === true){
            this.sleepy = false;
            increaseAge();
            console.log("Zzzzzz");
        }
        else
        console.log("No way! I'm not tired");
    };
    this.play = function(){
        if(this.play === true){
            this.play = false;
            console.log("Yay, Let's Play!");
        }
        else
        console.log("Not right now. Later?");
    };
    this.increaseAge = function(){
        this.age ++;
            console.log("Happy Birthday to me! I am"+ this.age + "old!");
    }
      
}
var dog = new DigitalPal( true, true, true, 1);
dog.outside = false;
dog.bark = function(){
    console.log("Woof Woof");
}

dog.sleep();
