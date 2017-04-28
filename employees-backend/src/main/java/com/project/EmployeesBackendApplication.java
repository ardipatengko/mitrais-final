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
	@Autowired
	private LocationRepository locationRepository;

	public static void main(String[] args) {
		SpringApplication.run(EmployeesBackendApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner printMessage(ApplicationContext ctx){
		return args -> {
			addData();
			
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
	
	public void addData(){
		Location l = new Location();
		l.setLocationName("Bali");
		locationRepository.save(l);
		Location l2 = new Location();
		l2.setLocationName("Yogyakarta");
		locationRepository.save(l2);
		Location l3 = new Location();
		l3.setLocationName("Bandung");
		locationRepository.save(l3);
		Location l4 = new Location();
		l4.setLocationName("Jakarta");
		locationRepository.save(l4);
		
		
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
		e.setLocation(locationRepository.findOne((long) 3));
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
		e.setPhoto("shiba1.jpg");
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
		e2.setLocation(locationRepository.findOne((long) 4));
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
		e2.setPhoto("shiba1.jpg");
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
		e3.setLocation(locationRepository.findOne((long) 1));
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
		e3.setPhoto("shiba1.jpg");
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
		e4.setLocation(locationRepository.findOne((long) 2));
		Grade g4 = gradeRepository.findByGradeId(2);
		e4.setGrade("PG - Programmer");
		Division d4 = divisionRepository.findByDivId(3);
		e4.setDivision("TnD");
		e4.setPhoto("shiba1.jpg");
		employeeRepository.save(e4);
		
		Employee e5 = new Employee();
		e5.setFirstName("Marsel Sampe");
		e5.setLastName("Asang");
		e5.setGender("Male");
		e5.setDob(new Date(0));
		e5.setNationality("Indonesian");
		e5.setMarStatus("Married");
		e5.setPhone("+6285242312512");
		e5.setSubDiv("Bank App Developer");
		e5.setStatus("Employee");
		e5.setSuspendDate(new Date(1000));
		e5.setHiredDate(new Date(500));
		e5.setEmail("marselsampe.asang@mitrais.com");
		e5.setLocation(locationRepository.findOne((long) 1));
		Grade g5 = gradeRepository.findByGradeId(2);
		e5.setGrade("PG - Programmer");
		Division d5 = divisionRepository.findByDivId(3);
		e5.setDivision("SWD Red");
		e5.setPhoto("shiba1.jpg");
		employeeRepository.save(e5);
		
		Employee e6 = new Employee();
		e6.setFirstName("Nobsianus Rigenes Sampe");
		e6.setLastName("Asang");
		e6.setGender("Male");
		e6.setDob(new Date(0));
		e6.setNationality("Japanese");
		e6.setMarStatus("Divorce");
		e6.setPhone("+6285242312512");
		e6.setSubDiv("BTPN JP");
		e6.setStatus("Trainee");
		e6.setSuspendDate(new Date(1000));
		e6.setHiredDate(new Date(500));
		e6.setEmail("nobsianusrigenessampe.asang@mitrais.com");
		e6.setLocation(locationRepository.findOne((long) 3));
		e6.setGrade("JP - Junior Programmer");
		e6.setDivision("SWD Blue");
		e6.setPhoto("shiba1.jpg");
		employeeRepository.save(e6);
		
		Employee e7 = new Employee();
		e7.setFirstName("Tirta Yansen Sampe");
		e7.setLastName("Asang");
		e7.setGender("Male");
		e7.setDob(new Date(0));
		e7.setNationality("Indonesian");
		e7.setMarStatus("Single");
		e7.setPhone("+6285242312512");
		e7.setSubDiv("Employee Quality");
		e7.setStatus("Manager");
		e7.setSuspendDate(new Date(1000));
		e7.setHiredDate(new Date(500));
		e7.setEmail("tirtayansensampe.asang@mitrais.com");
		e7.setLocation(locationRepository.findOne((long) 4));
		e7.setGrade("SM - Senior Manager");
		e7.setDivision("TnD");
		e7.setPhoto("shiba1.jpg");
		employeeRepository.save(e7);
		
		Employee e8 = new Employee();
		e8.setFirstName("Daniel");
		e8.setLastName("Sallao");
		e8.setGender("Male");
		e8.setDob(new Date(0));
		e8.setNationality("Indonesian");
		e8.setMarStatus("Single");
		e8.setPhone("+6285242312512");
		e8.setSubDiv("BTPN Tester");
		e8.setStatus("Employee");
		e8.setSuspendDate(new Date(1000));
		e8.setHiredDate(new Date(500));
		e8.setEmail("daniel.sallao@mitrais.com");
		e8.setLocation(locationRepository.findOne((long) 3));
		e8.setGrade("PG - Programmer");
		e8.setDivision("SWD Blue");
		e8.setPhoto("shiba1.jpg");
		employeeRepository.save(e8);
		
		Employee e9 = new Employee();
		e9.setFirstName("Isyana");
		e9.setLastName("Sarasvati");
		e9.setGender("Female");
		e9.setDob(new Date(0));
		e9.setNationality("Australian");
		e9.setMarStatus("Married");
		e9.setPhone("+6285242312512");
		e9.setSubDiv("Salary Division");
		e9.setStatus("Employee");
		e9.setSuspendDate(new Date(1000));
		e9.setHiredDate(new Date(500));
		e9.setEmail("isyana.sarasvati@mitrais.com");
		e9.setLocation(locationRepository.findOne((long) 2));
		e9.setGrade("FA - Finance & Accounting");
		e9.setDivision("SWD Blue");
		e9.setPhoto("shiba1.jpg");
		employeeRepository.save(e9);
		
		Employee e10 = new Employee();
		e10.setFirstName("Dian Sastro");
		e10.setLastName("Wardoyo");
		e10.setGender("Female");
		e10.setDob(new Date(0));
		e10.setNationality("American");
		e10.setMarStatus("Married");
		e10.setPhone("+6285242312512");
		e10.setSubDiv("Salary Division");
		e10.setStatus("Employee");
		e10.setSuspendDate(new Date(1000));
		e10.setHiredDate(new Date(500));
		e10.setEmail("diansastro.wardoyo@mitrais.com");
		e10.setLocation(locationRepository.findOne((long) 1));
		e10.setGrade("FA - Finance & Accounting");
		e10.setDivision("SWD Blue");
		e10.setPhoto("shiba1.jpg");
		employeeRepository.save(e10);
		
		Employee e11 = new Employee();
		e11.setFirstName("Linda");
		e11.setLastName("Fajarsari");
		e11.setGender("Female");
		e11.setDob(new Date(0));
		e11.setNationality("Indonesia");
		e11.setMarStatus("Married");
		e11.setPhone("+6285242312512");
		e11.setSubDiv("Mitrais Jasper Reports Bootcamp");
		e11.setStatus("Employee");
		e11.setSuspendDate(new Date(1000));
		e11.setHiredDate(new Date(500));
		e11.setEmail("linda.fajarsari@mitrais.com");
		e11.setLocation(locationRepository.findOne((long) 3));
		e11.setGrade("JP - Junior Programmer");
		e11.setDivision("SWD Blue");
		e11.setPhoto("shiba1.jpg");
		employeeRepository.save(e11);
		
		Employee e12 = new Employee();
		e12.setFirstName("George");
		e12.setLastName("Gates");
		e12.setGender("Male");
		e12.setDob(new Date(0));
		e12.setNationality("American");
		e12.setMarStatus("Single");
		e12.setPhone("+6285242312512");
		e12.setSubDiv("-");
		e12.setStatus("Employee");
		e12.setSuspendDate(new Date(1000));
		e12.setHiredDate(new Date(500));
		e12.setEmail("george.gates@mitrais.com");
		e12.setLocation(locationRepository.findOne((long) 4));
		e12.setGrade("PG - Programmer");
		e12.setDivision("SWD Blue");
		e12.setPhoto("shiba1.jpg");
		employeeRepository.save(e12);

	}
}
