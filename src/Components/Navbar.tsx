import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/NavBar.modules.scss";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authTimestamp");
    navigate("/", { replace: true });
  };

  return (
    <AppBar position="static" className="navBar">
      <div className="container-nav">
        <Typography variant="h6" className="title">
          Test by employee
        </Typography>
        <Button color="inherit" className="button-logout" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>
    </AppBar>
  );
};

export default NavBar;
