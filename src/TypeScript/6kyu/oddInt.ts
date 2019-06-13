export const findOdd = (xs: number[]): number => {
    let integersAndCounts = new Map();
    xs.forEach(integer => {
        if (integersAndCounts.has(integer)){
            integersAndCounts.set(integer, integersAndCounts.get(integer) + 1);
        } else {
            integersAndCounts.set(integer, 1);
        }
        integersAndCounts[integer];
    })

    let result: number[] = [];
    for (let [key, value] of integersAndCounts.entries()){
        if ( value % 2 != 0){
            result.push(key);
        }
    }
    return result[0];
};
