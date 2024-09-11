import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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

  const handleCreateProduct = () => {
    navigate("/products/create", { replace: true });
  };

  return (
    <AppBar position="static" className="navBar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Test by employee
        </Typography>
        <Button color="inherit" onClick={handleCreateProduct}>
          Crear Producto
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
