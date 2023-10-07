import React, { useState } from "react";
import axios from "axios";
import { navigate } from "gatsby";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(process.env.GATSBY_FORM_API_URL, formData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
        navigate("/message-sent");
      })
      .catch(function (error) {
        alert("Error sending message", error);
        setLoading(false);
      });
  };
  
  return (
    <div className="App">
      <div class="form">
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={query.email}
              onChange={handleChange()}
            />
          </div>
          <div class="form-group">
            <textarea
              placeholder="Message"
              rows={3}
              type="text"
              name="message"
              value={query.message}
              onChange={handleChange()}
            />
          </div>
          <button type="submit">Send</button>
          {formStatus && <p>Message sent.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
