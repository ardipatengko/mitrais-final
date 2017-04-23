package com.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/saveEmployee/{employee}")
	public void saveEmployee(@PathVariable("employee") Employee employee) {
		//employeeRepository.save(employee);
		System.out.println(employee);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/deleteEmployee/{emp_id}")
	public void deleteEmployeeById(@PathVariable("emp_id") Long emp_id) {
		employeeRepository.delete(emp_id);
	}
}
