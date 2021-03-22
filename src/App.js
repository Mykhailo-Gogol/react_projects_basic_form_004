import React, { useState } from "react";
import "./index.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    event.persist();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmitt}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid && (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        )}
        <input
          onChange={handleInputChange}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          // required
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          onChange={handleInputChange}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          // required
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}
        <input
          onChange={handleInputChange}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          // required
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
