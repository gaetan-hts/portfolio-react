import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.REACT_APP_ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_hwc1qkn",
        "template_3v6ctvy",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          form.current.reset();
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";
          console.log(res);

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4000);
        },
        (err) => {
          console.log(err.text);
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
