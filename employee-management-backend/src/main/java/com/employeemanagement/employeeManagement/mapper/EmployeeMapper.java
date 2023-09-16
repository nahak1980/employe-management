package com.employeemanagement.employeeManagement.mapper;

import com.employeemanagement.employeeManagement.dto.EmployeeDto;
import com.employeemanagement.employeeManagement.entity.Employee;

public class EmployeeMapper {
	public static Employee mapToEmployee(EmployeeDto employeeDto) {
		Employee employee = new Employee();
		employee.setFirstName(employeeDto.getFirstName());
		employee.setLastName(employeeDto.getLastName());
		employee.setEmail(employeeDto.getEmail());
		return employee;
	}
	
	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getFirstName(),
				employee.getLastName(),
				employee.getEmail(),
				employee.getDepartment().getId()
		);
	}
	
}

