import java.util.Scanner;

public class EvenROdd {
  static int rem;
  static int sum = 0;

  public static void even(int n) {
    if (n % 2 == 0) {
      sum += n;
    }

    System.out.println(sum);
  }

  public static void odd(int n) {
    if (n % 2 != 0) {
      sum += n;
    }
    System.out.println(sum);
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the number: ");
    int num = sc.nextInt();
    System.out.print("Enter the even/odd: ");
    String op = sc.nextLine();

    while (num > 0) {
      rem = num % 10;
      num = num / 10;
    }

    if (rem > 0 && op.equals("even")) {
      even(rem);
    } else if (rem > 0 && op.equals("odd")) {
      odd(rem);
    }
    sc.close();
  }
}
