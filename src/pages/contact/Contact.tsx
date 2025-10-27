import "./Contact.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent, type ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const newErrors: FormErrors = {};

    Array.from(form.elements).forEach((el) => {
      if (
        !(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)
      )
        return;
      if (!el.checkValidity()) {
        newErrors[el.name as keyof FormErrors] = el.validationMessage;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailto = `mailto:support@mclookup.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  }

  return (
    <div className="contact">
      <div className="contact-main">
        <Searchbar
          isSticky={true}
          value=""
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
      </div>

      <div className="contact-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h1>Contact Us</h1>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <small className="error-message">{errors.name}</small>
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <small className="error-message">{errors.email}</small>
            </label>

            <label>
              Message:
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <small className="error-message">{errors.message}</small>
            </label>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
