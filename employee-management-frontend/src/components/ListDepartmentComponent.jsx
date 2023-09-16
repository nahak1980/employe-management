import React, { useEffect, useState } from 'react'
import { deleteDepartment, listDepartments } from '../services/DepartmentService'
import { useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
    let navigator = useNavigate();
    let [departments, setDepartments] = useState([]);
    useEffect(() => {
        getAllDepartments();
    }, []);

    function addDepartment(){
        navigator('/add-department')
    }

    function onClickUpdate(id) {
        navigator(`/update-department/${id}`)
    }

    function onClickDelete(id) {
        deleteDepartment(id).then((response) => {
            getAllDepartments();
        }).catch((error) => {
            console.log(error);
        });
    }

    function getAllDepartments() {
        listDepartments().then((response) => {
            setDepartments(response.data);
        }).catch((error) => {
            console.log(error);
        });
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

export default ListDepartmentComponent