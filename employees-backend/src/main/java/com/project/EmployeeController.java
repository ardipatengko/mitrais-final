package com.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/employeeAll")
	public Iterable<Employee> getEmployeeAll() {
		return employeeRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:3000", methods=RequestMethod.POST)
    @RequestMapping(value="/saveEmployee", method=RequestMethod.POST, consumes="application/json")
	public void saveEmployee(@RequestBody Employee employee) {
		employeeRepository.save(employee);
		//System.out.println(employee.getFirstName());
		//return employee;
	}
	
	@CrossOrigin(origins = "http://localhost:3000", methods=RequestMethod.PUT)
    @RequestMapping(value="/updateEmployee", method=RequestMethod.PUT, consumes="application/json")
	public void updateEmployee(@RequestBody Employee employee) {
		Employee employeeFind = employeeRepository.findByempId(employee.getEmpId());
		//employeeRepository.save(employee);
		//System.out.println(employee.getEmpId());
		employeeFind.setFirstName(employee.getFirstName());
		employeeFind.setLastName(employee.getLastName());
		employeeFind.setGender(employee.getGender());
		employeeFind.setDob(employee.getDob());
		employeeFind.setNationality(employee.getNationality());
		employeeFind.setMarStatus(employee.getMarStatus());
		employeeFind.setPhone(employee.getPhone());
		employeeFind.setSubDiv(employee.getSubDiv());
		employeeFind.setStatus(employee.getStatus());
		employeeFind.setSuspendDate(employee.getSuspendDate());
		employeeFind.setHiredDate(employee.getHiredDate());
		employeeFind.setEmail(employee.getEmail());
		employeeFind.setLocation(employee.getLocation());
		employeeFind.setGrade(employee.getGrade());
		employee.setDivision(employee.getDivision());
		employeeRepository.save(employeeFind);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/deleteEmployee/{emp_id}")
	public void deleteEmployeeById(@PathVariable("emp_id") Long emp_id) {
		employeeRepository.delete(emp_id);
	}
}
