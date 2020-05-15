import React from "react";
import PropTypes from "prop-types";

export default function ContactForm({
  onSubmit,
  onChange,
  errors,
  onFocus,
  contact,
  saving,
}) {
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
            value={contact.email ? contact.email : ""}
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
            value={contact.name ? contact.name : ""}
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
            value={contact.subject ? contact.subject : ""}
          />
        </div>

        <div className="form-control">
          <span className="error">{errors.message}</span>
          {/* {errors.message && <span className="error">{errors.message}</span>} */}
          <textarea
            name="message"
            id=""
            placeholder="Message"
            onChange={onChange}
            onFocus={onFocus}
            value={contact.message ? contact.message : ""}
          >
            {contact.message ? contact.message : null}
          </textarea>
        </div>

        <div className="form-control">
          <button disabled={saving}>{saving ? "Sending..." : "Submit"}</button>
        </div>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  saving: PropTypes.bool.isRequired,
};
