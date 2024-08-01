import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectLists from "./components/ProjectLists";
import AddProject from "./components/AddProject";
import ProjectDetail from "./components/ProjectDetail";
import UpdateProject from "./components/UpdateProject";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectLists />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/detail-project/:id" element={<ProjectDetail />} />
          <Route path="/update-project/:id" element={<UpdateProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
