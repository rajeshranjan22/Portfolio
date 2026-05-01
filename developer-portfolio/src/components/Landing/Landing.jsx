import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import { FaTwitter, FaLinkedin, FaGithub, FaBlogger } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ResumeButton = styled(Button)(({ ownerState }) => ({
  color: ownerState.primary,
  borderRadius: "30px",
  width: "150px",
  height: "50px",
  border: `2px solid ${ownerState.primary}`,
  textTransform: "none",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: ownerState.primary,
    color: ownerState.secondary,
  },
}));

const ContactButton = styled(Button)(({ ownerState }) => ({
  backgroundColor: ownerState.primary,
  color: ownerState.secondary,
  borderRadius: "30px",
  width: "150px",
  height: "50px",
  border: `2px solid ${ownerState.primary}`,
  fontSize: "1rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: ownerState.secondary,
    color: ownerState.primary,
  },
}));

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
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <FaTwitter
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
            {socialsData.leetcode && (
              <a href={socialsData.leetcode} target="_blank" rel="noreferrer">
                <SiLeetcode
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
            {socialsData.blogger && (
              <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                <FaBlogger
                  className="landing--social"
                  style={{ color: theme.secondary }}
                />
              </a>
            )}
          </div>
        </div>

        {/* IMAGE */}
        <img
          src={headerData.image}
          alt="profile"
          className="landing--img"
          style={{
            opacity: drawerOpen ? "0" : "1",
            border: theme.secondary,
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
                <a href={headerData.resumePdf} target="_blank" rel="noreferrer">
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
