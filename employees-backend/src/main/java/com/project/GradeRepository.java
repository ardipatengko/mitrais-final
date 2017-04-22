package com.project;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface GradeRepository extends PagingAndSortingRepository<Grade, Long> {
	public Grade findByGradeId(@Param("grade_id") long grade_id);
}
