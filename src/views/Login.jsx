import React from "react";
import styles from "./../styles/Login.module.css";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";
import { login } from "../auth/user";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    login(username, password)
      .then((data) => {
        console.log("Login successful:", data);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.login_Container}>
        <div className={styles.login_Box}>
          <div className={styles.login_Logo}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </div>
          <h2 className={styles.loginTitle}>Iniciar Sesión</h2>

          <input
            type="text"
            placeholder="Correo Electrónico"
            className={styles.inputField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.loginBtn} onClick={handleLogin}>
            Entrar
          </button>
          <div className={styles.registerLink}>
            <p>¿No tienes cuenta?</p>
            <Link to="/register">Registrarse</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
