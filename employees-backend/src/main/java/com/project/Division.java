package com.project;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "division")
public class Division {
	public Division() {
		// TODO Auto-generated constructor stub
	}
	
	@Id
	@Column(name = "div_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long divId;
	
	@Column(name = "division", nullable=false)
	private String division;
	
	@Column(name = "division_code", nullable=false)
	private String divisionCode;

	public long getDivId() {
		return divId;
	}

	public void setDivId(long divId) {
		this.divId = divId;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getDivisionCode() {
		return divisionCode;
	}

	public void setDivisionCode(String divisionCode) {
		this.divisionCode = divisionCode;
	}
	
}
