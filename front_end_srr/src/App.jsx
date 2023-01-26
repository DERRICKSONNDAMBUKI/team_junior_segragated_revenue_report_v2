import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Home } from "./pages/Home";
import { Laboratory } from "./pages/laboratory/Laboratory";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          {/* <Route path="/" element={<Home />} exact /> */}
          <Route path="/" element={<Dashboard />} exact/>
          <Route path="/laboratory" element={<Laboratory />} />

          {/* no route */}
          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h1>There's nothing here!</h1>
                <Link to={"/"}>
                  <button
                    style={{
                      textDecoration: "none",
                      border: "none",
                      width: 120,
                      borderRadius: 5,
                      padding: "20px",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Go Back Home
                  </button>
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

