import { calculate } from "../calculator/calculator";
const $numberA = document.querySelector('.js-num-a');
const $numberB = document.querySelector('.js-num-b');
const $select = document.querySelector('.js-select');
const $buutonResult = document.querySelector('.js-button-result');
const $output = document.querySelector('.js-output');
$buutonResult === null || $buutonResult === void 0 ? void 0 : $buutonResult.addEventListener('click', function () {
    const a = +$numberA.value;
    const b = +$numberB.value;
    const operation = $select.value;
    const result = calculate(a, b, operation);
    console.log(result);
});
