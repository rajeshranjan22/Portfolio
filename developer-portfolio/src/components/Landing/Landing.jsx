import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaBlogger,
} from "react-icons/fa";

/* ================= Styled Buttons ================= */

const ResumeButton = styled(Button)(({ ownerState }) => ({
  color: ownerState.primary,
  borderRadius: "30px",
  textTransform: "inherit",
  width: "150px",
  height: "50px",
  fontSize: "1rem",
  fontWeight: 500,
  fontFamily: "var(--primaryFont)",
  border: `3px solid ${ownerState.primary}`,
  transition: "100ms ease-out",

  "&:hover": {
    backgroundColor: ownerState.tertiary,
    color: ownerState.secondary,
    border: `3px solid ${ownerState.tertiary}`,
  },

  "@media (max-width:600px)": {
    width: "180px",
  },
}));

const ContactButton = styled(Button)(({ ownerState }) => ({
  backgroundColor: ownerState.primary,
  color: ownerState.secondary,
  borderRadius: "30px",
  textTransform: "inherit",
  width: "150px",
  height: "50px",
  fontSize: "1rem",
  fontWeight: 500,
  fontFamily: "var(--primaryFont)",
  border: `3px solid ${ownerState.primary}`,
  transition: "100ms ease-out",

  "&:hover": {
    backgroundColor: ownerState.secondary,
    color: ownerState.tertiary,
    border: `3px solid ${ownerState.tertiary}`,
  },

  "@media (max-width:600px)": {
    display: "none",
  },
}));

/* ================= Component ================= */

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <div className="landing">
      <div className="landing--container">
        {/* LEFT */}
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}

            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}

            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Twitter"
                />
              </a>
            )}

            {socialsData.youtube && (
              <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                <FaYoutube
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="YouTube"
                />
              </a>
            )}

            {socialsData.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                <FaBlogger
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="Blogger"
                />
              </a>
            )}
          </div>
        </div>

        {/* IMAGE */}
        <img
          src={headerData.image}
          alt="Rajesh"
          className="landing--img"
          style={{
            opacity: drawerOpen ? "0" : "1",
            borderColor: theme.secondary,
          }}
        />

        {/* RIGHT */}
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="Rajesh_Ranjan_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ResumeButton ownerState={theme}>Download CV</ResumeButton>
                </a>
              )}

              <NavLink to="/contact">
                <ContactButton ownerState={theme}>Contact</ContactButton>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
