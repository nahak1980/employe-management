import axios  from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/department/";

export const listDepartments = () => {
    return axios.get(REST_API_BASE_URL + 'get-all-departments');
}

export const addDepartment = (department) => {
    return axios.post(REST_API_BASE_URL + 'add-department', department);
}

export const getDepartmentById = (id) => {
    return axios.get(REST_API_BASE_URL + 'get-department/'+id);
}

export const updateDepartment = (id, department) => {
    return axios.put(REST_API_BASE_URL + `update-department/${id}`, department);
}

export const deleteDepartment = (id) => {
    return axios.delete(REST_API_BASE_URL + `delete-department/${id}`)
}