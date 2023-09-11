import React, { useEffect, useState } from 'react'
import { listDepartments } from '../services/DepartmentService'

const DepartmentComponent = () => {
    let [departments, setDepartments] = useState([]);
    useEffect(() => {
        listDepartments().then((response) => {
            setDepartments(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function onBlickButton(){
        console.log(departments);
    }

    function addDepartment(){

    }

    function onClickUpdate(id) {
        console.log(id);
    }

    function onClickDelete(id) {
        console.log(id);
    }

    return (
        <div className='customStyle'>
            <h2>List of Departmets</h2>
            <button className='btn btn-primary mb-2' style={ {float: 'left'} } onClick={ addDepartment }>Add Department</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>ID</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map((item, i) => 
                            <tr key={i}>
                                <td>{ i+1 }</ td>
                                <td>{ item.id }</ td>
                                <td>{ item.dprtName }</td>
                                <td>{ item.dprtDesc }</ td>
                                <td>
                                    <button className='btn btn-info' onClick={ () => { onClickUpdate(item.id) }}>Update</button>
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

export default DepartmentComponent