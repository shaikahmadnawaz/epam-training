class Demo {
  String name;

  void display(String name) {
    System.out.println("This is my name: " + name);
  }

  public static void main(String[] args) {
    Demo demo = new Demo();
    demo.display("Nawaz");
  }
}