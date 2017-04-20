package com.project;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
	public Employee() {
		// TODO Auto-generated constructor stub
	}
	
	@Id
	@Column(name = "emp_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long empId;
	
	@Column(name = "first_name", nullable = false)
	private String firstName;
	
	@Column(name = "last_name", nullable = false)
	private String lastName;

	@Column(name = "gender", nullable = false)
	private String gender;
	
	@Column(name = "dob", nullable = false)
	private Date dob;
	
	@Column(name = "nationality", nullable = false)
	private String nationality;
	
	@Column(name = "mar_status", nullable = false)
	private String marStatus;
	
	@Column(name = "phone", nullable = false)
	private String phone;
	
	@Column(name = "sub_div", nullable = false)
	private String subDiv;
	
	@Column(name = "status", nullable = false)
	private String status;
	
	@Column(name = "suspend_date", nullable = false)
	private Date suspendDate;
	
	@Column(name = "hired_date", nullable = false)
	private Date hiredDate;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "location", nullable = false)
	private String location;
	
	@ManyToOne
	@JoinColumn(name = "grade_id")
	private Grade grade;
	
	@ManyToOne
	@JoinColumn(name = "div_id")
	private Division division;

	public long getEmpId() {
		return empId;
	}

	public void setEmpId(long empId) {
		this.empId = empId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getMarStatus() {
		return marStatus;
	}

	public void setMarStatus(String marStatus) {
		this.marStatus = marStatus;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSubDiv() {
		return subDiv;
	}

	public void setSubDiv(String subDiv) {
		this.subDiv = subDiv;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getSuspendDate() {
		return suspendDate;
	}

	public void setSuspendDate(Date suspendDate) {
		this.suspendDate = suspendDate;
	}

	public Date getHiredDate() {
		return hiredDate;
	}

	public void setHiredDate(Date hiredDate) {
		this.hiredDate = hiredDate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Grade getGrade() {
		return grade;
	}

	public void setGrade(Grade grade) {
		this.grade = grade;
	}

	public Division getDivision() {
		return division;
	}

	public void setDivision(Division division) {
		this.division = division;
	}
	
	
}
