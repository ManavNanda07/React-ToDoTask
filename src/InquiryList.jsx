import React from "react";
import { toast } from "react-toastify";

export default function InquiryList(props) {
  const deleteData = (i) => {
    const updatedList = props.contactUsList.filter((_, index) => index !== i);
    props.setList(updatedList);
    toast.success("Contact deleted successfully!");
  };

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.contactUsList.map((value, i) => (
          <tr key={i}>
            <th>{i + 1}</th>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.email}</td>
            <td>
              <button className="btn btn-warning">Edit</button>
              <button
               type="button"
                className="btn btn-danger ms-1"
                onClick={() => deleteData(i)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
