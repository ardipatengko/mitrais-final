package com.project;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
		employeeFind.setDivision(employee.getDivision());
		employeeFind.setPhoto(employee.getPhoto());
		employeeRepository.save(employeeFind);
	}
	
	@CrossOrigin(origins = "http://localhost:3000", methods=RequestMethod.DELETE)
    @RequestMapping(value="/deleteEmployee/{emp_id}", method=RequestMethod.DELETE)
	public void deleteEmployeeById(@PathVariable("emp_id") Long emp_id) {
		employeeRepository.delete(emp_id);
	}
	
	@CrossOrigin(origins = "http://localhost:3000", methods=RequestMethod.POST)
    @RequestMapping(value="/uploadImage", method=RequestMethod.POST)
	public void uploadImage(@RequestParam(required = false) MultipartFile photo) {
		String fileMimeType = photo.getContentType();
		String extension;
        if (fileMimeType.contains("jpeg"))
            extension = ".jpg";
        else
            extension = ".png";
		String filename = UUID.randomUUID().toString().concat(extension);
		File targetFile = new File("./../employees-frontend/media/" + photo.getOriginalFilename());

        try
        {
            targetFile.createNewFile();
            photo.transferTo(targetFile.getAbsoluteFile());
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
		
		System.out.println(photo.getOriginalFilename());
	}
}
