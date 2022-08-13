import java.util.Scanner;

/**
 * Baslangic
 */
public class Baslangic {

    public static void main(String[] args) {
        
        int mat,fizik,kimya,tarih,müzik;

        Scanner input = new Scanner(System.in);

        System.out.println("Mat notunu giriniz.");
        mat = input.nextInt();
      

        System.out.println("Fizik notunu giriniz.");
        fizik = input.nextInt();
       

        System.out.println("Kimya notunu giriniz.");
        kimya = input.nextInt();
        

        System.out.println("Tarih notunu giriniz.");
        tarih = input.nextInt();
       

        System.out.println("Müzik notunu giriniz.");
        müzik = input.nextInt();

        float ortalama = (mat + fizik + kimya + tarih + müzik) / 5;
        System.out.println("Ortalamanız: " + ortalama);
        System.out.println(ortalama > 60 ? "Sınıfı Geçti" : "Sınıfta Kaldı");
         

        



    }

}

