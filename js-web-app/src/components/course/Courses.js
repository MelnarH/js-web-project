import CourseCard from "./CourseCard";

const Courses = () => {
  // fetch stuff
  const courses = [
    { id: 1, title: "Test" },
    { id: 2, title: "Test" },
  ];

  return courses.map(({ id, title }) => CourseCard(id, title));
};

export default Courses;
