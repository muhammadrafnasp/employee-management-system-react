import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserEdit, FaUserPlus, FaUserTimes } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';

function Home() {
    const history = useNavigate()
    const handleDelete = (id) => {
    let index = Employee.map(item=>item.id).indexOf(id); //index
    Employee.splice(index,1) //item remove
    console.log(Employee); //array position with remaining items
    history('/'); //refresh

    }
    
   const handleEdit = (id,empName,age,designation,salary)=>{
       localStorage.setItem('ID',id);
       localStorage.setItem('NAME',empName);
       localStorage.setItem('AGE',age);
       localStorage.setItem('DESIGNATION',designation);
       localStorage.setItem('SALARY',salary);
    }

    return (
        <>
            <h1 className='text-center text-primary m-4'>Employee Management System</h1>
            <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management.</p>
            <Link to={'/add'}>
                <Button className='ms-3' variant='success'>Add <FaUserPlus /></Button>
            </Link>
            <h3 className='my-5 ms-3'>List Of Employees</h3>
            <Table className='ms-3' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        Employee && Employee.length > 0 ?
                            Employee.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.empName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <Link to={'/edit'}><Button className='ms-2' onClick={()=>handleEdit(item.id,item.empName,item.age,item.designation,item.salary)} variant="primary"><FaUserEdit /></Button>
                                        </Link>
                                        <Button className='ms-2' onClick={() => handleDelete(item.id)} variant="danger"><FaUserTimes /></Button>
                                    </td>
                                </tr>

                            )) : 'No data available'

                    }
                </tbody>
            </Table>
        </>
    )
}

export default Home