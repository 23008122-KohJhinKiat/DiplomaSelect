import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Course from "./Course";
import Register from "./Register";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":courseId" element={<Course />} />
          </Route>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2025 | Republic Polytechnic
      </footer>
    </div>
  );
}

export default App;
