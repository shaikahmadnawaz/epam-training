interface DefaultDemo {
    default void run(){
        System.out.println("I am running");
    }
}

class MainDemo implements DefaultDemo{
    public static void main(String[] args) {
        MainDemo o = new MainDemo();
        o.run();
    }
}
