package com.employeemanagement.employeeManagement.serivces;

import java.util.List;

import com.employeemanagement.employeeManagement.dto.DepartmentDto;

public interface DepartmentService {
	List<DepartmentDto> getAllDepartments();
	DepartmentDto getDepartmentById(Long id);
	DepartmentDto addDepartment(DepartmentDto department);
	DepartmentDto updateDepartment(Long id, DepartmentDto department);
	void deleteDepartment(Long id);
	
}
