export abstract class Animal {
    /** @param {number} value The length of the animal in parrots. */
    protected constructor(public value: number) {}

    abstract convertTo (someone: Animal): number;
}

export class Boa extends Animal {
    constructor(){
        super(38);
    }
    convertTo(someone: Animal): number {
        return 0;
    }
}

export class Parrot extends Animal {
    constructor(){
        super(1);
    }

    convertTo(someone: Animal): number {
        return 0;
    }
}

export class Monkey extends Animal {
    constructor(){
        super(7.6)
    };

    convertTo(someone: Animal): number {
        return 0;
    }
}
