import React, { useState } from "react";
import { Form ,Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../../JS/ACTIONS/contact";
import {useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [newContact, SetNewContact] = useState({});
  const handleChange = (e) => {
    SetNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    dispatch(addContact(newContact));
    navigate('/contactlist')
  };
  return (
    <div>
                        <Helmet>
                <meta charSet="utf-8" />
                <title>AddContact</title>
                <link rel="canonical" />
            </Helmet>
      <h1>Add contacts</h1>
      <Form.Label>Name: </Form.Label>
      <Form.Control type="text" placeholder="Enter name" onChange={handleChange} name='name' />
      <Form.Label>E-mail: </Form.Label>
      <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name='email' />
      <Form.Label>Phone: </Form.Label>
      <Form.Control type="text" placeholder="Enter your phone" onChange={handleChange} name='phone' />
      <Button variant="primary" onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default Add;