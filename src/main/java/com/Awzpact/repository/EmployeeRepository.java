package com.Awzpact.repository;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.Awzpact.modal.Employee;

@CrossOrigin(origins = "localhost:8080")
@Repository
public class EmployeeRepository {
	 @Autowired
	   JdbcTemplate template;
	// private final static Logger LOGGER = Logger.getLogger(EmployeeRepository.class.getName());
	   public Boolean addEmployee(Employee employee) {
		   try {
		String AddEmployee ="INSERT INTO `employees` (`Name`, `Password`,`Phone`, `Email`, `Gender`, `Status`) VALUES (?, ?, ?, ?, ?, ?)";
		System.out.print((employee.getName())+" "+(employee.getPhone()) +""+ (employee.getEmail()) +" "+ (employee.getGender() +" "+(employee.getCity_name())));
		  template.update(AddEmployee, (employee.getName()),(employee.getPassword()), (employee.getPhone()), (employee.getEmail()), (employee.getGender()), (employee.getStatus()));
		  String City ="INSERT INTO `city` (`City_name`) VALUES (?)";  
		  template.update(City, (employee.getCity_name()));
		
		  String GetCityId ="SELECT LAST_INSERT_ID()";
		  int CityId= template.queryForObject(GetCityId, Integer.class);
		  String GetEmployee_id ="SELECT MAX(Employee_id) from employees";
		  int  Employeeid= template.queryForObject(GetEmployee_id, Integer.class);
		  String Address ="INSERT INTO `address` (`Address`,`City_id`, `Employee_id`, `Department_id`) VALUES (?,?,?,?)";
		  template.update(Address,employee.getAddress(),CityId,Employeeid,employee.getDepartment_id());
		  return true;
		  }catch(Exception ex) {
			  ex.getMessage();
			  return false;
		  }
		  
		
				  
	   }
	   public List<Employee> showEmployee() {
			  String ShowEmployee ="select * from employees a inner join address b on a.Employee_id = b.Employee_id inner join  city c on b.City_id = c.City_id";
			  List<Employee> employees = template.query(ShowEmployee,new BeanPropertyRowMapper<>(Employee.class));
		        return employees;
		  }
	   public List<Employee> showEnableEmployee() {
			  String ShowEmployee ="select * from employees a inner join address b on a.Employee_id = b.Employee_id inner join  city c on b.City_id = c.City_id WHERE  a.Status = 'enable' ";
			  List<Employee> employees = template.query(ShowEmployee,new BeanPropertyRowMapper<>(Employee.class));
		        return employees;
		  }
	   public List<Employee> showDisableEmployee() {
			  String ShowEmployee ="select * from employees a inner join address b on a.Employee_id = b.Employee_id inner join  city c on b.City_id = c.City_id WHERE  a.Status = 'disable'  ";
			  List<Employee> employees = template.query(ShowEmployee,new BeanPropertyRowMapper<>(Employee.class));
		        return employees;
		  }
	   
	   public int showEnableEmployeeCount() {
			  String ShowEmployee ="select Count(*) from employees a inner join address b on a.Employee_id = b.Employee_id inner join  city c on b.City_id = c.City_id  WHERE  a.Status = 'enable' ";
			  int  enableEmployee= template.queryForObject(ShowEmployee, Integer.class);
		        return enableEmployee;
		  }
	   public int showDisableEmployeeCount() {
			  String ShowEmployee ="select Count(*) from employees a inner join address b on a.Employee_id = b.Employee_id inner join  city c on b.City_id = c.City_id WHERE  a.Status = 'disable' ";
			  int  disableEmployee= template.queryForObject(ShowEmployee, Integer.class);
		        return disableEmployee;
		  }
}
