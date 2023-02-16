import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import uuid from 'react-uuid'

function Add() {
    const [id, setId] = useState('');
    const [empName, setempName] = useState('');
    const [age, setAge] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    
    const history = useNavigate()
    const handleAdd = (e) => {
        e.preventDefault(); //avoid refreshing

        let ids = uuid();
        console.log(ids);
        let uniqueId=ids.slice(0,8);
        console.log(uniqueId);

        Employee.push({
            id:uniqueId,
            empName:empName,
            age:age,
            designation:designation,
            salary:salary
        })

        history('/')

    }

    return (
        <>
            <h1 className='text-center text-primary m-4'>Employee Management System</h1>
            <p className='p-4'> Add Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management.</p>

            <Row>
                <Col md={5}>
                    <img src='https://cdn3.iconfinder.com/data/icons/dashboard-ui-vol-3-flat/48/Dashboard_-_Vol._3-02-512.png' />
                </Col>

                <Col md={7}>
                    <Form className='border border-3 p-5 m-5'>
                        <Form.Group className="mb-3">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Id"
                                // value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name"
                                // value={empName}
                                onChange={(e) => setempName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Age"
                                // value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required

                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Designation"
                                // value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Salary"
                                // value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleAdd(e)}>
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>

    )

}

export default Add