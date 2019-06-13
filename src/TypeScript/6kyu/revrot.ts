export class G964 {

    public static revrot(str, sz) {
        if (sz <= 0 || str === "" || sz > str.length) {
            return "";
        }

        let stringChunks: string[] = divideStringIntoChunksOfGivenSize(str, sz);
        let revortedString: string = revrotString(stringChunks, sz);

        return revortedString;
    }
}

function divideStringIntoChunksOfGivenSize(str: string, sz: number): string[]{
    let start: number = 0;
    let end: number = sz;
    let stringLength: number = str.length;
    let chunks: string[] = [];

    while(start <= stringLength){
        chunks.push(str.substring(start, end));
        start = end;
        end = end + sz;
    }
    return chunks;
}

function revrotString(stringChunks: string[], sz: number): string {
    let revrotedChunks: string[] = [];

    stringChunks.forEach(
        chunk => {
            if (chunk.length < sz){
                return;
            } else {
                if (isSumOfCubes(chunk)){
                    revrotedChunks.push(reverseChunk(chunk));
                } else {
                    revrotedChunks.push(rotateChunkToTheLeft(chunk));
                }
            }
        }
    )

    return revrotedChunks.join("");
}

function isSumOfCubes(chunk: string): boolean {
    let sum: number = 0;
    let chunkCharacters = chunk.split("");
    chunkCharacters.forEach(
        character =>
            sum+= Math.pow(parseInt(character), 2));
    return sum % 2 == 0;
}

function reverseChunk(chunk: string): string{
    let chunkCharacters: string[] = chunk.split("");
    let reveresedChunkCharacters: string[] = [];
    for (let i = chunkCharacters.length - 1; i >= 0; i--){
        reveresedChunkCharacters.push(chunkCharacters[i]);
    }

    return reveresedChunkCharacters.join("");
}

function rotateChunkToTheLeft(chunk: string): string {
    let firstCharacter = chunk.charAt(0);
    let remainingCharacetsr = chunk.replace(firstCharacter, "");
    return remainingCharacetsr.concat( firstCharacter);
}
