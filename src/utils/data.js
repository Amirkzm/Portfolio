import {
  MdHome,
  MdPerson,
  MdContactSupport,
  MdTextSnippet,
} from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

export const data = [
  {
    title: "HOME",
    icon: <MdHome />,
    path: "/home",
  },
  {
    title: "PROJECT",
    icon: <AiFillProject />,
    path: "/projects",
  },
  {
    title: "BLOG",
    icon: <MdTextSnippet />,
    path: "/blog",
  },
  {
    title: "ABOUT ME",
    icon: <MdPerson />,
    path: "/about",
  },
  {
    title: "CONTACT",
    icon: <MdContactSupport />,
    path: "/contact",
  },
];
