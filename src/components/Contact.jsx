import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Adresse email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .send(
        "service_zel1xni",
        "template_ewow9hm",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        "K_wzZdAD3ic9M3HPo"
      )
      .then(() => {
        setStatus({ type: "success", message: "Message envoyé avec succès !" });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.log(error);
        setStatus({ type: "error", message: "Erreur lors de l'envoi." });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <div className="contact-line"></div>
        <p>Une idée ou un projet ? N'hésitez pas à me contacter !</p>

        <div className="info">
          <FaEnvelope />
          <span>euniceogunemi@gmail.com</span>
        </div>

        <div className="info">
          <FaPhone />
          <span>+225 07 98 71 97 50</span>
        </div>

        <div className="info">
          <FaMapMarkerAlt />
          <span>Abidjan, Côte d'Ivoire</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>

        {status.message && (
          <p className={status.type === "success" ? "success" : "error"}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;