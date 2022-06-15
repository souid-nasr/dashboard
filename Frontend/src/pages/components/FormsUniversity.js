
import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {INSTITUTION_CREATE_RESET} from '../../Redux/constants/InstitutionConstants'
import { createInstitution } from "./../../Redux/Actions/InstitutionActions";
import { toast } from "react-toastify";
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const FormsUniversity = () => {

    const [name, setName] = useState("");
    const [institutionType, setInstitutionType] = useState("");
    const [subject, setSubject] = useState("");
    const [continent, setContinent] = useState("");
    const [country, setCountry] = useState("");
    const [logo, setLogo] = useState("");
    const [countryImage, setCountryImage] = useState("");
    const dispatch = useDispatch();

    const institutionCreate = useSelector((state) => state.institutionCreate);
    const { loading, error, institution } = institutionCreate;

    useEffect(() => {
        if (institution) {
          dispatch({ type: INSTITUTION_CREATE_RESET });
          setName("");
          setInstitutionType("");
          setSubject("");
          setContinent("")
          setCountry("");
          setCountryImage("");
          setLogo("")
        }
      }, [institution, dispatch]);

      const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createInstitution(name, institutionType, subject, continent,country,countryImage,logo));
      };
    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
                <h5 className="mb-4">University information</h5>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label> Name</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)}   type="text" placeholder="university name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="lastName">
                                <Form.Label>Degree</Form.Label>
                                <Form.Select defaultValue="0" value={institutionType} onChange={(e) => setInstitutionType(e.target.value)} >
                                    <option value="University"> University </option>
                                    <option value="Institute Of Language"> Institute Of Language </option>
                                    
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col md={6} className="mb-3">
                            <Form.Group id="lastName">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control value={subject} onChange={(e) => setSubject(e.target.value)}   type="text" placeholder="university subject" />
                            </Form.Group>
                        </Col>

                        <Col md={6} className="mb-3">
                            <Form.Group id="gender">
                                <Form.Label>Continent</Form.Label>
                                <Form.Select value={continent} onChange={(e) => setContinent(e.target.value)} >
                                    <option > Africa </option>
                                    <option > Asia </option>
                                    <option > Americas </option>
                                    <option > Australia </option>
                                    <option > Europe </option>
                                    
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Form.Group id="gender">
                                <Form.Label>Country</Form.Label>
                                <Form.Select defaultValue="0" value={country}onChange={(e) => setCountry(e.target.value)} >
                                    <option > Afghanistan </option>
                                    <option > Albania </option>
                                    <option > Algeria </option>
                                    <option > American Samoa </option>
                                    <option> Andorra </option>
                                    <option > Angola </option>
                                    <option > Antigua and Barbuda </option>
                                    <option > Argentina </option>
                                    <option > Armenia </option>
                                    <option > Australia </option>
                                    <option > Austria </option>
                                    <option > Azerbaijan </option>
                                    <option > Bahamas </option>
                                    <option > Bahrain </option>
                                    <option > Bangladesh </option>
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
                                    <option value="Palestine"> Palestine </option>
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
                    </Row>
                    <Row className="align-items-center">
                    {/* <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Course</Form.Label>
                                <Form.Control onChange={(e) => setName(e.target.value)} value={}  type="text" placeholder="university course" />
                            </Form.Group>
                     </Col> */}
                     {/* <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Description 1</Form.Label>
                                <Form.Control onChange={(e) => setName(e.target.value)} value={}  type="text" placeholder="description 1" />
                            </Form.Group>
                     </Col> */}
                    </Row>
                    <Row>
                    {/* <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Description 2</Form.Label>
                                <Form.Control onChange={(e) => setName(e.target.value)} value={}  type="text" placeholder="description 2" />
                            </Form.Group>
                     </Col> */}
                     {/* <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Description 3</Form.Label>
                                <Form.Control onChange={(e) => setName(e.target.value)} value={}  type="text" placeholder="description 3" />
                            </Form.Group>
                     </Col> */}

                     {/* <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Description 4</Form.Label>
                                <Form.Control onChange={(e) => setName(e.target.value)} value={}  type="text" placeholder="description 4" />
                            </Form.Group>
                     </Col> */}

                     <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control   type="file" placeholder="Logo" onChange={(e) => setLogo(e.target.value)} value={logo} />
                            </Form.Group>
                     </Col>
                     <Col md={6} className="mb-3">
                            <Form.Group id="firstName">
                                <Form.Label>Image For Country</Form.Label>
                                <Form.Control  type="file" placeholder="Logo" value={countryImage}onChange={(e) => setCountryImage(e.target.value)} />
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
