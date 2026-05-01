import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import isEmail from "validator/lib/isEmail";
import emailjs from "@emailjs/browser";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import "./Contacts.css";

export default function Contacts() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleClose = (_, reason) => {
    if (reason !== "clickaway") setOpen(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setErrMsg("Enter all the fields");
      setOpen(true);
      return;
    }

    if (!isEmail(email)) {
      setErrMsg("Invalid email");
      setOpen(true);
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_6iw9zch",
        "template_n7vyo62",
        {
          name,
          email,
          message,
        },
        "ilnOhSvTCCi-5gR5K",
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrMsg("Failed to send message");
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const socialIconsMap = {
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
      style={{
        backgroundColor: theme.secondary,
        "--primary": theme.primary,
        "--secondary": theme.secondary,
        "--tertiary": theme.tertiary,
        "--primary80": theme.primary80,
      }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>

        <div className="contacts-body">
          {/* FORM */}
          <div className="contacts-form">
            <form onSubmit={handleSubmit}>
              {["Name", "Email", "Message"].map((field) => (
                <div className="input-container" key={field}>
                  <label className="label-style">{field}</label>

                  {field === "Message" ? (
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      className="form-message message-style"
                      placeholder="Type your message..."
                    />
                  ) : (
                    <input
                      value={formData[field.toLowerCase()]}
                      onChange={handleChange}
                      type={field === "Email" ? "email" : "text"}
                      name={field.toLowerCase()}
                      className="form-input input-style"
                      placeholder="Type here..."
                    />
                  )}
                </div>
              ))}

              <div className="submit-btn">
                <button type="submit" disabled={loading}>
                  <p>{loading ? "Sending..." : success ? "Sent" : "Send"}</p>

                  <div className="submit-icon">
                    {loading ? (
                      <AiOutlineSend className="send-icon spin" />
                    ) : !success ? (
                      <AiOutlineSend className="send-icon" />
                    ) : (
                      <AiOutlineCheckCircle className="success-icon" />
                    )}
                  </div>
                </button>
              </div>
            </form>

            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <SnackbarContent
                message={errMsg}
                action={
                  <IconButton size="small" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                }
                sx={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                }}
              />
            </Snackbar>
          </div>

          {/* DETAILS */}
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
            ].map(({ icon: Icon, value, href }, idx) => (
              <a key={idx} className="personal-details" href={href || "#"}>
                <div className="details-icon">
                  <Icon />
                </div>
                <p style={{ color: theme.tertiary }}>{value}</p>
              </a>
            ))}

            <div className="socialmedia-icons">
              {Object.entries(socialsData).map(([key, url]) => {
                if (!url || !socialIconsMap[key]) return null;
                const Icon = socialIconsMap[key];

                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}
