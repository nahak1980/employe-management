import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    let [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) => {
            console.log(response.data);
            setEmployees(response.data)
        }).catch(error => {
            console.log(error);
        });
    }, [])
    return (
        <div>
            <h2>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent