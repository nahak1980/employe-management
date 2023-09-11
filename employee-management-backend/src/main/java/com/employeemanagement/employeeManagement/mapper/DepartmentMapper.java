package com.employeemanagement.employeeManagement.mapper;

import com.employeemanagement.employeeManagement.dto.DepartmentDto;
import com.employeemanagement.employeeManagement.entity.Department;

public class DepartmentMapper {

	public static DepartmentDto mapToDepartmentDto(Department department) {
		return new DepartmentDto(department.getId(), department.getDprtName(), department.getDprtDesc());
	}
	
	public static Department mapToDepartment(DepartmentDto departmentDto) {
		return new Department(departmentDto.getId(), departmentDto.getDprtName(), departmentDto.getDprtDesc());
	}
	
}
