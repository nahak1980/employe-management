import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService'

const DepartmentComponent = () => {
    let [departmentName, setDepartmentName] = useState('');
    let [departmentDesc, setDepartmentDesc] = useState('');
    let [errors, setErrors] = useState({
        departmentName: '',
        departmentDesc: ''
    });
    const { id } = useParams();
    let navigator = useNavigate();
    function validateForm() {
        let valid = true;
        const errCopy = { ... errors}
        if(!departmentName.trim()){
            errCopy.departmentName = "Department name is required";
            valid = false;
        }
        if(!departmentDesc.trim()){
            errCopy.departmentDesc = "Department description is required";
            valid = false;
        }
        setErrors(errCopy);
        return valid;
    }

    useEffect(() => {
        if(id){
            getDepartmentDetail(id);
        }
    }, []);

    function getDepartmentDetail(id) {
        getDepartmentById(id).then((response) => {
            console.log(response.data);
            const data = response.data;
            setDepartmentName(data.dprtDesc);
            setDepartmentDesc(data.dprtName);
        }).catch((errors) => {
            console.log(errors);
        })
    }

    function saveDepartment(e){
        e.preventDefault();
        if(validateForm()){
            const department = { 
                dprtName:departmentName,
                dprtDesc:departmentDesc
            };
            if(id){
                updateDepartment(id, department).then((respone) => {
                    navigator("/departments");
                }).catch((errors) => {
                    console.log(errors);
                });
            } else {
                console.log(department);
                addDepartment(department).then( (respone) => {
                    navigator("/departments");
                }).catch();
            }
        }
    }

    return (
        <div>
            <div className="card mb-2 mt-2" style={ { width: '30rem', height: '23rem', margin: 'auto' } }>
            <h5 className="card-title text-center">{ id ? 'Update Department' : 'Add Department'}</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label>Department Name</label>
                            <input type="text" className={ `form-control ${ errors.departmentName ? 'is-invalid' : '' }` } onChange={ (e) => { setDepartmentName(e.target.value) } } value={ departmentName } placeholder="" />
                            { errors.departmentName ? <div className='invalid-feedback'>{ errors.departmentName }</div> : '' }
                        </div>
                        <div className="form-group mb-2">
                            <label>Department Description</label>
                            <input type="text" className={ `form-control ${ errors.departmentDesc ? 'is-invalid' : '' }` } onChange={ (e) => { setDepartmentDesc(e.target.value) } } value={ departmentDesc } placeholder="" />
                            { errors.departmentDesc ? <div className='invalid-feedback'>{ errors.departmentDesc }</div> : '' }
                        </div>
                        <button className='btn btn-success mt-3' onClick={ (e) => { saveDepartment(e) } }>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DepartmentComponent