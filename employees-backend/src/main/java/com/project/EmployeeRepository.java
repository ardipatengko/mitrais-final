package com.project;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
	public Employee findByempId(@Param("emp_id") long emp_id);
	public List<Employee> findByGenderAndLocation(@Param("gender") String gender, @Param("location") String location);
	//public void updateEmployee(Employee employee);
}
