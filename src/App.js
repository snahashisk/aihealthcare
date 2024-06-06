import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";

function App() {
  const BackButtonListener = ({ children }) => {
    React.useEffect(() => {
      window.onpopstate = (e) => {
        sessionStorage.clear(); // Clear the localStorage
      };
    }, []);
    return;
  };

  return (
    <UserProvider>
      <NotificationProvider>
        <Router>
          <BackButtonListener />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </NotificationProvider>
    </UserProvider>
  );
}

export default App;
