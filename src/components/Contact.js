import React from "react";
import { useDispatch } from "react-redux";
import { setEditStatus, deleteContact } from "../features/contact/contactSlice";

const Contact = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="contact-card col-12 mb-3">
      <div className="row pb-1">
        <div className="initial h1 text-primary col-2 d-flex justify-content-center align-items-center">
          <p>{user.name.toUpperCase().charAt(0)}</p>
        </div>
        <div className="col-8 gx-0">
          <p className="card-name m-0">{user.name}</p>
          <p className="card-contact m-0 text-success fw-bold">
            {user.contact}
          </p>
          <p className="card-email m-0">{user.email}</p>
        </div>
        <div className="col-2 gx-0">
          <button
            className="btn btn-sm btn-primary mb-1"
            onClick={() => dispatch(setEditStatus(user))}
          >
            edit
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => dispatch(deleteContact(user.id))}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
