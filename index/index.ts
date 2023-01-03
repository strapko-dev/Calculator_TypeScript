import calculate from "../calculator/calculator"

const $numberA = <HTMLInputElement>document.querySelector('.js-num-a')
const $numberB = <HTMLInputElement>document.querySelector('.js-num-b')
const $select = <HTMLSelectElement>document.querySelector('.js-select')
const $buutonResult = <HTMLButtonElement>document.querySelector('.js-button-result')
const $output = <HTMLParagraphElement>document.querySelector('.js-output')

$buutonResult?.addEventListener('click', function() {
    const a: number = +$numberA.value
    const b: number = +$numberB.value
    const operation: string = $select.value

    const result: number = calculate(a, b, operation)
    
    console.log(result);
    
})