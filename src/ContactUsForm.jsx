import React, { useState } from "react";
import { toast } from "react-toastify";
import InquiryList from "./InquiryList";

export default function ContactUsForm() {
  let [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactedBefore: false,
    index:null
  });
  let [contactUsList, setList] = useState([]);

  let submitForm = (event) => {
    event.preventDefault();
    if (formValid()) {
      if (contactUsList.filter((x,i) => x.email == userForm.email && i != userForm.index).length > 0) {
        toast.error("You have already contacted once. please try later.");
        return;
      }

      if(userForm.index == null){
          toast.success("Form submitted successfully");
          let updatedList = [...contactUsList, userForm];
          setList(updatedList);  
      }
      else{
        toast.success("Form data updated successfully");
         contactUsList[userForm.index] = userForm;
         setList(contactUsList); 
      }
      const initialFormState = {
              firstName: "",
              lastName: "",
              email: "",
              contactedBefore: false,
              index:null
            };
      setUserForm(initialFormState);
     
    } else {
      toast.error("Please fill above form.");
    }
  };

  let formValid = () => {
    if ((userForm.firstName, userForm.lastName, userForm.email)) {
      return true;
    } else {
      return false;
    }
  };

  let changeValue = (event) => {
    let oldValue = { ...userForm };
    let name = event.target.name;
    let value = event.target.value;
    oldValue[name] = value;
    setUserForm(oldValue);
  };

  return (
    <div className="container mt-2">
      <div className="text-center">
        <h3>Contact Us</h3>
        <hr />
      </div>
      <div className="row">
        <div className={contactUsList.length > 0 ? "col-6" : ""}>
          <div className="mt-2 main-form">
            <form onSubmit={submitForm}>
              <div className="mb-2 form-group">
                <label htmlFor="firstName"> First Name: </label>
                <input
                  type="text"
                  onChange={changeValue}
                  name="firstName"
                  value={userForm.firstName}
                  className="form-control"
                />
              </div>
              <div className="mb-2 form-group">
                <label htmlFor="lastName text-start"> Last Name: </label>
                <input
                  type="text"
                  onChange={changeValue}
                  name="lastName"
                  value={userForm.lastName}
                  className="form-control"
                />
              </div>
              <div className="mb-2 form-group">
                <label htmlFor="email"> Email Address: </label>
                <input
                  type="text"
                  onChange={changeValue}
                  name="email"
                  value={userForm.email}
                  className="form-control"
                />
              </div>
              {/* <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={userForm.contactedBefore}  name="contactedBefore"/>
                <label className="form-check-label" htmlFor="contactedBefore">
                    Have you Contacted Before: 
                </label>
                </div> */}
              <div className="mt-2 text-center">
                <button className="btn btn-success">{userForm.index == null?'Save':'Update'}</button>
              </div>
            </form>
          </div>
        </div>
        {contactUsList.length > 0 ? (
          <div className={contactUsList.length > 0 ? "col-6" : ""}>
            <InquiryList   contactUsList={contactUsList} setList={setList} setUserForm={setUserForm} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
