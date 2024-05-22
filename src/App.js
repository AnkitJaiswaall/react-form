import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import Form from "./components/form/Form";
import CreateProject from "./components/pages/CreateProject";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path="/projects/create" element={<CreateProject />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
