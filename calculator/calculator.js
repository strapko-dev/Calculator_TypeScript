import Math from "../math/math";
const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/'
};
export default function calculate(a, b, operation) {
    let result = 0;
    let math = new Math();
    switch (operation) {
        case OPERATIONS.sum:
            result = math.sum(a, b);
            break;
        case OPERATIONS.substract:
            result = math.substract(a, b);
            break;
        case OPERATIONS.multiply:
            result = math.multiply(a, b);
            break;
        case OPERATIONS.divison:
            result = math.divison(a, b);
            break;
    }
    return result;
}
