import { useParams } from "react-router-dom";

export default function Course() {
  const { courseId } = useParams();
  const courseDetails = {
    "web-dev": {
      name: "Web Development",
      description: "Learn to build modern web applications.",
    },
    "cyber-sec": {
      name: "Cyber Security",
      description: "Master the art of securing systems.",
    },
    ml: {
      name: "Machine Learning",
      description: "Dive into the world of AI and ML.",
    },
    "big-data": {
      name: "Big Data Analytics",
      description: "Analyze massive datasets effectively.",
    },
  };

  const course = courseDetails[courseId] || { name: "Unknown", description: "N/A" };

  return (
    <div>
      <h3>{course.name}</h3>
      <p>{course.description}</p>
    </div>
  );
}
