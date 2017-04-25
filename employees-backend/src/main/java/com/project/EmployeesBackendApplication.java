package com.project;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


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
			
			Employee e = new Employee();
			e.setFirstName("Milla");
			e.setLastName("Khan");
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
			e.setGrade("JP - Junior Programmer");
			//gradeRepository.save(g);
			Division d = new Division();
			d.setDivision("Software Development Red");
			d.setDivisionCode("SWD Red");
			e.setDivision("SWD Red");
			//divisionRepository.save(d);
			
			employeeRepository.save(e);
			
			Employee e2 = new Employee();
			e2.setFirstName("Steffan");
			e2.setLastName("Millano");
			e2.setGender("Male");
			e2.setDob(new Date(0));
			e2.setNationality("Indonesian");
			e2.setMarStatus("Single");
			e2.setPhone("+6285242312512");
			e2.setSubDiv("Mitrais Java Bootcamp");
			e2.setStatus("Employee");
			e2.setSuspendDate(new Date(1000));
			e2.setHiredDate(new Date(500));
			e2.setEmail("person2@mitrais.com");
			e2.setLocation("Jakarta");
			//Grade g = gradeRepository.findByGradeId(1);
			//gradeRepository.save(g);
			Grade g2 = new Grade();//gradeRepository
			g2.setGrade("Programmer");
			g2.setGradeCode("PG");
			e2.setGrade("PG - Programmer");
			//gradeRepository.save(g2);
			//Division d = divisionRepository.findByDivId(1);
			//e.setDivision(d);
			//divisionRepository.save(d);
			Division d2 = new Division();
			d2.setDivision("Software Development Blue");
			d2.setDivisionCode("SWD Blue");
			e2.setDivision("SWD Blue");
			//divisionRepository.save(d2);
			
			employeeRepository.save(e2);
			
			
			Employee e3 = new Employee();
			e3.setFirstName("Karmilla");
			e3.setLastName("El Zara");
			e3.setGender("Male");
			e3.setDob(new Date(0));
			e3.setNationality("Australian");
			e3.setMarStatus("Divorce");
			e3.setPhone("+6285242312512");
			e3.setSubDiv("Mitrais NodeJS Bootcamp");
			e3.setStatus("Employee");
			e3.setSuspendDate(new Date(1000));
			e3.setHiredDate(new Date(500));
			e3.setEmail("person3@mitrais.com");
			e3.setLocation("Bali");
			Grade g3 = new Grade();//gradeRepository
			g3.setGrade("Senior Manager");
			g3.setGradeCode("SM");
			e3.setGrade("SM - Senior Manager");
			//gradeRepository.save(g3);
			Division d3 = new Division();
			d3.setDivision("Training & Development");
			d3.setDivisionCode("TnD");
			e3.setDivision("TnD");
			//divisionRepository.save(d3);
			
			employeeRepository.save(e3);
			
			
			Employee e4 = new Employee();
			e4.setFirstName("Nicholas");
			e4.setLastName("Kondang");
			e4.setGender("Male");
			e4.setDob(new Date(0));
			e4.setNationality("Indonesian");
			e4.setMarStatus("Single");
			e4.setPhone("+6285242312512");
			e4.setSubDiv("Mitrais CSS Bootcamp");
			e4.setStatus("Employee");
			e4.setSuspendDate(new Date(1000));
			e4.setHiredDate(new Date(500));
			e4.setEmail("person4@mitrais.com");
			e4.setLocation("Yogyakarta");
			Grade g4 = gradeRepository.findByGradeId(2);
			e4.setGrade("PG - Programmer");
			Division d4 = divisionRepository.findByDivId(3);
			e4.setDivision("TnD");
			
			employeeRepository.save(e4);
			
		};
	}
	
	@Bean
	   public CorsFilter corsFilter() {
	            UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	            CorsConfiguration config = new CorsConfiguration();
	            config.setAllowCredentials(true);
	            config.addAllowedOrigin("*");
	            config.addAllowedHeader("*");
	            config.addAllowedMethod("OPTIONS");
	            config.addAllowedMethod("GET");
	            config.addAllowedMethod("POST");
	            config.addAllowedMethod("PUT");
	            config.addAllowedMethod("DELETE");
	            source.registerCorsConfiguration("/**", config);
	            return new CorsFilter(source);
	        }
}
