import React from "react";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactPage() {
  return (
    <section className="contact_page page" id="contact">
      <main>
        <h1>Contact</h1>
        <div>
          <ContactForm />
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
