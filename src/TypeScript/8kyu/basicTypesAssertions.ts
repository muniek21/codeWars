// https://www.codewars.com/kata/learning-typescript-basic-types-type-assertions/train/typescript
export class SuccessServerResult {
    constructor (public httpCode: number, public resultObject:Object) {}
}

export class ErrorServerResult {
    constructor (public httpCode: number, public message:string) {}
}

export function getResult(result: any) {
    if (result.httpCode === 200) {
        // Returning resultObject if everything is OK
        return result.resultObject as SuccessServerResult;
    } else {
        // Returning result.message in case of error
        // FIXME: help TypeScript Compiler to understand that result here
        // is the instance of ErrorServerResult...
        return result.message as ErrorServerResult;
    }
}