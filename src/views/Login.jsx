import React from "react";
import styles from "./../styles/Login.module.css";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";

function Login() {
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
          />
          <input
            type="password"
            placeholder="Contraseña"
            className={styles.inputField}
          />
          <button className={styles.loginBtn}>Entrar</button>
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
