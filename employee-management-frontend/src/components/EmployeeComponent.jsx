import React, { useState } from 'react'

const EmployeeComponent = () => {

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');

    function onEnterFirstName(e){
        setFirstName(e.target.value);
    }

    function onEnterLastName(e){
        setLastName(e.target.value);
    }

    function onEnterEmail(e){
        setEmail(e.target.value);
    }

    function submitEmployee(e){
        const employee = {firstName, lastName, email};
        e.preventDefault();
        console.log(employee);
    }
    

    return (
        <div>
            <div className="card mb-2 mt-2" style={ { width: '30rem', height: '23rem', margin: 'auto' } }>
            <h5 className="card-title">Add Employee</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label>First Name</label>
                            <input type="text" className="form-control" onChange={ (e) => { onEnterFirstName(e) } } value={ firstName } placeholder="" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Last Name</label>
                            <input type="text" className="form-control" onChange={ (e) => { onEnterLastName(e) } } value={ lastName } placeholder="" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Email:</label>
                            <input type="text" className="form-control" onChange={ (e) => { onEnterEmail(e) } } value={ email } placeholder="" />
                        </div>
                        <button className='btn btn-success mt-3' onClick={ (e) => {submitEmployee(e)} }>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent