// https://www.codewars.com/kata/learning-typescript-classes-and-interfaces-getters/train/typescript
export class Cuboid {
    length: number;
    width: number;
    height: number;
    private _surfaceArea: number;
    private _volume: number;

    constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get volume(): number {
        return this.height * this.length * this.width;
    }

    get surfaceArea(): number {
        return 2 * this.length * this.width + 2 * this.width * this.height + 2 * this.height * this.length;
    }

}

export class Cube extends Cuboid {

    constructor(length: number) {
        super(length, length, length);
    }
}
