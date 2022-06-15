import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowDown, faArrowUp, faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Image, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup,Form ,InputGroup} from '@themesberg/react-bootstrap';
import { pageTraffic, pageRanking } from "../data/tables";
import {faSearch } from "@fortawesome/free-solid-svg-icons";
import commands from "../data/commands";
import FormsStudentUpdates from "./NewStudent"
import Sidebar from './Sidebar';
import Navbar from './Navbar';
//REDUX
import React, { useState, useEffect,useMemo  } from "react";
import { Link } from "react-router-dom"
import { allModerators } from "../Redux/Actions/AdminActions"
import { useDispatch, useSelector } from "react-redux";
import { DeleteModerator } from './delete';
// import {DeleteModerator} from './delete';
// import Axios from 'axios';
// import UpdateModerator from '../pages/components/updateModerator2.jsx';
export const ModeratorTable = (props) => {

    // update 
  
    // }
    //redux
   
  
    const dispatch = useDispatch();
  
    const getModeratorsList = () =>  setTimeout(() => {
      // ... even asynchronously!
      dispatch(allModerators())
    }, 1) ;
    // const getModeratorsList = () => dispatch(allModerators());
    const data = useSelector(
      (state) => state.adminReducer.data
    );
    useEffect(() => {
      getModeratorsList();
    })
      //************************************ */
      ;
      const [moderatorList, setModeratorList] = useState([]);
      const [selectedCountry, setSelectedCountry] = useState();
    // Add default value on page load country 
    // useEffect(() => {
    //   setModeratorList(data);
    // }, []);
    // console.log(moderatorList)
    // Function to get filtered list
    // function getFilteredList() {
    //   // Avoid filter when selectedCategory is null
    //   if (!selectedCountry) {
    //     return institutionList;
    //   }
    //   return institutionList.filter((item) => item.country === selectedCountry);
    // }
    // function handleCountryChange(event) {
    //   setSelectedCountry(event.target.value);
    // }
    // var filteredList = useMemo(getFilteredList, [selectedCountry, institutionList]);
    return (
  <>
  <Sidebar/>
      <Navbar/>
  {/* <div className="d-flex align-items-center">
              <Form className="navbar-search">
                <Form.Group id="topbarSearch">
                <select class="form-select my-2"
                name="category-list"
                id="category-list"
                onChange={handleCountryChange}
                
              >
                {data && data.map((institution) => (
                  <option value={institution.country} key={institution._id} >{institution.country}
                  </option>
                ))
                }
              </select>
                </Form.Group>
              </Form>
            </div> */}
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
              <th className="border-bottom">Photo</th>
                <th className="border-bottom">First Name</th>
                <th className="border-bottom">Last Name</th>
                <th className="border-bottom">Email</th>
                <th className="border-bottom">Password</th>
                <th className="border-bottom">Action</th>
              </tr>
            </thead>
            {data && data.map((moderator) => (
              <tbody key={moderator._id}>
                <tr>
                  <td><Link to={{pathname:"/admin/moderator/profile",moderator:moderator}}><img src={moderator.photo} style={{width:"60px"}}/></Link></td>
                  <td>{moderator.firstName}</td>
                  <td>{moderator.lastName}</td>
                  <td>{moderator.email}</td>
                  <td>{moderator.password}</td>
                  {/* <td><img src={institution.groupLogo} style={{width:"60px"}}/></td> */}
                  <td>
                 <DeleteModerator id={moderator._id} moderator={moderator.firstName} />

                    
                  </td>
  
                </tr>
              </tbody>
            ))}
  
          </Table>
  
        </Card.Body>
      </Card>
      </>
    );
  };
  