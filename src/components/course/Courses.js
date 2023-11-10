// import { BASE_URL } from "../../main";
import CourseCard from "./CourseCard";

const Courses = async () => {
  // fetch stuff
  const courses = [
    { id: 1, title: "Test" },
    { id: 2, title: "Test" },
  ];
  // const courses = (
  // await fetch(`https://${import.meta.env.BASE_URL}/courses`, {
  //     method: "GET",
  //   })
  // ).json();

  return courses.map(({ id, title }) => CourseCard(id, title));
};

export default Courses;
