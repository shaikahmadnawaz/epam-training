@FunctionalInterface
public interface LambdaExpressionDemo {
    int add(int a, int b);
}

class Add{
    public static void main(String[] args) {
        LambdaExpressionDemo obj = (int a, int b) -> a + b;
        System.out.println(obj.add(1, 3));
    }
}

