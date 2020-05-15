import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { base, app } from "../../base"; // eslint-disable-line
import moment from "moment";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";

export default function ContactPage() {
  const [contact, setContact] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false); // eslint-disable-line

  useEffect(() => {});

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  }

  function handleOnFocus(event) {
    // const { name } = event.target;
    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: null,
    // }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors({});
    if (!formIsValid()) return;
    setSaving(true);

    const database = app.database();

    // const id = database.ref().child("/contacts").push();

    const date = moment().format("MMMM Do YYYY, h:mm:ss a");

    database
      .ref("contacts")
      .push({ ...contact, date: date })
      .then(() => {
        toast.success(
          "Message sent. Thank you for your feedback. Will get back to you shortly",
          {
            position: toast.POSITION.TOP_LEFT,
          }
        );
        setContact({});
        setSaving(false);
      })
      .catch((err) => {
        toast.error(
          "Message not sent! Please check your connection, or consider sending via mail",
          {
            position: toast.POSITION.TOP_LEFT,
          }
        );
      });
  }

  function formIsValid() {
    const { email, name, subject, message } = contact;
    let err = false;
    const errors = {};

    if (!email) {
      errors.email = "Email is required!";
      err = true;
    }
    if (!name) {
      errors.name = "Name is required!";
      err = true;
    }
    if (!subject) {
      errors.subject = "Subject is required!";
      err = true;
    }
    if (!message) {
      errors.message = "The message is required!";
      err = true;
    }
    setErrors(errors);

    return !err;
  }

  return (
    <section className="contact_page page" id="contact">
      <main>
        <h1>Contact</h1>
        <div>
          {saving ? (
            <Spinner />
          ) : (
            <ContactForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              errors={errors}
              onFocus={handleOnFocus}
              contact={contact}
              saving={saving}
            />
          )}

          <div className="contact_details">
            <div>
              <FontAwesomeIcon icon="envelope" className="contact_icon" />
              <div>kiprutohosea05@gmail.com</div>
            </div>

            <div>
              <FontAwesomeIcon icon="map-marker" className="contact_icon" />
              <div>
                Banana Hill Town, <br />
                <div style={{ textAlign: "center" }}>Kiambu</div>
              </div>
            </div>

            <div>
              <FontAwesomeIcon icon="phone" className="contact_icon" />
              <div>
                +254 702 127 533 <br />
                +254 731 007 426
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>Handcrafted by me using HTML5, CSS3, React & Firebase</div>
        <div>Copyright &copy; Hosea Kipruto 2020</div>
      </footer>
    </section>
  );
}
