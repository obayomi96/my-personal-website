import React, { useState } from "react";
import axios from "axios";
import { navigate } from "gatsby";

import "../contactform.css";

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
      .then((response) => {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
        navigate("/message-sent");
      })
      .catch((error) => {
        alert("Error sending message", error);
        setLoading(false);
      });
  };

  return (
    <div classNameName="App">
      <div className="form f-container">
        <form
          id="contact"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={query.email}
              onChange={handleChange()}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              rows={3}
              type="text"
              name="message"
              value={query.message}
              onChange={handleChange()}
            />
          </div>
          <button disabled={loading} type="submit">
            {loading ? "Sending" : "Send"}
          </button>
          {formStatus && <p>Message sent.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
