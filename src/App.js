import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//Pages
import { Create } from "./pages/create/Create";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import { Project } from "./pages/project/Project";
import { Signup } from "./pages/signup/Signup";

//Components
import { Navbar } from "./components/Navbar";

//Styles
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { OnlineUsers } from "./components/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />

              <Route
                path="/create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />

              <Route
                path="/projects/:id"
                element={user ? <Project /> : <Navigate to="/login" />}
              />

              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />

              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
