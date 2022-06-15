import React, {useState,useEffect}  from 'react'
import { addModerator } from "./../../Redux/Actions/AdminActions";
import { useDispatch } from "react-redux";
import FileBase64 from 'react-file-base64';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
const NewModerator = () => {
        const [newModerator, setNewModerator] = useState()
        const handleChange = (e) => {
          e.preventDefault();
            setNewModerator({ ...newModerator, [e.target.name]: e.target.value });
        };
        const dispatch = useDispatch();
        const submitHandler = (e) => {
            e.preventDefault();
            dispatch(addModerator(newModerator));
            alert(" Moderator was added successfully!");
          };
  return (
    <div>
    <Sidebar/>
    <Navbar/>
        <Form className="addProductForm"style={{ width: "30rem", margin: "auto" }}>
      <div className="FormLeft">
      <div className="addProductItem">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="text"
            placeholder="Birthday"
            name="birthday"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nationality"
            name="nationality"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Profession"
            name="profession"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Password</Form.Label>
          
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Photo</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setNewModerator({ ...newModerator, photo: base64 })}
            name="photo"
            onChange={handleChange}/>
        </div>
        </div>
      <Button variant="primary" type="submit"onClick={submitHandler}>Save All</Button>
    </Form>
    </div>
  )
}

export default NewModerator