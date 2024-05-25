import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});

  const countries = [
    { name: "India", code: "+91" },
    { name: "USA", code: "+1" },
    { name: "Canada", code: "+1" }
  ];

  const cities = {
    India: ["Delhi", "Mumbai", "Bangalore"],
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"]
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) errors.password = "Password is required";
    if (!formData.phoneNo) {
      errors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      errors.phoneNo = "Phone number must be 10 digits";
    }
    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.panNo) errors.panNo = "PAN number is required";
    if (!formData.aadharNo) {
      errors.aadharNo = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadharNo)) {
      errors.aadharNo = "Aadhar number must be 12 digits";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate('/success', { state: formData });
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type={formData.showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}>
            {formData.showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.name} value={country.name}>{country.name}</option>
            ))}
          </select>
          {errors.country && <p>{errors.country}</p>}
        </div>
        <div>
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange} disabled={!formData.country}>
            <option value="">Select City</option>
            {formData.country && cities[formData.country].map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <div>
            <span>{formData.country && countries.find(c => c.name === formData.country).code}</span>
            <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
          </div>
          {errors.phoneNo && <p>{errors.phoneNo}</p>}
        </div>
        <div>
          <label>PAN No:</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          {errors.panNo && <p>{errors.panNo}</p>}
        </div>
        <div>
          <label>Aadhar No:</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          {errors.aadharNo && <p>{errors.aadharNo}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
