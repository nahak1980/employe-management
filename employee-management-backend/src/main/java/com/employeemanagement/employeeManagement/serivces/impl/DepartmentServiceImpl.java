package com.employeemanagement.employeeManagement.serivces.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeemanagement.employeeManagement.dto.DepartmentDto;
import com.employeemanagement.employeeManagement.entity.Department;
import com.employeemanagement.employeeManagement.exception.ResourceNotFoundException;
import com.employeemanagement.employeeManagement.mapper.DepartmentMapper;
import com.employeemanagement.employeeManagement.repository.DepartmentRepository;
import com.employeemanagement.employeeManagement.serivces.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService{

	@Autowired
	DepartmentRepository departmentRepository;
	
	@Override
	public List<DepartmentDto> getAllDepartments() {
		List<Department> departments = departmentRepository.findAll();
		List<DepartmentDto> allDepartments = new ArrayList<>();
		for (Department department : departments) {
			allDepartments.add(DepartmentMapper.mapToDepartmentDto(department));
		}
		return allDepartments;
	}

	@Override
	public DepartmentDto getDepartmentById(Long id) {
		Department department = departmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Department with ID " + id + " does not exist"));
		return DepartmentMapper.mapToDepartmentDto(department);
	}

	@Override
	public DepartmentDto addDepartment(DepartmentDto departmentDto) {
		Department department = DepartmentMapper.mapToDepartment(departmentDto);
		department = departmentRepository.save(department);
		return DepartmentMapper.mapToDepartmentDto(department);
	}

	@Override
	public DepartmentDto updateDepartment(Long id, DepartmentDto departmentDto) {
		Department department = departmentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Department with ID " + id + " does not exist"));
		department.setDprtName(departmentDto.getDprtName());
		department.setDprtDesc(departmentDto.getDprtDesc());
		department = departmentRepository.save(department);
		return DepartmentMapper.mapToDepartmentDto(department);
	}

	@Override
	public void deleteDepartment(Long id) {
		departmentRepository.deleteById(id);
	}

}
