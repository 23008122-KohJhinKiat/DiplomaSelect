import { useParams, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Diploma() {
  const { diplomaId } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Mock data fetch
    const coursesData = {
      ict: [
        { id: "web-dev", name: "Web Development" },
        { id: "cyber-sec", name: "Cyber Security" },
      ],
      dsai: [
        { id: "ml", name: "Machine Learning" },
        { id: "big-data", name: "Big Data Analytics" },
      ],
    };
    setCourses(coursesData[diplomaId] || []);
  }, [diplomaId]);

  return (
    <>
      <h2>Courses in {diplomaId.toUpperCase()}</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "course-active" : null)}
              to={course.id}
            >
              {course.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
