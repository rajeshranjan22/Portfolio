import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FaUser, FaCode, FaFolderOpen, FaProjectDiagram } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

/* -------------------- Styled Components -------------------- */

// Menu Icon
const MenuIcon = styled(IoMenuSharp)(({ theme }) => ({
  fontSize: "2.5rem",
  color: theme.tertiary,
  cursor: "pointer",
  transform: "translateY(-10px)",
  transition: "color 0.3s",

  "&:hover": {
    color: theme.primary,
  },

  "@media (max-width:600px)": {
    fontSize: "2rem",
  },
}));

// Drawer Container
const DrawerWrapper = styled("div")(({ theme }) => ({
  padding: "2rem",
  width: "22rem",
  height: "100%",
  background: theme.secondary,
  borderTopRightRadius: "40px",
  borderBottomRightRadius: "40px",

  "@media (max-width:600px)": {
    width: "18rem",
  },
}));

// Close Button
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  color: theme.primary,

  "&:hover": {
    color: theme.tertiary,
  },
}));

// Drawer Item
const DrawerItem = styled("div")(({ theme }) => ({
  margin: "2rem auto",
  borderRadius: "80px",
  background: theme.secondary,
  color: theme.primary,
  width: "90%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 30px",
  border: `2px solid ${theme.primary}`,
  transition: "all 0.25s ease",

  "&:hover": {
    background: theme.primary,
    color: theme.secondary,
  },

  "@media (max-width:600px)": {
    height: "55px",
  },
}));

// Drawer Icon (THIS replaces your old drawerIcon class)
const DrawerIcon = styled("span")({
  fontSize: "1.6rem",
  display: "flex",
  alignItems: "center",

  "@media (max-width:600px)": {
    fontSize: "1.35rem",
  },
});

// Drawer Text
const DrawerText = styled("span")({
  fontFamily: "var(--primaryFont)",
  width: "50%",
  fontSize: "1.3rem",
  fontWeight: 600,

  "@media (max-width:600px)": {
    fontSize: "1.125rem",
  },
});

/* -------------------- Component -------------------- */

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
    setHandleDrawer();
  };

  const shortname = (name) => (name.length > 12 ? name.split(" ")[0] : name);

  const navItems = [
    { to: "/", label: "Home", icon: <IoHomeSharp /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/education", label: "Education", icon: <HiDocumentText /> },
    { to: "/skills", label: "Skills", icon: <FaCode /> },
    { to: "/experience", label: "Experience", icon: <FaFolderOpen /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/contact", label: "Contact", icon: <MdPhone /> },
  ];

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

        <MenuIcon theme={theme} onClick={toggleDrawer} />
      </div>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        disableScrollLock
        PaperProps={{
          sx: {
            backgroundColor: theme.secondary,
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
          },
        }}
      >
        <DrawerWrapper theme={theme}>
          <CloseButton theme={theme} onClick={toggleDrawer}>
            <CloseIcon fontSize="large" />
          </CloseButton>

          <div className="navLink--container" onClick={toggleDrawer}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <NavLink to={item.to}>
                  <DrawerItem theme={theme}>
                    <DrawerIcon>{item.icon}</DrawerIcon>
                    <DrawerText>{item.label}</DrawerText>
                  </DrawerItem>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </DrawerWrapper>
      </Drawer>
    </div>
  );
}

export default Navbar;
