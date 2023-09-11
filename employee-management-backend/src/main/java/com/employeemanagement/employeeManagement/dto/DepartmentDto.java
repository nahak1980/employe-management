package com.employeemanagement.employeeManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDto {
	private Long id;
	private String dprtName;
	private String dprtDesc;
}
