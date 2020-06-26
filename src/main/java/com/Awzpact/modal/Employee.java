package com.Awzpact.modal;
import java.util.logging.LogManager;
import java.util.logging.Logger;

public class Employee {
	public int Employee_id;
	public String Name;
	public String Password;
	public String Phone;
	public String Email;
	public String Gender;
	public String Status;
	public String City_name ;
	public String Address;
	 public String Department_id;
	 public Employee() {
		 
	 }
	// private final static Logger LOGGER = Logger.getLogger(Employee.class.getName());
	

	
	 
	 public Employee(int Employee_id,String Password, String Name, String Phone, String Email, String Gender, String Status, String City_name,
				String Address,String Department_id) {

			this.Employee_id = Employee_id;
			this.Name = Name;
		 this.Password = Password;
			this.Phone = Phone;
			this.Email = Email;
			this.Gender = Gender;
			this.Status = Status;
			this.City_name = City_name;
			this.Address = Address;
			this.Department_id =Department_id;
			
		}
	public int getEmployee_id() {
		return Employee_id;
	}
	public void setEmployee_id(int Employee_id) {
		this.Employee_id = Employee_id;
	}
	public String getName() {
		return Name;
	}


	public void setName(String Name) {
		this.Name = Name;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getPhone() {
		return Phone;
	}
	public void setPhone(String Phone) {
		this.Phone = Phone;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String Email) {
		this.Email = Email;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String Gender) {
		this.Gender = Gender;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String Status) {
		this.Status = Status;
	}
	public String getCity_name() {
		return City_name;
	}
	public void setCity_name(String City_name) {
		this.City_name = City_name;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String Address) {
		this.Address = Address;
	}  
	 
	public String getDepartment_id() {
		return Department_id;
	}

	public void setDepartment_id(String Department_id) {
		this.Department_id = Department_id;
	}

	@Override
	public String toString() {
		return "Employee [id=" + Employee_id + ", Name=" + Name + ", Phone=" + Phone + ", Email=" + Email + ", Gender=" + Gender
				+ ", Status=" + Status + ", City_name=" + City_name + ", Address=" + Address + "]";
	}   
}
