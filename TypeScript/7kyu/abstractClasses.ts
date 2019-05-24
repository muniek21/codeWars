// https://www.codewars.com/kata/learning-typescript-classes-and-interfaces-abstract-classes/train/typescript
export abstract class Animal {
    /** @param {number} value The length of the animal in parrots. */
    value: number;
    protected constructor(value: number) {
        this.value = value;
    }

    convertTo (someone: Animal): number {
        return this.value / someone.value

    };
}

export class Boa extends Animal {
    constructor(){
        super(38);
    }
}

export class Parrot extends Animal {
    constructor(){
        super(1);
    }
}

export class Monkey extends Animal {
    constructor(){
        super(7.6)
    };
}
