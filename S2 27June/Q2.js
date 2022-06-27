
// Take two numbers and find the quotient and remainder.
function quo_rem(a, b) {
    if (a != 0 && b != 0) {
        let num1 = Math.floor(a / b)
        let num2 = a % b
        return (num1 + "," + num2)
    }
    else {
        return (-1 + "," + -1)
    }
}
console.log(quo_rem(0, 0))


exports.quo_rem = quo_rem