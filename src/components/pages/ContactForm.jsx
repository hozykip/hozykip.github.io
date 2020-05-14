import React from "react";

export default function ContactForm() {
  return (
    <>
      <form action="" method="post" className="contact_form">
        <div className="form-control">
          <input type="text" name="email" id="" placeholder="Email Address" />
        </div>

        <div className="form-control">
          <input type="text" name="name" id="" placeholder="Name" />
        </div>

        <div className="form-control">
          <input type="text" name="subject" id="" placeholder="Subject" />
        </div>

        <div className="form-control">
          <textarea name="message" id="" placeholder="Message"></textarea>
        </div>

        <div className="form-control">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
