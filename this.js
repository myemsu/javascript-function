'use strict'

let person = {
    height: 177,
    weight: 100,
    name: "서크준",
    move: function () {
        console.log(this.name + "움직엿");
    }
};

person.move();