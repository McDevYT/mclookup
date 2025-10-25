import "./Contact.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    alert("Form Submitted");
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
          <form className="contact-form" onSubmit={handleSubmit}>
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
            </label>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
