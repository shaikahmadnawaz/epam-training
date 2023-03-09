// create two fi 1. si, 2. ci and write lambda exp to calc them

@FunctionalInterface
public interface SimpleInterest {
    int si(int p, int t, int r);
}


class InterestDemo{
    public static void main(String[] args) {
        SimpleInterest obj1 = (int p, int t, int r) -> ((p*t*r)/100);
//        CompoundInerest obj2 = (int p, int r, int t) -> p*Math.pow(1+(double)r/100, t)-p;
        System.out.println(obj1.si(10, 8, 7));
    }
}

