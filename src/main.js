export const BASE_URL = "https://localhost:8080";

import * as bootstrap from "bootstrap";
import "./style.scss";

import CoursesWrapper from "./components/course/CoursesWrapper";
import NavBar from "./components/layout/NavBar";
import Users from "./components/user/Users";

const root = document.querySelector("#app");
NavBar(root);
CoursesWrapper(root);
Users(root);
