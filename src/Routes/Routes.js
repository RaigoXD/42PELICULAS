import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Pages/Movies/Movies";
import Navbar from "../Pages/Navbar/Navbar";

function SystemRoutes() {
  let HtmlRoutes = (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navbar component={<Movies></Movies>}></Navbar>}
        ></Route>
      </Routes>
    </Router>
  );
  return HtmlRoutes;
}

export default SystemRoutes;
