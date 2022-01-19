interface Course {
  title: string;
  description: string;
  content: string;
}

// Partial
const makeCourse = (title, description, content): Course => {
  let course: Course;
  course.title = "Typescript";
  course.description = "This is boring";
  course.content = "Nothing";
  return course as Course;
};
