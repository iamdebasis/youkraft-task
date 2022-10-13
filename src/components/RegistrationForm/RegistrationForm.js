import React, { useState } from "react";
import  "./registrationForm.css";

function RegistrationForm() {
	const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: ""
  });
	const updateFormData = event =>
	setFormData({
		...formData,
		[event.target.name]: event.target.value
	});
  const { name, age, email, phoneNumber } = formData;

	const submitForm = (event) => {
		event.preventDefault()
		window.location.href = `http://localhost:3000/Dashboard?name=${name}&age=${age}&email=${email}&phoneNumber=${phoneNumber}`;
	}


  return (
    <form onSubmit={submitForm} >
      <input
        value={name}
        onChange={e => updateFormData(e)}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input
        value={age}
        onChange={e => updateFormData(e)}
        placeholder="Age"
        type="number"
        name="age"
        min="18"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={phoneNumber}
        onChange={e => updateFormData(e)}
        placeholder="Phone number"
        type="number"
        name="phoneNumber"
        min="1000000000"
        max="9999999999"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
