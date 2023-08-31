import SubNavHome from "components/subnav/Subnav";
import icons from "./icons"
const { FiChevronDown } = icons

const pathsMain = [
  {
    id: 1,
    value: "Home",
    link: "/Home",
    icon: null,
    subNav:<SubNavHome />
  },
  {
    id: 2,
    value: "About us",
    link: "/aboutus",
    icon: FiChevronDown,
  },
  {
    id: 3,
    value: "Project",
    link: "/project",
    icon: null,
    subNav:""
  },
  {
    id: 4,
    value: "Service",
    link: "/service",
    icon: null,
  },
  {
    id: 5,
    value: "Careers",
    link: "/careers",
    icon: null,
  },
  {
    id: 6,
    value: "News",
    link: "/news",
    icon: null,
  },
  {
    id: 7,
    value: "Contact",
    link: "/contract",
    icon: null,
  },
];

export {
    pathsMain
}