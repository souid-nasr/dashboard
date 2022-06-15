import React,{useState,useEffect,useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link,useLocation  } from "react-router-dom";
import './profile.css'
import {Table} from '@themesberg/react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/Sidebar";
import { allInstitutions } from "../../Redux/Actions/InstitutionActions"
import { allStudents } from "../../Redux/Actions/StudentActions"
const ProfileModerator = () => {
    const location = useLocation();
    const moderator = location.moderator;
    const dispatch = useDispatch();
    const getStudentsList = () => dispatch(allStudents());
    const students = useSelector(
      (state) => state.studentReducer.data
    );
    useEffect(() => {
      getStudentsList();
    })
      //************************************ */
      //************************************ */
      ;
      const [studentList, setStudentList] = useState([]);

    useEffect(() => {
      setStudentList(students);
    }, []);

    const getInstitutionsList = () =>  setTimeout(() => {
      // ... even asynchronously!
      dispatch(allInstitutions())
    }, 1) ;
    // const getInstitutionsList = () => dispatch(allInstitutions());
    const data = useSelector(
      (state) => state.institutionReducer.data
    );
    useEffect(() => {
      getInstitutionsList();
    })
      //************************************ */
      ;
      const [institutionList, setInstitutionList] = useState([]);
      const [selectedCountry, setSelectedCountry] = useState();
    // Add default value on page load country 
    useEffect(() => {
      setInstitutionList(data);
    }, []);
    console.log(institutionList)
    // Function to get filtered list
    function getFilteredList() {
      return institutionList.filter((item) => item.creator === moderator.email)
    }
    var filteredList = useMemo(getFilteredList, [moderator.email, institutionList]);
    console.log(moderator.email)
    function getFilteredStudentList() {
      return studentList.filter((item) => item.creator === moderator.email)
    }
    var filteredListStudent = useMemo(getFilteredStudentList, [moderator.email, studentList]);
    console.log(moderator.email)
  return (
    <div>
<Sidebar/>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={moderator.photo}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{moderator.firstName} {moderator.lastName}</span>
              <span className="userShowUserTitle">{moderator.profession}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            {/* <div className="userShowInfo">

              <span className="userShowInfoTitle">annabeck99</span>
            </div> */}
            <div className="userShowInfo">
            <span className="userShowUserTitle">Birthday:</span>
              <span className="userShowInfoTitle">{moderator.birthday}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <span className="userShowUserTitle">Phone:</span>
              <span className="userShowInfoTitle" >{moderator.phone}</span>
            </div>
            <div className="userShowInfo">
            <span className="userShowUserTitle">Email:</span>
              <span className="userShowInfoTitle">{moderator.email}</span>
            </div>
            <div className="userShowInfo">
            <span className="userShowUserTitle">Nationality:</span>
              <span className="userShowInfoTitle" >{moderator.nationality}</span>
            </div>
<div>
  <span className="userShowTitle">Individual Statistics</span>
<Table hover className="user-table align-items-center" >

<thead>
            <tr size="15sm">
              <th className="border-bottom">Institution</th>
              <th className="border-bottom">Student</th>
            </tr>
          </thead>
          
            <tbody >
              <tr>
                <td>{filteredList.length}</td>
                <td>{filteredListStudent.length}</td>
              </tr>
            </tbody>
</Table>          
</div>
            
              
          </div>
          </div>
          </div>
        </div>
  );
};
export default ProfileModerator;

//icon