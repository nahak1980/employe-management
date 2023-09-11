import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees/";

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL+'all-employees');
}

export const addEmployee = (postData) => { 
    return axios.post(REST_API_BASE_URL+'add-employee', postData);
}

export const getEmployeeById = (id) => {
    return axios.get(REST_API_BASE_URL+'get-employee/'+id);
}

export const updateEmployee = (id, postData) => {
    return axios.put(REST_API_BASE_URL+`${id}/update`, postData);
}

export const deleteEmployee = (id) => {
    return axios.delete(REST_API_BASE_URL+`${id}/delete`)
}