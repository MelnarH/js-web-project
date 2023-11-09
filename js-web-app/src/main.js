import * as bootstrap from "bootstrap";
import "./style.scss";

import CoursesWrapper from "./components/course/CoursesWrapper";
import NavBar from "./components/layout/NavBar";

const root = document.querySelector("#app");
NavBar(root);
CoursesWrapper(root);
