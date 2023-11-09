import Courses from "./Courses";

const CoursesWrapper = (root) => {
  const courses = Courses();

  courses.forEach((course) => root.appendChild(course));
};

export default CoursesWrapper;
