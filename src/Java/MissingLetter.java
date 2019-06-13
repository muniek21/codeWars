package Java;

import java.util.stream.Stream;

public class MissingLetter {

    public static char findMissingLetter(char[] array)
    {
        for (int i = 0; i < array.length; i++) {
            if ((int) array[i + 1] != (int) array[i] + 1){
                return (char) ((int) array[i] + 1);
            }
        }
        return ' ';
    }
}
