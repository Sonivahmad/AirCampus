// Take an integer input and print 'YES' if the integer is a mars number, else print 'NO'.
function marsNumber(n) {
    let counter = 0;

    while (n > 9) {

        let sum = 0;
        while (n != 0) {
            let a = n % 10;
            sum = sum + a;
            n = Math.floor(n / 10);
        }
        counter++;
        n = sum;
    }
    if (counter % 2 == 0 && counter != 0) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(marsNumber(145));
exports.marsNumber = marsNumber