package com.project;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "location")
public class Location {
	public Location() {
		// TODO Auto-generated constructor stub
	}
	
	@Id
	@Column(name = "location_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long locationId;
	
	@Column(name = "location_name", nullable=false)
	private String locationName;

	public long getLocationId() {
		return locationId;
	}

	public void setLocationId(long locationId) {
		this.locationId = locationId;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}
	
}
