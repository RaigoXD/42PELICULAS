import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Pages/Movies/Movies";

function SystemRoutes() {
  let HtmlRoutes = (
    <Router>
      <Routes>
        <Route path="/" element={<Movies></Movies>}></Route>
      </Routes>
    </Router>
  );
  return HtmlRoutes;
}

export default SystemRoutes;
