import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>

              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>

              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>

              <Route path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>

              <Route path="/signup">
                {!user && <Signup />}
                {user && <Redirect to="/" />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
