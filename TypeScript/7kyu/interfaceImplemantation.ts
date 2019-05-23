// https://www.codewars.com/kata/learning-typescript-classes-and-interfaces-implement-interface-methods/train/typescript

interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
    size: number;

    constructor(size: number){
        this.size = size;
    }

    area = function(): number {
        return Math.pow(this.size, 2);
    }

    perimeter = function (): number {
        return 4 * this.size;
    }

}

export class Circle implements IGeometricFigure {
    r: number;

    constructor(r: number){
        this.r = r;
    }

    area = function(): number{
        return Math.PI * Math.pow(this.r, 2);
    };
    perimeter = function(): number{
        return 2 * Math.PI * this.r;
    };
}
