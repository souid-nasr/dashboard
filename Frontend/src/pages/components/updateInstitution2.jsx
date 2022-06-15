import React from 'react'
import { Modal } from "react-bootstrap";
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import FileBase64 from 'react-file-base64';

// Material Dashboard 2 React components

// Authentication layout components

// redux
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import {editInstitute}from "../../Redux/Actions/InstitutionActions"
import{useState,useEffect}from 'react'

function UpdateInstitution(props) {


  const courses = ["Accounting","Art",
    "Biology",
    "Business",
    "Chemistry",
    "Computing",
    "Counselling",
    "Criminology",
    "Design",
    "Economics",
    "Education",
    "Engineering",
    "English",
    "Environment",
    "Geography",
    "Health",
    "History",
    "Languages",
    "Law",
    "Marketing",
    "Mathematics",
    "Music",
    "Nursing",
    "Philosophy",
    "Physics",
    "Politics",
    "Psychology",
    "Religious",
    "Science",
    "Sociology",
    "Software",
    "Sport",
    "Statistics"]
    const [Edited, setEdited] = useState(props.institution);
    const updateID = props.id;

	const dispatch = useDispatch();

// const [data, setData] = useState({
//     logo: null,
//             name: '',
//             description1: '',

//             degree:'',
//             subject:'',
//             course:'',
//             country:''        
// })
const [error, setError] = useState("");
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => {
    setShow(true);
  };
const handleChange = (e) => {
    setEdited({ ...Edited, [e.target.name]: e.target.value });
};

const handleSave = (e) => {
    setShow(false);
    alert(`"${updateID}" was updated successfully!`);
    //***********dispatch */
    dispatch(editInstitute(updateID, Edited));

  };
  return (
      <div>


<div>
      <Button
        variant="outline-success"
        className="btn1"
        onClick={handleShow}
      >
        Edit
      </Button>
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Edit University</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form className="addProductForm"style={{ width: "30rem", margin: "auto" }}>
      <div className="FormLeft">
      <div className="addProductItem">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Degree</Form.Label>
          <Form.Control
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
        <Form.Label>Courses</Form.Label>
        <div class="radio-containeres-univ">
        {courses.map((institution) => (
                        <div className="radiouniv">
                            <input onChange={handleChange} type="radio" id="windows"
                                name={institution} value={institution}
                            />
                            <label className="labels">{institution}</label>
                        </div>
        ))}
                    </div>
                    </div>
        <div className="addProductItem">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            name="country"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>description1</Form.Label>
          <Form.Control
            type="text"
            placeholder="description1"
            name="description1"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>description2</Form.Label>
          <Form.Control
            type="text"
            placeholder="description2"
            name="description2"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Group</Form.Label>
          <Form.Control
            type="text"
            placeholder="Group"
            name="group"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Creator</Form.Label>
          <Form.Control
            type="text"
            placeholder="Creator"
            name="creator"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Logo</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setEdited({ ...Edited, logoInst: base64 })}
            name="logoInst"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <Form.Label>Group Logo</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setEdited({ ...Edited, image: base64 })}
            name="groupLogo"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <Form.Label>Country Image</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setEdited({ ...Edited, image: base64 })}
            name="image"
            onChange={handleChange}/>
        </div>
        </div>
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
    </div>
    );
}

export default UpdateInstitution;