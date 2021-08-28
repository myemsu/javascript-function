'use restrict';

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