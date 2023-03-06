import java.util.HashSet;
import java.util.Scanner;

public class UniqueChar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the string: ");
        String str = sc.nextLine();

        char[] charArr = str.toCharArray();

        HashSet<Character> hs = new HashSet<>();
        for(char i: charArr){
            hs.add(i);
        }

        System.out.print(hs.size());
    }
}
