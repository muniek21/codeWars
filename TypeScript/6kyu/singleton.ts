// https://www.codewars.com/kata/591445324670baed3200008d/solutions/typescript
export class SingletonCounter {
    private static COUNTER_INSTANCE;
    private counter: number = 0;

    private constructor(){}

    static getInstance(): SingletonCounter {
        return SingletonCounter.COUNTER_INSTANCE || (SingletonCounter.COUNTER_INSTANCE = new SingletonCounter());
    }

    inc(): number {
        return ++SingletonCounter.COUNTER_INSTANCE.counter;
    }
}
