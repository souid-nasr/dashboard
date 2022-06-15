import React, { useState, useEffect } from "react";
import {allUniversities} from "../Redux/Actions/UniversityActions"
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


// import DeleteUniversity from "./deleteUniversity";
// import EditUniversity from "./edit2";

function universities() {
    const UniversityErrors = useSelector((state) => state.universityReducer.errors);

    const dispatch = useDispatch();
  
    const getUniversitiesList = () => dispatch(allUniversities());
    const data = useSelector(
      (state) => state.universityReducer.data
    );
  
    useEffect(() => {
      getUniversitiesList();
    })

  return (
    <div>


        <Table  striped bordered hover>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th >Country</th>
              <th>Course</th>
              <th>Degree</th>
              <th>Subject</th>
              {/* <th>Description1</th>
              <th>Description2</th>
              <th>Description3</th>
              <th>Description4</th> */}
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>{el.logo}</td>
                <td>{el.name}</td>
                <td>{el.country}</td>
                <td>{el.degree}</td>
                <td>{el.course}</td>
                <td>{el.subject}</td>
                {/* <td>{el.description1}</td>
                <td>{el.description2}</td>
                <td>{el.description3}</td>
                <td>{el.description4}</td> */}
                <td>
                  <div className="actionBtn">
                    {/* <EditUniversity university={el} id={el._id} />
                    <DeleteUniversity id={el._id} /> */}
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
  
    </div>
  )
}

export default universities