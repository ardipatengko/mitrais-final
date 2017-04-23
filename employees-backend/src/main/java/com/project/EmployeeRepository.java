package com.project;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
	public Employee findByempId(@Param("emp_id") long emp_id);
}
