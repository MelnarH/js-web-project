import Courses from "./Courses";

const CoursesWrapper = async (root) => {
  const courses = await Courses();

  courses.forEach((course) => root.appendChild(course));
};

export default CoursesWrapper;
