import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import react from "../assets/svg/skills/react.svg";
// import reactNative from "../assets/svg/skills/react-native.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
// import nodeJS from "../assets/svg/skills/nodejs.svg";
// import expressJS from "../assets/svg/skills/expressjs.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import materialUI from "../assets/svg/skills/materialui.svg";
import mongodb from "../assets/svg/skills/mongoDB.svg";
import git from "../assets/svg/skills/git.svg";
import figma from "../assets/svg/skills/figma.svg";
// import dsa from "../assets/svg/skills/dsa.svg";
// import chakraUI from "../assets/svg/skills/chakra-ui.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    // case "react native":
    //   return reactNative;
    case "next js":
      return nextJS;
    // case "node js":
    //   return nodeJS;
    // case "express js":
    //   return expressJS;
    case "tailwind":
      return tailwind;
    case "material ui":
      return materialUI;
    case "mongodb":
      return mongodb;
    case "git":
      return git;
    case "figma":
      return figma;
    // case "dsa":
    //   return dsa;
    // case "chakra ui":
    //   return chakraUI;
    default:
      return null; // default fallback if skill image not found
  }
};
