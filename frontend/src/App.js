import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./view/Form/Forms";
import Navbars from "./componant/Navbar/Navbar";
import Sidebar from "./componant/Sidebar/Sidebar";
import Login from "./componant/Login/Login";
import ProjectPage from "./componant/ProjectPage/ProjectPage";
import Maindash from "./view/Maindash/Maindash";
import EditForms from "./view/Form/EditForms";
import ShowData from "./view/Maindash/ShowData";

function App() {
  return (
    <BrowserRouter>
      <div className="App w-full">
        <Navbars />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="dashboard"
              element={
                <div className="w-5/6">
                  <Maindash />
                </div>
              }
            ></Route>
            <Route path="signup" element={<Login />}></Route>
            <Route path="form" element={<Forms />}></Route>
            <Route path="Project" element={<ProjectPage />}></Route>
            <Route path="EditForms/:id" element={<EditForms />}></Route>
            <Route path="ShowData/:id" element={<ShowData />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
} 

export default App;
