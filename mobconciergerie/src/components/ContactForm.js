import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./ContactFormStyles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez saisir une adresse e-mail valide", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    emailjs.sendForm('service_4ky1shj', 'template_6qdcrqm', e.target, 'FP3hLqb5PwWP6s7Y9')
      .then((result) => {
        setIsEmailSent(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Utilisez toast.success pour une notification de succès
        toast.success("Votre message a été envoyé avec succès !", {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="from-container">
      <h1>Contactez Nous</h1>
      <p>Nous sommes là pour répondre à toutes vos questions et rendre votre expérience aussi agréable que possible. 
        N'hésitez pas à nous poser n'importe quelle question ou à partager vos préoccupations. Nous sommes impatients de vous aider!</p>
      <form onSubmit={(e) => {
        sendEmail(e);
      }}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder=" Écrivez votre message ici. Incluez toutes les informations pertinentes.
            Adresse : 
            Téléphone : 
            E-mail :"
          rows="6"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Envoyer votre Message</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ContactForm;
