'use strict'

function Person (name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
}

Person.prototype.move = function () {
    console.log(this.name + "움직임");
}

let seokjun = new Person("seokjun", 177, 100);
seokjun.move();

function PoliceOfficer (name, height, weight) {
    Person.call(this, name, height, weight);
}

PoliceOfficer.prototype = new Person();
PoliceOfficer.prototype.arrest = function () {
    console.log("체포함");
}

let jun = new PoliceOfficer("jun", 177, 100);
jun.move();
jun.arrest();


/* class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    move() {
        console.log(this.name + "움직임");
    }
}

let seokjun = new Person("seokjun", 177, 100);
seokjun.move(); */

