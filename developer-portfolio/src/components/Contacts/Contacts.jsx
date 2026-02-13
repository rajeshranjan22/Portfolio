import { useContext, useState } from "react";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";

import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";

import "./Contacts.css";

function Contacts() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    open: false,
    success: false,
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return setStatus({
        open: true,
        success: false,
        message: "Enter all fields",
      });
    }

    if (!isEmail(email)) {
      return setStatus({
        open: true,
        success: false,
        message: "Invalid email address",
      });
    }

    try {
      await axios.post(contactsData.sheetAPI, { name, email, message });
      setFormData({ name: "", email: "", message: "" });
      setStatus({
        open: true,
        success: true,
        message: "Message sent successfully!",
      });
    } catch {
      setStatus({
        open: true,
        success: false,
        message: "Failed to send message",
      });
    }
  };

  const socialIcons = {
    twitter: FaTwitter,
    github: FaGithub,
    linkedIn: FaLinkedinIn,
    instagram: FaInstagram,
    youtube: FaYoutube,
  };

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>

        <div className="contacts-body">
          {/* ---------- FORM ---------- */}
          <form className="contacts-form" onSubmit={handleSubmit}>
            {["name", "email", "message"].map((field) => (
              <div className="input-container" key={field}>
                <label style={{ color: theme.primary }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>

                {field === "message" ? (
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-message"
                    style={{
                      borderColor: theme.primary80,
                      backgroundColor: theme.secondary,
                      color: theme.tertiary,
                    }}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      borderColor: theme.primary80,
                      backgroundColor: theme.secondary,
                      color: theme.tertiary,
                    }}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="submitBtn"
              style={{
                backgroundColor: theme.primary,
                color: theme.secondary,
              }}
            >
              <span>{status.success ? "Message Sent" : "Send Message"}</span>
              <span className="submit-icon">
                {!status.success ? <AiOutlineSend /> : <AiOutlineCheckCircle />}
              </span>
            </button>
          </form>

          {/* ---------- DETAILS ---------- */}
          <div className="contacts-details">
            {[
              {
                icon: FaEnvelope,
                value: contactsData.email,
                href: `mailto:${contactsData.email}`,
              },
              {
                icon: FiPhone,
                value: contactsData.phone,
                href: `tel:${contactsData.phone}`,
              },
              {
                icon: HiOutlineLocationMarker,
                value: contactsData.address,
              },
            ].map(({ icon: Icon, value, href }, i) => (
              <a key={i} href={href || "#"} className="personal-details">
                <div
                  className="details-icon"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                  }}
                >
                  <Icon />
                </div>
                <p style={{ color: theme.tertiary }}>{value}</p>
              </a>
            ))}

            <div className="socialmedia-icons">
              {Object.entries(socialsData).map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon || !url) return null;

                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    style={{
                      backgroundColor: theme.primary,
                      color: theme.secondary,
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- TOAST ---------- */}
      {status.open && (
        <div
          className="toast"
          style={{
            backgroundColor: theme.primary,
            color: theme.secondary,
          }}
          onClick={() => setStatus({ ...status, open: false })}
        >
          {status.message}
        </div>
      )}
    </div>
  );
}

export default Contacts;
