//Bài 2:
let triangle = "";

function numberOneTriangle(length) {
    for (let c = 1; c <= length; c++) {
        for (let d = 1; d <= c; d++) {
            triangle += '*'
        }
        triangle += '\n';
    }
}

numberOneTriangle(8);
console.log(triangle);