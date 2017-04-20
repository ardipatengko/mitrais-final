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
			e.setFirstName("Budi");
			e.setLastName("Toru");
			e.setGender("Not Found");
			e.setDob(new Date(0));
			e.setNationality("Australian");
			e.setMarStatus("Single");
			e.setPhone("+6285242312512");
			e.setSubDiv("Java Bootcamp");
			e.setStatus("Contract");
			e.setSuspendDate(new Date(1000));
			e.setHiredDate(new Date(500));
			e.setEmail("budi.toru@mitrais.com");
			e.setLocation("Jakarta");
			Grade g = new Grade();
			g.setGrade("Project  Manager");
			g.setGradeCode("PM");
			e.setGrade(g);
			gradeRepository.save(g);
			Division d = new Division();
			d.setDivision("Software Development Blue");
			d.setDivisionCode("SWD Blue");
			e.setDivision(d);
			divisionRepository.save(d);
			
			employeeRepository.save(e);
			*/
		};
	}
}
