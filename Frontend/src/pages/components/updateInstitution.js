import React, {useState}  from 'react'
import { addInstitution } from "./../../Redux/Actions/InstitutionActions";
import { editInstitute } from "./../../Redux/Actions/InstitutionActions";
import { useDispatch, useSelector  } from "react-redux";
import FileBase64 from 'react-file-base64';

import { Form, Button} from '@themesberg/react-bootstrap';
const UpdateInstitution = (props) => {
    

    const updateID = props.id;
    const [Edited, setEdited] = useState(props.institution);
    const handleChange = (e) => {
      e.preventDefault();
      setEdited({ ...Edited, [e.target.name]: e.target.value });
    };
    const errors = useSelector((state) => state.institutionReducer.errors);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      //***********dispatch */
      e.preventDefault();
      dispatch(editInstitute(updateID, Edited))
    };
  return (
    <div>
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
            name="country"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>description2</Form.Label>
          <Form.Control
            type="text"
            placeholder="description2"
            name="country"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Logo</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setEdited({ ...Edited, logo: base64 })}
            name="logo"
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
      <Button variant="primary" type="submit"onClick={submitHandler}>Save All</Button>
    </Form>
    </div>
  )
}

export default UpdateInstitution