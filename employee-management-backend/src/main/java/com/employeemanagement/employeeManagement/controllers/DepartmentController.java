package com.employeemanagement.employeeManagement.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import com.employeemanagement.employeeManagement.dto.DepartmentDto;
import com.employeemanagement.employeeManagement.serivces.DepartmentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/department/")
public class DepartmentController {
	
	@Autowired
	private DepartmentService departmentService;
	
	@PostMapping("add-department")
	public ResponseEntity<DepartmentDto> addDepartment(@RequestBody DepartmentDto departmentDto) {
		DepartmentDto savedDepartment = departmentService.addDepartment(departmentDto);
		return new ResponseEntity<>(savedDepartment, HttpStatus.OK);
	}
	
	@GetMapping("get-department/{id}")
	public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long id) {
		DepartmentDto departmentDto = departmentService.getDepartmentById(id);
		return new ResponseEntity<>(departmentDto, HttpStatus.OK);
	}
	
	@GetMapping("get-all-departments")
	public ResponseEntity<List<DepartmentDto>> getAllDepartments() {
		List<DepartmentDto> allDepartmentDtos = departmentService.getAllDepartments();
		return ResponseEntity.ok(allDepartmentDtos);
	}
	
	@PutMapping("update-department/{id}")
	public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long id, @RequestBody DepartmentDto departmentDto){
		DepartmentDto department = departmentService.updateDepartment(id, departmentDto);
		return ResponseEntity.ok().body(department);
	}
	
	@DeleteMapping("delete-department/{id}")
	public ResponseEntity<String> deleteDepartment(@PathVariable Long id) {
		departmentService.deleteDepartment(id);
		return ResponseEntity.ok("Employee Deleted Successfully");
	}
	
}
