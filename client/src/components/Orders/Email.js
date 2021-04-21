import React from "react";
import Axios from "axios";

const Email = ({ section }) => {
  const sendEmail = async () => {
    console.log(section);
    await Axios.post("http://localhost:3001/orders/email", {
      section: section,
    }).then((response) => {
      if (response.statusText === "OK") {
        console.log("email sent!");
      }
    });
  };

  return (
    <div>
      <button onClick={sendEmail} className='login'>
        Send
      </button>
    </div>
  );
};

export default Email;
