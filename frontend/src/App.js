import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./view/Form/Forms";
import Navbars from "./componant/Navbar/Navbar";
import Sidebar from "./componant/Sidebar/Sidebar";
import Login from "./componant/Login/Login";
import ProjectPage from "./componant/ProjectPage/ProjectPage";
import Maindash from "./view/Maindash/Maindash";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbars />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-row h-screen">
                  <Login />
                </div>
              }
            ></Route>
            <Route
              path="dashboard"
              element={
                <div className="w-5/6">
                  <Maindash />
                </div>
              }
            ></Route>
             <Route path="Login" element={<Login />}></Route>
            <Route path="form" element={<Forms />}></Route>
            <Route path="Project" element={<ProjectPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
