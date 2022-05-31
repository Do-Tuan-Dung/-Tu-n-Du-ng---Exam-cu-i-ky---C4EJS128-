//Bài 1:
let loNum = prompt("Số bé");
let hiNum = prompt("Số lớn");

console.log(`Đang tìm các số nguyên tố giữa ${loNum} và ${hiNum}...`);
document.getElementsByClassName('js-input-confirm').innerHTML = `Đang tìm các số nguyên tố giữa ${loNum} và ${hiNum}...`;

for (let a = loNum; a <= hiNum; a++) {
    let dummy = 0;
    for (let b = 2; b < a; b++) {
        if (a % b == 0) {
            dummy = 1;
            break;
        }
    }
    if (a > 1 && dummy == 0) {
        console.log(a);
        document.getElementsByClassName('js-output').innerHTML = a;
    }
}