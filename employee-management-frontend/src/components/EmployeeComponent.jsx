import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');

    const navigator = useNavigate();
    const { id } = useParams();
    let [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        getEmployeeDetail();
    }, []);

    function validateForm() {
        let valid = true;
        const errCopy = { ... errors}
        if(!firstName.trim()){
            errCopy.firstName = "First name is required";
            valid = false;
        }
        if(!lastName.trim()){
            errCopy.lastName = "Last name is required";
            valid = false;
        }
        if(!email.trim()){
            errCopy.email = "Email is required";
            valid = false;
        }
        setErrors(errCopy);
        return valid;
    }

    function submitEmployee(e){
        e.preventDefault();
        if(validateForm()){
            const employee = {firstName, lastName, email};
            if(id){
                updateEmployee(id, employee).then((respone) => {
                    // console.log(respone.data);
                    navigator("/employees");
                }).catch((errors) => {
                    console.log(errors);
                });
            } else {
                addEmployee(employee).then( (respone) => {
                    navigator("/employees");
                }).catch();
            }
        }
    }

    function getEmployeeDetail(){
        if(id){
            getEmployeeById(id).then((response) => {
                console.log(response.data);
                const data = response.data;
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
            }).catch((errors) => {
                console.log(errors);
            })
        }
    }
    
    return (
        <div>
            <div className="card mb-2 mt-2" style={ { width: '30rem', height: '23rem', margin: 'auto' } }>
            <h5 className="card-title text-center">{ id ? 'Update Employee' : 'Add Employee'}</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label>First Name</label>
                            <input type="text" className={ `form-control ${ errors.firstName ? 'is-invalid' : '' }` } onChange={ (e) => { setFirstName(e.target.value) } } value={ firstName } placeholder="" />
                            { errors.firstName ? <div className='invalid-feedback'>{ errors.firstName }</div> : '' }
                        </div>
                        <div className="form-group mb-2">
                            <label>Last Name</label>
                            <input type="text" className={ `form-control ${ errors.lastName ? 'is-invalid' : '' }` } onChange={ (e) => { setLastName(e.target.value) } } value={ lastName } placeholder="" />
                            { errors.lastName ? <div className='invalid-feedback'>{ errors.lastName }</div> : '' }
                        </div>
                        <div className="form-group mb-2">
                            <label>Email:</label>
                            <input type="text" className={ `form-control ${ errors.email ? 'is-invalid' : '' }` } onChange={ (e) => { setEmail(e.target.value) } } value={ email } placeholder="" />
                            { errors.email ? <div className='invalid-feedback'>{ errors.email }</div> : '' }
                        </div>
                        <button className='btn btn-success mt-3' onClick={ (e) => {submitEmployee(e)} }>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent