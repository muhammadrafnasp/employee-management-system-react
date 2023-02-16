import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';

function Edit() {

    const [id,setId]=useState('');
    const [empName,setempName]=useState('');
    const [age,setAge]=useState('');
    const [designation,setDesignation]=useState('');
    const [salary,setSalary]=useState(0);
    

    useEffect(()=>{
        setId(localStorage.getItem('ID'));
        setempName(localStorage.getItem('NAME'));
        setAge(localStorage.getItem('AGE'));   
        setDesignation(localStorage.getItem('DESIGNATION'));   
        setSalary(localStorage.getItem('SALARY'));  
   
    },[])

    console.log(id);   
    console.log(empName);     
    
    let index = Employee.map(item=>item.id).indexOf(id);
    console.log(index);//0


    let history = useNavigate()
    const handleUpdate = (e)=>{
        e.preventDefault(); //avoid refreshing
        console.log(e); //event
        let emp = Employee[index]
        console.log(emp); //full details of employee
        emp.id=id;
        emp.empName=empName;
        emp.age=age;
        emp.designation=designation;
        emp.salary=salary;
        console.log(emp); //updated details of employee

        history('/')

    }


    return (
        <>
            <h1 className='text-center text-primary m-4'>Employee Management System</h1>
            <p className='p-4'> Update Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management.</p>

            <Row>
                <Col md={5}>
                    <img src='https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-02-512.png' />
                </Col>

                <Col md={7}>
                    <Form className='border border-3 p-5 m-5'>
                        <Form.Group className="mb-3">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Id" 
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            required    
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" 
                            value={empName}
                            onChange={(e)=>setempName(e.target.value)}
                            required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Age" 
                            value={age}
                            onChange={(e)=>setAge(e.target.value)}
                            required

                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Designation" 
                            value={designation}
                            onChange={(e)=>setDesignation(e.target.value)}
                            required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Salary" 
                            value={salary}
                            onChange={(e)=>setSalary(e.target.value)}
                            required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    )
}

export default Edit