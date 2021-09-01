'use restrict';

/* 
    1.return은 함수를 끝낸다
    2. return은 결과 값을 전달해 준다.
*/

// Void type
function f1(x) {
    console.log(x + 2);
}

let r1 = f1(5);
console.log("r1 : " + r1);

// Return type
function f2(x) {
    return x + 2;
}

let r2 = f2(5);
console.log("r2 : " + r2);

// Block scope - 증괄호 사이에 있는 코드를 의미
let g1 = 10;

{
    console.log("==== Block Scope Inside ====");

    let g2 = 30;
    console.log("g1 : " + g1);
    console.log("g2 : " + g2);

    console.log("============================");
    {
        console.log("==== Nested Block Scope Inside ====");
        
        let g3 = 40;
        console.log("g1 : " + g1);
        console.log("g2 : " + g2);
        console.log("g3 : " + g3);

        console.log("===================================");
    }
    // console.log("g3 : " + g3); << 출력 X
}
console.log("====Block Scope Outside ====");

console.log("g1 : " + g1);
//console.log("g2 : " + g2);

console.log("============================");

let b1;
{
    b1 = 10;
}
console.log("b1 : " + b1);

// anonymous function ( 익명함수 )
console.log("============================");

let f3 = function (x) {
    return x + 2;
}
let r3 = f3(2);
console.log("r3 : " + r3);

console.log("============================");

// arrow function ( 화살표함수 )
let f4 = (x) => {
    return x + 2;
}
let r4 = f4(2);
console.log("r4 : " + r4);


let f5 = (x) => x + 2;
let r5 = f5(2);
console.log("r5 : " + r5);