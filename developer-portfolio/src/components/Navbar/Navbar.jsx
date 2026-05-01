import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { FaUser, FaCode, FaFolderOpen, FaProjectDiagram } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

// 🔥 Menu Icon
const MenuIcon = styled(IoMenuSharp)(({ theme }) => ({
  fontSize: "2.5rem",
  color: theme.tertiary,
  cursor: "pointer",
  transform: "translateY(-10px)",
  transition: "color 0.3s",

  "&:hover": {
    color: theme.primary,
  },
}));

// 🔥 Close Icon (FIXED HOVER LIKE OLD CODE)
const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  position: "absolute",
  right: 40,
  top: 40,
  fontSize: "2rem",
  cursor: "pointer",
  color: theme.primary,
  transition: "color 0.2s",

  "&:hover": {
    color: theme.tertiary,
  },

  "@media (max-width: 600px)": {
    right: 20,
    top: 20,
  },
}));

const DrawerWrapper = styled("div")(({ theme }) => ({
  padding: "0 1.8rem",
  width: "21rem",
  height: "100%",
  background: theme.secondary,
  borderTopRightRadius: "40px",
  borderBottomRightRadius: "40px",
  position: "relative",
  overflow: "hidden",

  "@media (max-width: 600px)": {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
}));

// 🔥 Drawer Item
const DrawerItem = styled("div")(({ theme }) => ({
  margin: "1.5rem auto",
  borderRadius: "78px",
  background: theme.secondary,
  color: theme.primary,
  width: "75%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  padding: "0 30px",
  border: `2px solid ${theme.primary}`,
  transition: "0.2s",

  "&:hover": {
    background: theme.primary,
    color: theme.secondary,
  },
}));

const DrawerIcon = styled("span")({
  fontSize: "1.6rem",
});

const DrawerText = styled("span")({
  fontSize: "1.3rem",
  fontWeight: 600,
  width: "50%",
});

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
    setHandleDrawer((prev) => !prev);
  };

  const shortname = (name) => (name.length > 12 ? name.split(" ")[0] : name);

  const navItems = [
    { to: "/", label: "Home", icon: <IoHomeSharp /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { to: "/skills", label: "Skills", icon: <FaCode /> },
    { to: "/experience", label: "Experience", icon: <FaFolderOpen /> },
    { to: "/education", label: "Education", icon: <HiDocumentText /> },
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
        className="drawer"
        disableScrollLock
        ModalProps={{
          BackdropProps: {
            style: {
              backdropFilter: "blur(20px)",
              background: "rgba(33,33,33,0.15)",
            },
          },
        }}
        PaperProps={{
          style: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DrawerWrapper theme={theme}>
          {/* ✅ FIXED CLOSE ICON */}
          <StyledCloseIcon theme={theme} onClick={toggleDrawer} />

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
