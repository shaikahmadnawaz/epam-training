interface InterfaceDemo {
    final int a = 10;
    static void run(){
        System.out.println("This is running");
    }
}

class Main{
    public static void main(String[] args) {
        InterfaceDemo.run();
    }
}
