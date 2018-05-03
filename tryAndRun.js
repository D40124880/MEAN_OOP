http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js

$(document).ready(function(){
    function Ninja(name){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;
        this.sayName = function(){
            console.log("My name is: " + this.name);
        }
        this.showStats = function(){
            console.log("Name: " + this.name + "\nHealth: " + this.health + "\nSpeed: " + speed + "\nStrength: " + strength);
        }
        this.drinkSake = function(){
            this.health += 10;
            console.log("Health is now: " + this.health);
        }
        this.punch = function(person){
            if(this instanceof Ninja == true){
            person.health -= 5;
            console.log(person.name + " was punched by " + this.name + " and lost 5 Health!")
            }
        }
        this.kick = function(person){
            if(this instanceof Ninja == true){
            person.health -= 10;
            console.log(person.name + " was kicked by " + this.name + " and lost 10 Health!")
            }
        }

    }
    var ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.showStats();

    var blueNinja = new Ninja("Goemon");
    var redNinja = new Ninja("Bill Gates");
    redNinja.punch(blueNinja);
    blueNinja.kick(redNinja);
    redNinja.showStats();
    blueNinja.showStats();
})