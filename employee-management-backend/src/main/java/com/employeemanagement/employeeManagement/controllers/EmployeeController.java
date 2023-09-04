package com.employeemanagement.employeeManagement.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employeemanagement.employeeManagement.dto.EmployeeDto;
import com.employeemanagement.employeeManagement.serivces.EmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees/")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("add-employee")
	public ResponseEntity<EmployeeDto> addEmployee(@RequestBody EmployeeDto employeeDto) {
		EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
		return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
	}
	
	@GetMapping("get-employee/{id}")
	public ResponseEntity<EmployeeDto> findById(@PathVariable("id") Long id){
		EmployeeDto addedEmployeeDto = employeeService.getEmployeeById(id);
		return ResponseEntity.ok(addedEmployeeDto);
	}
	
	@GetMapping("all-employees")
	public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
		List<EmployeeDto> employeesList = employeeService.getAllEmployees();
		return ResponseEntity.ok().body(employeesList);
	}
	
	@PutMapping("{id}/update")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long id, @RequestBody EmployeeDto employeeDto){
		EmployeeDto updatedEmployeeDto = employeeService.updateEmployee(id, employeeDto);
		return new ResponseEntity<>(updatedEmployeeDto, HttpStatus.OK);
	}
	
	@DeleteMapping("{id}/delete")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id){
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok("Employee Deleted Successfully");
	}
	
}
