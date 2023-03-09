@FunctionalInterface
public interface EvenLambda {
    boolean even(int n);
}

class EvenDemo{
    public static void main(String[] args) {
        EvenLambda el = (int n) -> n % 2 == 0;
        System.out.println(el.even(2));
    }
}
