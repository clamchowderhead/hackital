package jdbcdemo;
import java.sql.*;

public class Driver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			//1. Get a connection to the database
			Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/demo", "root", "1CHEESEcake1!");
			
			//2. Create a statement
			Statement myStmt = myConn.createStatement();
			
			//3. Execute SQL query
			ResultSet myRs =myStmt.executeQuery("select * from employee");
			
			//4. Process the result set
			while (myRs.next()) {
				System.out.println(myRs.getString("name"));
			}
			
		}
		catch (Exception exc) {
			exc.printStackTrace();
			
		}

	}

}
