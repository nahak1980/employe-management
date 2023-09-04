package com.employeemanagement.employeeManagement.serivces;

import java.util.List;

import com.employeemanagement.employeeManagement.dto.EmployeeDto;

public interface EmployeeService {
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	EmployeeDto getEmployeeById(Long id);
	List<EmployeeDto> getAllEmployees();
	EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);
	void deleteEmployee(Long id);
}
