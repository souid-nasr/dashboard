import React from "react";

import { useDispatch, useSelector} from "react-redux";
import {deleteInstitute} from "../Redux/Actions/InstitutionActions"
import {deleteStudent} from "../Redux/Actions/StudentActions"
import {deleteModerator} from "../Redux/Actions/AdminActions"
export const DeleteInstitution = (props) => {
  const deleteID = props.id;
  const deleteItem = props.institution;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteInstitute(deleteID))
    alert(`"${deleteItem}" was deleted successfully!`);
    
  };
  return (
    <div>
      <button variant="outline-danger"  className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export const DeleteStudent = (props) => {
  const deleteID = props.id;
  const deleteItem = props.student;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteStudent(deleteID))
    alert(`"${deleteItem}" was deleted successfully!`);
    
  };
  return (
    <div>
      <button variant="outline-danger"  className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export const DeleteModerator = (props) => {
  const deleteID = props.id;
  const deleteItem = props.moderator;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteModerator(deleteID))
    alert(`"${deleteItem}" was deleted successfully!`);
    
  };
  return (
    <div>
      <button variant="outline-danger"  className='btn btn-danger' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};