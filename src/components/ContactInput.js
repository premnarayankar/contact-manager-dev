import React, { useEffect, useState } from "react";
import { addContact, editContact } from "../features/contact/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const ContactInput = () => {
  const dispatch = useDispatch();
  const editStatus = useSelector((state) => state.contact.editStatus.status);
  const editData = useSelector((state) => state.contact.editStatus.data);

  const [contact, setContact] = useState({
    id: 0,
    name: "",
    contact: "",
    email: "",
  });

  const [edit, setEdit] = useState({
    id: 0,
    name: "",
    contact: "",
    email: "",
  });

  useEffect(() => {
    if (editStatus) {
      setEdit({
        id: editData.id,
        name: editData.name,
        contact: editData.contact,
        email: editData.email,
      });
    }
  }, [editStatus]);

  const inputHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!editStatus) {
      const newContact = { ...contact, id: Date.now() };
      dispatch(addContact(newContact));
      setContact({ id: 0, name: "", contact: "", email: "" });
    } else {
      const edited = { ...edit, id: editData.id };
      dispatch(editContact(edited));
    }
  };

  const editHandler = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h1 className="display-5 text-success text-center ">
        {editStatus ? "Edit Contact" : "Create New Contact"}
      </h1>

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={editStatus ? edit.name : contact.name}
            onChange={(e) => (editStatus ? editHandler(e) : inputHandler(e))}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact No
          </label>
          <input
            type={"number"}
            name="contact"
            id="name"
            className="form-control"
            placeholder="Contact no"
            value={editStatus ? edit.contact : contact.contact}
            onChange={(e) => (editStatus ? editHandler(e) : inputHandler(e))}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={editStatus ? edit.email : contact.email}
            onChange={(e) => (editStatus ? editHandler(e) : inputHandler(e))}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">
            {editStatus ? "Edit Contact" : "Save Contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInput;
