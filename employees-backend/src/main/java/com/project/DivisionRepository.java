package com.project;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface DivisionRepository extends PagingAndSortingRepository<Division, Long> {
	//public List<Division> findByDivId(@Param("div_id") long div_id);
}
