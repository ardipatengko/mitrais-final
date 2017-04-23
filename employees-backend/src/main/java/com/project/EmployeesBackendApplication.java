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
			e.setLastName("People");
			e.setGender("Female");
			e.setDob(new Date(0));
			e.setNationality("Indonesia");
			e.setMarStatus("Married");
			e.setPhone("+6285242312512");
			e.setSubDiv("Mitrais PHP Bootcamp");
			e.setStatus("Employee");
			e.setSuspendDate(new Date(1000));
			e.setHiredDate(new Date(500));
			e.setEmail("person1@mitrais.com");
			e.setLocation("Bandung");
			Grade g = new Grade();//gradeRepository
			g.setGrade("Junior Programmer");
			g.setGradeCode("JP");
			e.setGrade(g);
			gradeRepository.save(g);
			Division d = new Division();
			d.setDivision("Software Development Red");
			d.setDivisionCode("SWD Red");
			e.setDivision(d);
			divisionRepository.save(d);
			
			employeeRepository.save(e);
			
			Employee e = new Employee();
			e.setFirstName("Person 2");
			e.setLastName("People");
			e.setGender("Male");
			e.setDob(new Date(0));
			e.setNationality("Indonesian");
			e.setMarStatus("Single");
			e.setPhone("+6285242312512");
			e.setSubDiv("Mitrais Java Bootcamp");
			e.setStatus("Employee");
			e.setSuspendDate(new Date(1000));
			e.setHiredDate(new Date(500));
			e.setEmail("person2@mitrais.com");
			e.setLocation("Jakarta");
			//Grade g = gradeRepository.findByGradeId(1);
			//gradeRepository.save(g);
			Grade g = new Grade();//gradeRepository
			g.setGrade("Programmer");
			g.setGradeCode("PG");
			e.setGrade(g);
			//Division d = divisionRepository.findByDivId(1);
			//e.setDivision(d);
			//divisionRepository.save(d);
			Division d = new Division();
			d.setDivision("Software Development Blue");
			d.setDivisionCode("SWD Blue");
			e.setDivision(d);
			divisionRepository.save(d);
			
			employeeRepository.save(e);
			
			
			Employee e = new Employee();
			e.setFirstName("Person 3");
			e.setLastName("People");
			e.setGender("Male");
			e.setDob(new Date(0));
			e.setNationality("Australian");
			e.setMarStatus("Divorce");
			e.setPhone("+6285242312512");
			e.setSubDiv("Mitrais NodeJS Bootcamp");
			e.setStatus("Employee");
			e.setSuspendDate(new Date(1000));
			e.setHiredDate(new Date(500));
			e.setEmail("person3@mitrais.com");
			e.setLocation("Bali");
			Grade g = new Grade();//gradeRepository
			g.setGrade("Senior Manager");
			g.setGradeCode("SM");
			e.setGrade(g);
			gradeRepository.save(g);
			Division d = new Division();
			d.setDivision("Training & Development");
			d.setDivisionCode("TnD");
			e.setDivision(d);
			divisionRepository.save(d);
			
			employeeRepository.save(e);
			*/
		};
	}
}
