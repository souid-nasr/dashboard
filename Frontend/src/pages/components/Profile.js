import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faGraduationCap, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket,faBuilding } from "@fortawesome/free-solid-svg-icons";
import './profile.css'
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../../components/SidebarMod";

const Profile = () => {
  const [user,setUser]=useState({})
  const moderator = useSelector((state) => state.moderatorReducer.moderator);
  // useEffect(() => {
  //   setUser(moderator);
  // },[])
  // console.log(user)
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
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            {/* <div className="userShowInfo">
              <FontAwesomeIcon className="userShowIcon" icon={faChartPie} />
              <span className="userShowInfoTitle">annabeck99</span>
            </div> */}
            <div className="userShowInfo">
              <FontAwesomeIcon icon={faCalendarAlt} className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <FontAwesomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle" icon={faMapPin}>+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <FontAwesomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{moderator.email}</span>
            </div>
            <div className="userShowInfo">
              <FontAwesomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle" icon={faMapPin}>New York | USA</span>
            </div>
          </div>
          </div>
          </div>
        </div>
  );
};

export default Profile;