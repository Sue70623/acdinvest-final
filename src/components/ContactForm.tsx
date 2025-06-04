import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../pages/navigation/ContactForm.css"; // Import des styles

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Added subject field
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      // Envoi vers toi (Contact Us)
      emailjs
        .sendForm(
          "service_zuhgizn",
          "template_c0oczmp", // <-- vers TOI (admin)
          form.current,
          "AYB2FEpYiuysRSuC-"
        )
        .then(
          (result) => {},
          (error) => {
            console.error("Erreur d'envoi (TOI):", error);
          }
        );

      // Envoi AutoReply vers l'utilisateur

      emailjs
        .sendForm(
          "service_zuhgizn",
          "template_x4zr2gs",
          form.current,
          "AYB2FEpYiuysRSuC-"
        )
        .then(
          (result) => {
            alert("Message envoyé avec succès !");
          },
          (error) => {
            console.error("EmailJS error:", error); // Debugging log
            alert("Une erreur s'est produite lors de l'envoi du message.");
          }
        );
    } else {
      console.error("Form reference is null."); // Debugging log
      alert("Une erreur s'est produite : le formulaire n'est pas référencé.");
    }
  };

  return (
    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Assumpte"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Missatge"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="global-button">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
