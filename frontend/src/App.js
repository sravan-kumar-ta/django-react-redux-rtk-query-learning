import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectLists from "./components/ProjectLists";
import AddProject from "./components/AddProject";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectLists />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/detail-project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
