import React from 'react'
import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../JS/ACTIONS/contact'

const ContactCard = ({contact}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text> {contact.email}</Card.Text>
        <Card.Text>{contact.phone} </Card.Text>
        <Button variant="success" onClick={()=> navigate(`/edit/${contact._id}`)}>Edit</Button>
        <Button variant="danger" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard