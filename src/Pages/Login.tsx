import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import "../Styles/Login.modules.scss";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("usuario@dominio.com");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Por favor ingrese un correo electrónico válido.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "La contraseña debe tener entre 6 y 12 caracteres, incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");
    login(email, password);
    navigate("/products");
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <h2>Iniciar Sesión</h2>
        {error && <p className="errorMessage">{error}</p>}
        <div className="formGroup">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="loginButton">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
