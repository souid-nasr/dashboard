import React, { useState ,useEffect} from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import {editStudent}from "../Redux/Actions/StudentActions"
import axios from "axios";

export const GeneralInfoForm = (props) => {
//   const [Edited, setEdited] = useState(props.student);
//   const updateID = props.id;
//   const [error, setError] = useState("");
// const dispatch = useDispatch();
//   const [birthday, setBirthday] = useState("");
//   const handleChange = (e) => {
//     setEdited({ ...Edited, [e.target.name]: e.target.value });
// };

// const handleSave = (e) => {
//     alert(`"${updateID}" was updated successfully!`);
//     //***********dispatch */
//     dispatch(editStudent(updateID, Edited));
//   };

  const [data, setData] = useState({
    firstName: "",
    lastName : "",
    studentName: "",
    // sexeName: "",
    // sexeNameone: "",
    dateName: "",
    nationalityName: "",
    nationalityName1: "",
    // sexeNametwo: "",
    // sexeNamethree: "",
    nationalityName2: "",
    adresseName: "",
    adresseName1: "",
    // cityName: "",
    stateName: "",
    postalName: "",
    nationalityName3: "",
    // sexeNamefour: "",
    // sexeNamefive: "",
    password: "",
    countryName: "",
    email: "",
    skypeName: "",
    // sexeNamesix: "",
    // sexeNameseven: "",
    // sexeNameheight: "",
    // sexeNamenine: "",
    // sexeNameten: "",
    // sexeNameeleven: "",
    // sexeNametweleve: "",
    // sexeNametherteen: "",
    // sexeNamefourteen: "",
    // sexeNamefivteen: "",
    // sexeNamesixteen: "",           
});
const [error, setError] = useState("");

const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:8080/api/userstudent";
        const { data: res } = await axios.post(url, data);
        console.log(res.message);
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Etudient information</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" 
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" 
                placeholder="Also your last name" 
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Student name as written on passport</Form.Label>
                <Form.Control type="text" 
                placeholder="Student Name"
                name="studentName"
                onChange={handleChange}
                value={data.studentName}
                required  />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="birthday">
                <Form.Label>Student Date of birth</Form.Label>
                <Datetime
                  timeFormat={false}
                  // onChange={setBirthday}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        type="text"
                        // value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        // onChange={() => { }} 
                        required
                        name="dateName"
                        onChange={handleChange}
                        value={data.dateName}
                        />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>

          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Student Nationality</Form.Label>
                <Form.Select defaultValue="0"
                 required
                 name="nationalityName"
                 onChange={handleChange}
                 value={data.nationalityName}
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
              </Form.Group>
            </Col>


            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Student domicile (where you currently live)</Form.Label>
                <Form.Select defaultValue="0"
                required
                name="nationalityName1"
                onChange={handleChange}
                value={data.nationalityName1}
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
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Student country of birth </Form.Label>
                <Form.Select defaultValue="0"
                required
                name="nationalityName2"
                onChange={handleChange}
                value={data.nationalityName2}
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
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Street Address</Form.Label>
                <Form.Control type="text"
                placeholder="Street Address"
                name="adresseName"
                onChange={handleChange}
                value={data.adresseName}
                required 
                />
              </Form.Group>
            </Col>

          </Row>
          <Row>

            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Street Address Line 2 </Form.Label>
                <Form.Control type="text" 
                   placeholder="Street Address Line 2"
                   name="adresseName1"
                   onChange={handleChange}
                   value={data.adresseName1}
                   required 
                   />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>State / Province </Form.Label>
                <Form.Control  type="text"
                 placeholder="State"
                 name="stateName"
                 onChange={handleChange}
                 value={data.stateName}
                 required
                 />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Postal / Zip Code </Form.Label>
                <Form.Control  type="text"
                  placeholder="Postal"
                  name="postalName"
                  onChange={handleChange}
                  value={data.postalName}
                  required
                  />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Country  </Form.Label>
                <Form.Select defaultValue="0"
                 required
                 name="nationalityName3"
                 onChange={handleChange}
                 value={data.nationalityName3}
                 >
                  <option value=""> Please Select </option>
                  <option value="United States"> United States </option>
                  <option value="Afghanistan"> Afghanistan </option>
                  <option value="Albania"> Albania </option>
                  <option value="Algeria"> Algeria </option>
                  <option value="American Samoa"> American Samoa </option>
                  <option value="Andorra"> Andorra </option>
                  <option value="Angola"> Angola </option>
                  <option value="Anguilla"> Anguilla </option>
                  <option value="Antigua and Barbuda"> Antigua and Barbuda </option>
                  <option value="Argentina"> Argentina </option>
                  <option value="Armenia"> Armenia </option>
                  <option value="Aruba"> Aruba </option>
                  <option value="Australia"> Australia </option>
                  <option value="Austria"> Austria </option>
                  <option value="Azerbaijan"> Azerbaijan </option>
                  <option value="The Bahamas"> The Bahamas </option>
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
                  <option value="Cape Verde"> Cape Verde </option>
                  <option value="Cayman Islands"> Cayman Islands </option>
                  <option value="Central African Republic"> Central African Republic </option>
                  <option value="Chad"> Chad </option>
                  <option value="Chile"> Chile </option>
                  <option value="China"> China </option>
                  <option value="Christmas Island"> Christmas Island </option>
                  <option value="Cocos (Keeling) Islands"> Cocos (Keeling) Islands </option>
                  <option value="Colombia"> Colombia </option>
                  <option value="Comoros"> Comoros </option>
                  <option value="Congo"> Congo </option>
                  <option value="Cook Islands"> Cook Islands </option>
                  <option value="Costa Rica"> Costa Rica </option>
                  <option value="Cote d'Ivoire"> Cote d'Ivoire </option>
                  <option value="Croatia"> Croatia </option>
                  <option value="Cuba"> Cuba </option>
                  <option value="Curacao"> Curacao </option>
                  <option value="Cyprus"> Cyprus </option>
                  <option value="Czech Republic"> Czech Republic </option>
                  <option value="Democratic Republic of the Congo"> Democratic Republic of the Congo </option>
                  <option value="Denmark"> Denmark </option>
                  <option value="Djibouti"> Djibouti </option>
                  <option value="Dominica"> Dominica </option>
                  <option value="Dominican Republic"> Dominican Republic </option>
                  <option value="Ecuador"> Ecuador </option>
                  <option value="Egypt"> Egypt </option>
                  <option value="El Salvador"> El Salvador </option>
                  <option value="Equatorial Guinea"> Equatorial Guinea </option>
                  <option value="Eritrea"> Eritrea </option>
                  <option value="Estonia"> Estonia </option>
                  <option value="Ethiopia"> Ethiopia </option>
                  <option value="Falkland Islands"> Falkland Islands </option>
                  <option value="Faroe Islands"> Faroe Islands </option>
                  <option value="Fiji"> Fiji </option>
                  <option value="Finland"> Finland </option>
                  <option value="France"> France </option>
                  <option value="French Polynesia"> French Polynesia </option>
                  <option value="Gabon"> Gabon </option>
                  <option value="The Gambia"> The Gambia </option>
                  <option value="Georgia"> Georgia </option>
                  <option value="Germany"> Germany </option>
                  <option value="Ghana"> Ghana </option>
                  <option value="Gibraltar"> Gibraltar </option>
                  <option value="Greece"> Greece </option>
                  <option value="Greenland"> Greenland </option>
                  <option value="Grenada"> Grenada </option>
                  <option value="Guadeloupe"> Guadeloupe </option>
                  <option value="Guam"> Guam </option>
                  <option value="Guatemala"> Guatemala </option>
                  <option value="Guernsey"> Guernsey </option>
                  <option value="Guinea"> Guinea </option>
                  <option value="Guinea-Bissau"> Guinea-Bissau </option>
                  <option value="Guyana"> Guyana </option>
                  <option value="Haiti"> Haiti </option>
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
                  <option value="Jersey"> Jersey </option>
                  <option value="Jordan"> Jordan </option>
                  <option value="Kazakhstan"> Kazakhstan </option>
                  <option value="Kenya"> Kenya </option>
                  <option value="Kiribati"> Kiribati </option>
                  <option value="North Korea"> North Korea </option>
                  <option value="South Korea"> South Korea </option>
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
                  <option value="Macau"> Macau </option>
                  <option value="Macedonia"> Macedonia </option>
                  <option value="Madagascar"> Madagascar </option>
                  <option value="Malawi"> Malawi </option>
                  <option value="Malaysia"> Malaysia </option>
                  <option value="Maldives"> Maldives </option>
                  <option value="Mali"> Mali </option>
                  <option value="Malta"> Malta </option>
                  <option value="Marshall Islands"> Marshall Islands </option>
                  <option value="Martinique"> Martinique </option>
                  <option value="Mauritania"> Mauritania </option>
                  <option value="Mauritius"> Mauritius </option>
                  <option value="Mayotte"> Mayotte </option>
                  <option value="Mexico"> Mexico </option>
                  <option value="Micronesia"> Micronesia </option>
                  <option value="Moldova"> Moldova </option>
                  <option value="Monaco"> Monaco </option>
                  <option value="Mongolia"> Mongolia </option>
                  <option value="Montenegro"> Montenegro </option>
                  <option value="Montserrat"> Montserrat </option>
                  <option value="Morocco"> Morocco </option>
                  <option value="Mozambique"> Mozambique </option>
                  <option value="Myanmar"> Myanmar </option>
                  <option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>
                  <option value="Namibia"> Namibia </option>
                  <option value="Nauru"> Nauru </option>
                  <option value="Nepal"> Nepal </option>
                  <option value="Netherlands"> Netherlands </option>
                  <option value="Netherlands Antilles"> Netherlands Antilles </option>
                  <option value="New Caledonia"> New Caledonia </option>
                  <option value="New Zealand"> New Zealand </option>
                  <option value="Nicaragua"> Nicaragua </option>
                  <option value="Niger"> Niger </option>
                  <option value="Nigeria"> Nigeria </option>
                  <option value="Niue"> Niue </option>
                  <option value="Norfolk Island"> Norfolk Island </option>
                  <option value="Turkish Republic of Northern Cyprus"> Turkish Republic of Northern Cyprus </option>
                  <option value="Northern Mariana"> Northern Mariana </option>
                  <option value="Norway"> Norway </option>
                  <option value="Oman"> Oman </option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Palau"> Palau </option>
                  <option value="Palestine"> Palestine </option>
                  <option value="Panama"> Panama </option>
                  <option value="Papua New Guinea"> Papua New Guinea </option>
                  <option value="Paraguay"> Paraguay </option>
                  <option value="Peru"> Peru </option>
                  <option value="Philippines"> Philippines </option>
                  <option value="Pitcairn Islands"> Pitcairn Islands </option>
                  <option value="Poland"> Poland </option>
                  <option value="Portugal"> Portugal </option>
                  <option value="Puerto Rico"> Puerto Rico </option>
                  <option value="Qatar"> Qatar </option>
                  <option value="Republic of the Congo"> Republic of the Congo </option>
                  <option value="Romania"> Romania </option>
                  <option value="Russia"> Russia </option>
                  <option value="Rwanda"> Rwanda </option>
                  <option value="Saint Barthelemy"> Saint Barthelemy </option>
                  <option value="Saint Helena"> Saint Helena </option>
                  <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>
                  <option value="Saint Lucia"> Saint Lucia </option>
                  <option value="Saint Martin"> Saint Martin </option>
                  <option value="Saint Pierre and Miquelon"> Saint Pierre and Miquelon </option>
                  <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>
                  <option value="Samoa"> Samoa </option>
                  <option value="San Marino"> San Marino </option>
                  <option value="Sao Tome and Principe"> Sao Tome and Principe </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="Senegal"> Senegal </option>
                  <option value="Serbia"> Serbia </option>
                  <option value="Seychelles"> Seychelles </option>
                  <option value="Sierra Leone"> Sierra Leone </option>
                  <option value="Singapore"> Singapore </option>
                  <option value="Slovakia"> Slovakia </option>
                  <option value="Slovenia"> Slovenia </option>
                  <option value="Solomon Islands"> Solomon Islands </option>
                  <option value="Somalia"> Somalia </option>
                  <option value="Somaliland"> Somaliland </option>
                  <option value="South Africa"> South Africa </option>
                  <option value="South Ossetia"> South Ossetia </option>
                  <option value="South Sudan"> South Sudan </option>
                  <option value="Spain"> Spain </option>
                  <option value="Sri Lanka"> Sri Lanka </option>
                  <option value="Sudan"> Sudan </option>
                  <option value="Suriname"> Suriname </option>
                  <option value="Svalbard"> Svalbard </option>
                  <option value="eSwatini"> eSwatini </option>
                  <option value="Sweden"> Sweden </option>
                  <option value="Switzerland"> Switzerland </option>
                  <option value="Syria"> Syria </option>
                  <option value="Taiwan"> Taiwan </option>
                  <option value="Tajikistan"> Tajikistan </option>
                  <option value="Tanzania"> Tanzania </option>
                  <option value="Thailand"> Thailand </option>
                  <option value="Timor-Leste"> Timor-Leste </option>
                  <option value="Togo"> Togo </option>
                  <option value="Tokelau"> Tokelau </option>
                  <option value="Tonga"> Tonga </option>
                  <option value="Transnistria Pridnestrovie"> Transnistria Pridnestrovie </option>
                  <option value="Trinidad and Tobago"> Trinidad and Tobago </option>
                  <option value="Tristan da Cunha"> Tristan da Cunha </option>
                  <option value="Tunisia"> Tunisia </option>
                  <option value="Turkey"> Turkey </option>
                  <option value="Turkmenistan"> Turkmenistan </option>
                  <option value="Turks and Caicos Islands"> Turks and Caicos Islands </option>
                  <option value="Tuvalu"> Tuvalu </option>
                  <option value="Uganda"> Uganda </option>
                  <option value="Ukraine"> Ukraine </option>
                  <option value="United Arab Emirates"> United Arab Emirates </option>
                  <option value="United Kingdom"> United Kingdom </option>
                  <option value="Uruguay"> Uruguay </option>
                  <option value="Uzbekistan"> Uzbekistan </option>
                  <option value="Vanuatu"> Vanuatu </option>
                  <option value="Vatican City"> Vatican City </option>
                  <option value="Venezuela"> Venezuela </option>
                  <option value="Vietnam"> Vietnam </option>
                  <option value="British Virgin Islands"> British Virgin Islands </option>
                  <option value="Isle of Man"> Isle of Man </option>
                  <option value="US Virgin Islands"> US Virgin Islands </option>
                  <option value="Wallis and Futuna"> Wallis and Futuna </option>
                  <option value="Western Sahara"> Western Sahara </option>
                  <option value="Yemen"> Yemen </option>
                  <option value="Zambia"> Zambia </option>
                  <option value="Zimbabwe"> Zimbabwe </option>
                  <option value="other"> Other </option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                 placeholder="Password"
                 className="input" 
                 name="password"
                 onChange={handleChange}
                 value={data.password}
                 required 
                 />
              </Form.Group>
            </Col> 

            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Country Code</Form.Label>
                <Form.Control type="text"
                 placeholder="Country Code"
                 name="countryName"
                 onChange={handleChange}
                 value={data.countryName}
                 required 
                 />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control  type="number" placeholder="+12-345 678 910" 
                 name="phonenumber"
                 onChange={handleChange}
                 value={data.phonenumber}
                 required 
                 />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@company.com"
                 name="email"
                 onChange={handleChange}
                 value={data.email}
                 required
                  />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Student skype id</Form.Label>
                <Form.Control type="text" 
                 placeholder="Student skype id"
                 name="skypeName"
                 onChange={handleChange}
                 value={data.skypeName}
                 required
                 />
              </Form.Group>
            </Col>

          </Row>

          <div className="mt-3">
            <Button variant="primary" type="submit">Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
