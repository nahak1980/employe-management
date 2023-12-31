package com.employeemanagement.employeeManagement.serivces.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeemanagement.employeeManagement.dto.EmployeeDto;
import com.employeemanagement.employeeManagement.entity.Department;
import com.employeemanagement.employeeManagement.entity.Employee;
import com.employeemanagement.employeeManagement.exception.ResourceNotFoundException;
import com.employeemanagement.employeeManagement.mapper.EmployeeMapper;
import com.employeemanagement.employeeManagement.repository.DepartmentRepository;
import com.employeemanagement.employeeManagement.repository.EmployeeRepository;
import com.employeemanagement.employeeManagement.serivces.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private DepartmentRepository departmentRepository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(() -> new ResourceNotFoundException("Department not exists with Department ID "+ employeeDto.getDepartmentId()));
		employee.setDepartment(department);
		Employee savedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with employee ID "+ id));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees = employeeRepository.findAll();
		List<EmployeeDto> allEmployees = new ArrayList<>();
		for(Employee emp: employees) {
			allEmployees.add(EmployeeMapper.mapToEmployeeDto(emp));
		}
		return allEmployees;
	}

	@Override
	public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with employee ID "+ id));
		Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(() -> new ResourceNotFoundException("Department not exists with Department ID "+ employeeDto.getDepartmentId()));
		employee.setFirstName(employeeDto.getFirstName());
		employee.setEmail(employeeDto.getEmail());
		employee.setLastName(employeeDto.getLastName());
		employee.setDepartment(department);
		employee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public void deleteEmployee(Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with employee ID "+ id));
		employeeRepository.deleteById(id);
	}

}
