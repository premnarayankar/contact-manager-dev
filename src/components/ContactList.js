import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import("./Contact"));

const ContactList = () => {
  const contacts = useSelector((state) => state.contact.value);

  const [sortedContacts, setSortedContacts] = useState([]);
  const [search, setSearch] = useState("");

  useMemo(() => {
    if (contacts.length > 0) {
      setSortedContacts(
        [...contacts].sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
      );
    }
  }, [contacts]);

  useMemo(() => {
    const sorted = [...contacts].filter(
      (searched) =>
        searched.name.toLowerCase().includes(search.toLowerCase()) ||
        searched.email.toLowerCase().includes(search.toLowerCase()) ||
        searched.contact.toString().toLowerCase().includes(search.toLowerCase())
    );
    setSortedContacts(
      sorted.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      )
    );
  }, [search]);

  return (
    <div className="container">
      <div
        className="pt-2 mb-4 border position-sticky top-0"
        style={{ background: "lightgreen" }}
      >
        <h1 className="display-5 text-center ">Contact list</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Search contacts and People"
          aria-label="contacts"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row mx-2">
        {contacts.length > 0 &&
          sortedContacts.map((contact, i) => (
            <Suspense
              key={i}
              fallback={
                <div
                  className="contact-card col-12 mb-3"
                  style={{ height: "70px", backgroundColor: "#eeeded" }}
                ></div>
              }
            >
              <Contact key={contact.id} user={contact} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default ContactList;
