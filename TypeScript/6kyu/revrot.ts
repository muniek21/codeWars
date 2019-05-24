export class G964 {
    public static revrot(str, sz) {
        // your code
        if (sz <= 0 || str.empty() || sz > str.length){
            return "";
        }

        let revrotedChunks: string[] = [];

        divideString(str,sz).forEach(
            chunk => {
                if (chunk.length < sz){
                    revrotedChunks.push(chunk);
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
}

function divideString(str: string, sz: number): string[]{
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

function isSumOfCubes(chunk: string): boolean {
    let sum: number = 0;
   Array.from(chunk).forEach(
       character => sum+= Math.pow(parseInt(character), 2)
   );
   console.log(Array.from(chunk));
   console.log(sum);
   return sum % 2 == 0;
}

function reverseChunk(chunk: string): string{
    return "";
}

function rotateChunkToTheLeft(chunk: string): string {
    return "";
}
