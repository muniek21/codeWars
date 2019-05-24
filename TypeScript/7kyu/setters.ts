// https://www.codewars.com/kata/learning-typescript-classes-and-interfaces-setters/train/typescript

declare var ICuboid: {
    new (length: number): ICuboid;
}

interface ICuboid {
    /** Length of the cube */
    length: number;
    /** Surface area of the cube */
    surfaceArea: number;
    /** Volume of the cube */
    volume: number;
}

export class Cube implements ICuboid {
    length: number;
    private _surfaceArea: number;
    private _volume: number;

    constructor(length: number) {
        this.length = length;
    }

    get surfaceArea(): number {
        return 6 * Math.pow(this.length, 2);
    }

    set surfaceArea(value: number) {
        this._surfaceArea = value;
        this.length = Math.sqrt(value / 6);
    }

    get volume(): number {
        return Math.pow(this.length, 3);
    }

    set volume(value: number) {
        this._volume = value;
        this.length = Math.pow(value, 1 / 3);
    }
}