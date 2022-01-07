import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;


public class App {

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		boolean active=true;
		BankAcc test= new BankAcc(10.0, "Ryan", "1");
		while (active) {
			System.out.println("What would you like to do? Withdraw, Deposit, Check Account, View transactions, or End activity?");
			String action=scan.next();
			if (action.equals("Withdraw")) {
				test.withdraw();
			}
			else if(action.equals("Deposit")) {
				test.deposit();
			}
			else if(action.equals("Check")){
				test.getAcc();
			}
			else if(action.equals("Transactions")) {
				test.getT();
			}
			else if(action.equals("End")) {
				System.out.println("Thank you for accessing your bank account. See you again!");
				active=false;
			}
			else {
				System.out.println("Action not recognized, try again.");
			}
		}
	}
}
class BankAcc{
	double b;
	String name,id;
	List<String> transactions= new LinkedList<String>();
	
	public BankAcc(double b, String name, String id) {
		this.b=b;
		this.name=name;
		this.id=id;
	}
	public double getB() {
		return b;
	}
	public void getAcc() {
		System.out.println("Name: "+ name + "\n" + "ID: "+ id +"\nBalance: "+ b);
	}
	public void deposit() {
		Scanner scan= new Scanner(System.in);
		System.out.println("How much would you like to deposit?");
		double amt= scan.nextDouble();
		b+=amt;
		System.out.println("New Balance: "+ b);
		transactions.add("Deposit: "+ amt);
	}
	public void withdraw() {
		Scanner scan= new Scanner(System.in);
		System.out.println("How much would you like to withdraw?");
		double amt= scan.nextDouble();
		b-=amt;
		System.out.println("New Balance: "+ b);
		transactions.add("Withdraw: "+ amt);
	}
	public void getT() {
		for(String x:transactions) {
			System.out.println(x);
		}
	}
}

