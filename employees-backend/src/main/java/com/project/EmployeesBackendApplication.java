package com.project;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class EmployeesBackendApplication {
	
	@Autowired
	private DivisionRepository divisionRepository;
	@Autowired
	private GradeRepository gradeRepository;
	@Autowired
	private EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(EmployeesBackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner printMessage(ApplicationContext ctx){
		return args -> {
			/*
			Employee e = new Employee();
			e.setFirstName("Person 1");
			e.setLastName("People ");
			e.setGender("Female");
			e.setDob(new Date(0));
			e.setNationality("American");
			e.setMarStatus("Married");
			e.setPhone("+6285242312512");
			e.setSubDiv("Mitrais PHP Bootcamp");
			e.setStatus("Employee");
			e.setSuspendDate(new Date(1000));
			e.setHiredDate(new Date(500));
			e.setEmail("person1@mitrais.com");
			e.setLocation("Bandung");
			Grade g = gradeRepository
			e.setGrade(g);
			gradeRepository.save(g);
			Division d = new Division();
			d.setDivision("Software Development Red");
			d.setDivisionCode("SWD Red");
			e.setDivision(d);
			divisionRepository.save(d);
			
			employeeRepository.save(e);
			*/
		};
	}
}
