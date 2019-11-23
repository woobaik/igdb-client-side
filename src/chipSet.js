import React from "react"
import {
  FaReact,
  FaStore,
  FaVuejs,
  FaHtml5,
  FaGithub,
  FaBootstrap,
  FaWindows,
  FaApple,
  FaTools
} from "react-icons/fa"
import {
  DiRuby,
  DiPostgresql,
  DiCss3,
  DiJqueryLogo,
  DiFirebase,
  DiMaterializecss
} from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { AiFillTool, AiOutlineApi } from "react-icons/ai"
import { MdComputer, MdDesktopWindows, MdPhoneIphone } from "react-icons/md"

const skills = [
  {
    name: "Ruby on Rails",
    icon: <DiRuby />,
    color: "#8F0F16"
  },
  {
    name: "Ruby",
    icon: <DiRuby />,
    color: "#C71F26"
  },
  {
    name: "Rspec",
    icon: <AiFillTool />,
    color: "#D71820"
  },

  {
    name: "Responsive Web Design",
    icon: <MdPhoneIphone />,
    color: "#F5555E"
  },
  {
    name: "Material UI",
    icon: <DiMaterializecss />,
    color: "#E96B6F"
  },
  {
    name: "Git",
    icon: <FaGithub />,
    color: "#EA4E33"
  },
  {
    name: "HTML 5",
    icon: <FaHtml5 />,
    color: "#EB6328"
  },
  {
    name: "Firebase",
    icon: <DiFirebase />,
    color: "#FFBB55"
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
    color: "#F7D43D"
  },
  {
    name: "JEST",
    icon: <FaTools />,
    color: "#F7D43D"
  },
  {
    name: "Vue.js",
    icon: <FaVuejs />,
    color: "#67AD7F"
  },
  {
    name: "Tailwind CSS",
    icon: <MdDesktopWindows />,
    color: "#209CB4"
  },
  {
    name: "AJAX",
    icon: <MdComputer />,
    color: "#84B4D5"
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#30D2F9"
  },
  {
    name: "Redux",
    icon: <FaStore />,
    color: "#30D2F9"
  },
  {
    name: "CSS3",
    icon: <DiCss3 />,
    color: "#1A70B5"
  },
  {
    name: "jQuery",
    icon: <DiJqueryLogo />,
    color: "#3970B8"
  },

  {
    name: "Windows OS",
    icon: <FaWindows />,
    color: "#1C74D5"
  },
  {
    name: "RESTful API",
    icon: <AiOutlineApi />,
    color: "#2380BB"
  },

  {
    name: "PostgreSQL",
    icon: <DiPostgresql />,
    color: "#31628C"
  },

  {
    name: "BootStrap",
    icon: <FaBootstrap />,
    color: "#6C41A0"
  },

  {
    name: "Mac OS",
    icon: <FaApple />,
    color: "#28272C"
  }
]

export default skills
