import React, {useState,useEffect}  from 'react'
import './newInstitution.css'
import { addInstitution } from "./../../Redux/Actions/InstitutionActions";
import { addCourse } from "./../../Redux/Actions/CourseActions";
import { useDispatch } from "react-redux";
import FileBase64 from 'react-file-base64';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
const NewInstitution = () => {
        const [newInstitution, setNewInstitution] = useState()
        const [newCourse, setNewCourse] = useState()
        const handleChange = (e) => {
          e.preventDefault();
            setNewInstitution({ ...newInstitution, [e.target.name]: e.target.value });
        }
        // const [formValues, setFormValues] = useState([])

        // let handleChange2 = (i, e) => {
        //     let newFormValues = [...formValues];
        //     newFormValues[i][e.target.name] = e.target.value;
        //     setFormValues(newFormValues);
        //   }
        
        // let addFormFields = () => {
        //     setFormValues([...formValues])
        //   }
        
        // let removeFormFields = (i) => {
        //     let newFormValues = [...formValues];
        //     newFormValues.splice(i, 1);
        //     setFormValues(newFormValues)
        // }
        
        // let handleSubmit = (event) => {
        //     event.preventDefault();
        //     alert(JSON.stringify(formValues));
        // }


        const handleChange2 = (e) => {
          e.preventDefault();
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value })
        }
          const [courseList, setCourseList] = useState([{ course: "" }]);
          const [formValues, setFormValues] = useState([{ title:""}])

          const handleCourseChange = (e, index) => {
            const { name, value } = e.target;
            const list = [...courseList];
            list[index][name] = value;
            setCourseList(list);
          };

          const handleCourseRemove = (index) => {
            const list = [...courseList];
            list.splice(index, 1);
            setCourseList(list);
          };
        
          const handleCourseAdd = () => {
            setCourseList([...courseList, { course: "" }]);
          };


          const dispatch = useDispatch();
          const submitHandler = (e) => {
              e.preventDefault();
              dispatch(addInstitution(newInstitution))
              dispatch(addCourse(formValues))
              alert(JSON.stringify(formValues))
            };
  return (
    <div>
    <Sidebar/>
    <Navbar/>
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
        <div className="form-field">
        <label htmlFor="course">Course(s)</label>
        {/* {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <input type="text" name="title" value={element.title || ""} onChange={e => handleChange2(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
        
          </div> */}

        {courseList.map((singlecourse, index) => (
          <div key={index} className="courses">
            <div className="first-division">
              <input
                name={singlecourse}
                type="text"
                id="course"
                onChange={handleChange}
              />
              {courseList.length - 1 === index && courseList.length < 4 && (
                <button
                  type="button"
                  onClick={handleCourseAdd}
                  className="add-btn"
                >
                  <span>+</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {courseList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleCourseRemove(index)}
                  className="remove-btn"
                >
                  <span>-</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
        <div className="addProductItem">
          <Form.Label>Country</Form.Label>
          <Form.Select name="country" onChange={handleChange}
                >
                  <option value="Afghanistan"> Afghanistan </option>
                  <option value="Albania"> Albania </option>
                  <option value="Algeria"> Algeria </option>
                  <option value="American Samoa"> American Samoa </option>
                  <option value="Andorra"> Andorra </option>
                  <option value="Angola"> Angola </option>
                  <option value="Antigua and Barbuda"> Antigua and Barbuda </option>
                  <option value="Argentina"> Argentina </option>
                  <option value="Armenia"> Armenia </option>
                  <option value="Australia"> Australia </option>
                  <option value="Austria"> Austria </option>
                  <option value="Azerbaijan"> Azerbaijan </option>
                  <option value="Bahamas"> Bahamas </option>
                  <option value="Bahrain"> Bahrain </option>
                  <option value="Bangladesh"> Bangladesh </option>
                  <option value="Barbados"> Barbados </option>
                  <option value="Belarus"> Belarus </option>
                  <option value="Belgium"> Belgium </option>
                  <option value="Belize"> Belize </option>
                  <option value="Benin"> Benin </option>
                  <option value="Bermuda"> Bermuda </option>
                  <option value="Bhutan"> Bhutan </option>
                  <option value="Bolivia"> Bolivia </option>
                  <option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>
                  <option value="Botswana"> Botswana </option>
                  <option value="Brazil"> Brazil </option>
                  <option value="Brunei"> Brunei </option>
                  <option value="Bulgaria"> Bulgaria </option>
                  <option value="Burkina Faso"> Burkina Faso </option>
                  <option value="Burundi"> Burundi </option>
                  <option value="Cambodia"> Cambodia </option>
                  <option value="Cameroon"> Cameroon </option>
                  <option value="Canada"> Canada </option>
                  <option value="Caribbean"> Caribbean </option>
                  <option value="Cape Verde"> Cape Verde </option>
                  <option value="Cayman Islands"> Cayman Islands </option>
                  <option value="Central African Republic"> Central African Republic </option>
                  <option value="Chad"> Chad </option>
                  <option value="Chile"> Chile </option>
                  <option value="China"> China </option>
                  <option value="Colombia"> Colombia </option>
                  <option value="Comoros"> Comoros </option>
                  <option value="Costa Rica"> Costa Rica </option>
                  <option value="Cote d’Ivoire"> Cote d’Ivoire </option>
                  <option value="Croatia"> Croatia </option>
                  <option value="Cuba"> Cuba </option>
                  <option value="Cyprus"> Cyprus </option>
                  <option value="Czech Republic"> Czech Republic </option>
                  <option value="Democratic Republic of the Congo"> Democratic Republic of the Congo </option>
                  <option value="Denmark"> Denmark </option>
                  <option value="Djibouti"> Djibouti </option>
                  <option value="Dominica"> Dominica </option>
                  <option value="Dominican Republic"> Dominican Republic </option>
                  <option value="East Timor"> East Timor </option>
                  <option value="Ecuador"> Ecuador </option>
                  <option value="Egypt"> Egypt </option>
                  <option value="El Salvador"> El Salvador </option>
                  <option value="Equatorial Guinea"> Equatorial Guinea </option>
                  <option value="Eritrea"> Eritrea </option>
                  <option value="Estonia"> Estonia </option>
                  <option value="Ethiopia"> Ethiopia </option>
                  <option value="Fiji"> Fiji </option>
                  <option value="Finland"> Finland </option>
                  <option value="France"> France </option>
                  <option value="French Polynesia"> French Polynesia </option>
                  <option value="Gabon"> Gabon </option>
                  <option value="Georgia"> Georgia </option>
                  <option value="Germany"> Germany </option>
                  <option value="Ghana"> Ghana </option>
                  <option value="Greece"> Greece </option>
                  <option value="Greenland"> Greenland </option>
                  <option value="Grenada"> Grenada </option>
                  <option value="Guam"> Guam </option>
                  <option value="Guatemala"> Guatemala </option>
                  <option value="Guinea"> Guinea </option>
                  <option value="Guinea-Bissau"> Guinea-Bissau </option>
                  <option value="Guyana"> Guyana </option>
                  <option value="Haiti"> Haiti </option>
                  <option value="Holland"> Holland </option>
                  <option value="Honduras"> Honduras </option>
                  <option value="Hong Kong"> Hong Kong </option>
                  <option value="Hungary"> Hungary </option>
                  <option value="Iceland"> Iceland </option>
                  <option value="India"> India </option>
                  <option value="Indonesia"> Indonesia </option>
                  <option value="Iran"> Iran </option>
                  <option value="Iraq"> Iraq </option>
                  <option value="Ireland"> Ireland </option>
                  <option value="Israel"> Israel </option>
                  <option value="Italy"> Italy </option>
                  <option value="Jamaica"> Jamaica </option>
                  <option value="Japan"> Japan </option>
                  <option value="Jordan"> Jordan </option>
                  <option value="Kazakhstan"> Kazakhstan </option>
                  <option value="Kenya"> Kenya </option>
                  <option value="Kiribati"> Kiribati </option>
                  <option value="Kosovo"> Kosovo </option>
                  <option value="Kuwait"> Kuwait </option>
                  <option value="Kyrgyzstan"> Kyrgyzstan </option>
                  <option value="Laos"> Laos </option>
                  <option value="Latvia"> Latvia </option>
                  <option value="Lebanon"> Lebanon </option>
                  <option value="Lesotho"> Lesotho </option>
                  <option value="Liberia"> Liberia </option>
                  <option value="Libya"> Libya </option>
                  <option value="Liechtenstein"> Liechtenstein </option>
                  <option value="Lithuania"> Lithuania </option>
                  <option value="Luxembourg"> Luxembourg </option>
                  <option value="Macedonia"> Macedonia </option>
                  <option value="Madagascar"> Madagascar </option>
                  <option value="Malawi"> Malawi </option>
                  <option value="Malaysia"> Malaysia </option>
                  <option value="Maldives"> Maldives </option>
                  <option value="Mali"> Mali </option>
                  <option value="Malta"> Malta </option>
                  <option value="Marshall Islands"> Marshall Islands </option>
                  <option value="Mauritania"> Mauritania </option>
                  <option value="Mauritius"> Mauritius </option>
                  <option value="Mexico"> Mexico </option>
                  <option value="Micronesia"> Micronesia </option>
                  <option value="Moldova"> Moldova </option>
                  <option value="Monaco"> Monaco </option>
                  <option value="Mongolia"> Mongolia </option>
                  <option value="Montenegro"> Montenegro </option>
                  <option value="Morocco"> Morocco </option>
                  <option value="Mozambique"> Mozambique </option>
                  <option value="Myanmar"> Myanmar </option>
                  <option value="Namibia"> Namibia </option>
                  <option value="Nauru"> Nauru </option>
                  <option value="Nepal"> Nepal </option>
                  <option value="Netherlands"> Netherlands </option>
                  <option value="New Zealand"> New Zealand </option>
                  <option value="Nicaragua"> Nicaragua </option>
                  <option value="Niger"> Niger </option>
                  <option value="Nigeria"> Nigeria </option>
                  <option value="North Korea"> North Korea </option>
                  <option value="Northern Mariana Islands"> Northern Mariana Islands </option>
                  <option value="Norway"> Norway </option>
                  <option value="Oman"> Oman </option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Palau"> Palau </option>
                  <option value="Palestine, State of"> Palestine, State of </option>
                  <option value="Panama"> Panama </option>
                  <option value="Papua New Guinea"> Papua New Guinea </option>
                  <option value="Paraguay"> Paraguay </option>
                  <option value="Peru"> Peru </option>
                  <option value="Philippines"> Philippines </option>
                  <option value="Poland"> Poland </option>
                  <option value="Portugal"> Portugal </option>
                  <option value="Puerto Rico"> Puerto Rico </option>
                  <option value="Qatar"> Qatar </option>
                  <option value="Romania"> Romania </option>
                  <option value="Russia"> Russia </option>
                  <option value="Rwanda"> Rwanda </option>
                  <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
                  <option value="Saint Lucia"> Saint Lucia </option>
                  <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
                  <option value="Samoa"> Samoa </option>
                  <option value="San Marino"> San Marino </option>
                  <option value="Sao Tome and Principe"> Sao Tome and Principe </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="Senegal"> Senegal </option>
                  <option value="Serbia and Montenegro"> Serbia and Montenegro </option>
                  <option value="Seychelles"> Seychelles </option>
                  <option value="Sierra Leone"> Sierra Leone </option>
                  <option value="Singapore"> Singapore </option>
                  <option value="Slovakia"> Slovakia </option>
                  <option value="Slovenia"> Slovenia </option>
                  <option value="Solomon Islands"> Solomon Islands </option>
                  <option value="Somalia"> Somalia </option>
                  <option value="South Africa"> South Africa </option>
                  <option value="South Korea"> South Korea </option>
                  <option value="South Sudan"> South Sudan </option>
                  <option value="Spain"> Spain </option>
                  <option value="Sri Lanka"> Sri Lanka </option>
                  <option value="Sudan"> Sudan </option>
                  <option value="Suriname"> Suriname </option>
                  <option value="Swaziland"> Swaziland </option>
                  <option value="Sweden"> Sweden </option>
                  <option value="Switzerland"> Switzerland </option>
                  <option value="Syria"> Syria </option>
                  <option value="Taiwan"> Taiwan </option>
                  <option value="Tajikistan"> Tajikistan </option>
                  <option value="Tanzania"> Tanzania </option>
                  <option value="Thailand"> Thailand </option>
                  <option value="The Gambia"> The Gambia </option>
                  <option value="Timor"> Timor </option>
                  <option value="Togo"> Togo </option>
                  <option value="Tonga"> Tonga </option>
                  <option value="Trinidad and Tobago"> Trinidad and Tobago </option>
                  <option value="Tunisia"> Tunisia </option>
                  <option value="Turkey"> Turkey </option>
                  <option value="Turkmenistan"> Turkmenistan </option>
                  <option value="Tuvalu"> Tuvalu </option>
                  <option value="Uganda"> Uganda </option>
                  <option value="Ukraine"> Ukraine </option>
                  <option value="United Arab Emirates"> United Arab Emirates </option>
                  <option value="United Kingdom"> United Kingdom </option>
                  <option value="United States"> United States </option>
                  <option value="Uruguay"> Uruguay </option>
                  <option value="Uzbekistan"> Uzbekistan </option>
                  <option value="Vanuatu"> Vanuatu </option>
                  <option value="Vatican City"> Vatican City </option>
                  <option value="Venezuela"> Venezuela </option>
                  <option value="Vietnam"> Vietnam </option>
                  <option value="Virgin Islands, British"> Virgin Islands, British </option>
                  <option value="Virgin Islands, U.S."> Virgin Islands, U.S. </option>
                  <option value="Yemen"> Yemen </option>
                  <option value="Zambia"> Zambia </option>
                  <option value="Zimbabwe"> Zimbabwe </option>
                </Form.Select>
        
          {/* <Form.Control
            type="text"
            placeholder="Country"
            name="country"
            onChange={handleChange}
          /> */}
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
            placeholder="group"
            name="group"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <Form.Label>Logo</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setNewInstitution({ ...newInstitution, logo: base64 })}
            name="logo"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
        <Form.Label>Group Logo</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setNewInstitution({ ...newInstitution, logo: base64 })}
            name="groupLogo"
            onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <Form.Label>Country Image</Form.Label>
          <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setNewInstitution({ ...newInstitution, image: base64 })}
            name="image"
            onChange={handleChange}/>
        </div>
        </div>
      <Button variant="primary" type="submit"onClick={submitHandler}>Save All</Button>
    </Form>
    </div>
  )
}

export default NewInstitution