import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import './../style.css'
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const navigator = useNavigate();
    let [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees(){
        listEmployees().then((response) => {
            console.log(response.data);
            setEmployees(response.data)
        }).catch(error => {
            console.log(error);
        });
    }
    function addEmployee(){
        navigator('/add-employee');
    }
    function onClickUpdate(item){
        navigator(`/update-employee/${item.id}`);
    }
    function onClickDelete(id){
        deleteEmployee(id).then((response) => {
            console.log(response);
            getAllEmployees();
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='customStyle'>
            <h2>List of Employees</h2>
            <button className='btn btn-primary mb-2' style={ {float: 'left'} } onClick={ addEmployee }>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((item, i) => 
                            <tr key={i}>
                                <td>{ i+1 }</ td>
                                <td>{ item.id }</ td>
                                <td>{ item.firstName }</td>
                                <td>{ item.lastName }</ td>
                                <td>{ item.email }</ td>
                                <td>
                                    <button className='btn btn-info' onClick={ () => { onClickUpdate(item) }}>Update</button>
                                    <button style={ { marginLeft: '10px' } } className='btn btn-danger' onClick={ () => { onClickDelete(item.id) }}>Delete</button>
                                </ td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent