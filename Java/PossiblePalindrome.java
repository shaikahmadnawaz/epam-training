import java.util.Scanner;

public class PossiblePalindrome {
  static int rem;
  static int sum = 0;
  static int len = 0;

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the number: ");
    int n = sc.nextInt();
    int temp = n;
    while (n > 0) {
      rem = n % 10;
      len++;
      sum = (sum * 10) + rem;
      n = n / 10;
    }
    if (sum == temp) {
      System.out.println("Is palindrome");
    } else {
      System.out.println("Is not palindrome");
    }
    System.out.println(len);
    sc.close();
  }
}
