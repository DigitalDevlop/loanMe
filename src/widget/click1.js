import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/1.jpeg';
import image2 from './../images/Button.gif';

const Click1 = () => {
  const [formData, setFormData] = useState({
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScmj3a-2CK8OGnPfbDnjRFW_ievlQvUfkdVCXStLfy-oQYO0w/formResponse";
   
    const data = new FormData();
    data.append("entry.657543218", formData.phone);    // Mobile number
 

    try {
      await fetch(formURL, {
        method: "POST",
        body: data,
        mode: "no-cors" // Required for Google Forms
      });
      alert("✅ Submitted successfully!");
      setFormData({ phone: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  //https://docs.google.com/forms/d/e/1FAIpQLScmj3a-2CK8OGnPfbDnjRFW_ievlQvUfkdVCXStLfy-oQYO0w/viewform?usp=pp_url&entry.657543218=%2B94+77+988+1998
  return (
    <div style={{ position: 'relative', width: '300px', height: '250px', cursor: 'pointer' }}>
      {/* <Link to="/image2"> */}
        <img
          src={image1}
          alt="Image 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      {/* </Link> */}

      {/* Transparent Input Fields */}
      <form 
  onSubmit={handleSubmit} 
  style={{
    position: 'absolute',
    top: '87%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',          // keep flex
    flexDirection: 'row',     // row instead of column
    gap: '1px',
    width: '35%',
    alignItems: 'center',     // vertically align input & button
  }}
>
  <input 
    type="text" 
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    style={{
      flex: 1,  // input takes remaining space
      background: 'rgba(255, 255, 255, 0.5)',
      border: '1px solid black',
      borderRadius: '6px',
      padding: '6px',
      outlineColor: 'red',
      color: '#gggh'
    }}
    required
  />

  <button 
    type="submit" 
    style={{
      border: 'none',
      borderRadius: '1px',
      padding: '1px 1px',
      cursor: 'pointer',
      background: 'transparent'
    }}
  >
    <img 
      src={image2} 
      alt="submit" 
      style={{ width: '166px', height: '300px' }} 
    />
  </button>
</form>

    </div>
  );
};

export default Click1;


