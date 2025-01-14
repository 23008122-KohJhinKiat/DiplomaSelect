import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Diplomas() {
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    // Mock data fetch
    setDiplomas([
      { id: "ict", name: "Diploma in Infocomm Technology" },
      { id: "dsai", name: "Diploma in Data Science & AI" },
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Explore Diplomas</h1>
      <ul className="diplomas">
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "diploma-active" : null)}
              to={diploma.id}
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
