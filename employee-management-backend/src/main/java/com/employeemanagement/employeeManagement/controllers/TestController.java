package com.employeemanagement.employeeManagement.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test/api/")
public class TestController {

	@GetMapping("first")
	public String printSomething() {
		return "HELLO SPRING BOOT";
	}
	
}
