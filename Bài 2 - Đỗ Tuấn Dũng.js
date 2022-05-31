//Bài 2:
function numberOneTriangle(length) {
    let triangle = "";
    for (let c = 1; c <= length; c++) {
        for (let d = 1; d <= c; d++) {
            triangle += '*'
        }
        triangle += '\n';
    }
}

numberOneTriangle(8);
numberOneTriangle(10);
numberOneTriangle(3);