import React from "react";
import PropTypes from "prop-types";

export default function ContactForm({ onSubmit, onChange, errors, onFocus }) {
  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={onSubmit}
        className="contact_form"
      >
        <div className="form-control">
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email Address"
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>

        <div className="form-control">
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>

        <div className="form-control">
          {errors.subject && <span className="error">{errors.subject}</span>}
          <input
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>

        <div className="form-control">
          {errors.message && <span className="error">{errors.message}</span>}
          <textarea
            name="message"
            id=""
            placeholder="Message"
            onChange={onChange}
            onFocus={onFocus}
          ></textarea>
        </div>

        <div className="form-control">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
