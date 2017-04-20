package com.project;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "grade")
public class Grade {
	public Grade() {
		// TODO Auto-generated constructor stub
	}
	
	@Id
	@Column(name = "grade_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long gradeId;
	
	@Column(name = "grade", nullable = false)
	private String grade;
	
	@Column(name = "grade_code", nullable = false)
	private String gradeCode;

	public long getGradeId() {
		return gradeId;
	}

	public void setGradeId(long gradeId) {
		this.gradeId = gradeId;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getGradeCode() {
		return gradeCode;
	}

	public void setGradeCode(String gradeCode) {
		this.gradeCode = gradeCode;
	}
	
}
