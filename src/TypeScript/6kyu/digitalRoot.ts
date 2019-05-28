// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/typescript
export const digitalRoot = (n:number):number => {
    return calculateDigitalRoot(transformIntoDigits(n));
};

function calculateDigitalRoot(digits: number[]): number{
    let sumOfDigits: number[] = transformIntoDigits(calculateSumOfDigits(digits));
    return sumOfDigits.length == 1 ? sumOfDigits[0] : calculateDigitalRoot(sumOfDigits);
}

function transformIntoDigits(n: number): number[]{
    return n.toString().split("").map(digit => parseInt(digit));
}

function calculateSumOfDigits(digits: number[]): number{
    let sum = 0;
    digits.forEach(digit => sum += digit);
    return sum;
}