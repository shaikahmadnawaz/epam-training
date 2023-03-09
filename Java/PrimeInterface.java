@FunctionalInterface
public interface PrimeInterface {
    boolean prime(int n);
}

class PrimeTest{
    public static void main(String[] args) {
        PrimeInterface pl = (int n) -> {
            for(int i=2; i<n; i++){
                if(n%i==0){
                    return false;
                }
            }
            return true;
        };
        System.out.println(pl.prime(4));
    }
}
