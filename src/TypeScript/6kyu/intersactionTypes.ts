// https://www.codewars.com/kata/learning-typescript-advanced-types-intersection-types/train/typescript

export function intersect<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let property in first){
        if (second.hasOwnProperty(property)){
            (<any>result)[property] = (<any>first[property]);
        }
    }
    return result;
}
