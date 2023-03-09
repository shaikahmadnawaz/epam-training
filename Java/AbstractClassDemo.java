abstract class AbstractClassDemo {
    abstract void add();
}

class ConcreteDemo extends AbstractClassDemo{
    void add(){
        System.out.println("add method called");
    }
    public static void main(String[] args) {
        AbstractClassDemo obj = new ConcreteDemo();
        obj.add();
    }
}
