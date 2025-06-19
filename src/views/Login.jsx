import React from "react";
import styles from "./../styles/Login.module.css";
import Logo from "/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../auth/user";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    login(username, password)
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        alert("Usuario o contraseña incorrectos");
        console.error("Login failed:", error);
      });
  };

  return (
    <div className={styles.background}>
      <div className={styles.form_Container}>
        <div className={styles.form_Box}>
          <div className={styles.form_Logo}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </div>
          <h2 className={styles.formTitle}>Iniciar Sesión</h2>

          <div className={styles.formInputs}>
            <input
              type="text"
              placeholder="Correo Electrónico"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className={styles.inputPassword}>
              <input
                type="password"
                placeholder="Contraseña"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className={styles.inputContain}>
              <input
                className={classNames(styles.input, styles.passwordInput)}
                type={visible ? "text" : "password"}
                name={name}
                id={id}
                required
                value={value}
                onChange={change}
              />
              <div
                className={classNames(styles.iconVisible, styles.passwordIcon)}
                onClick={passwordVisible}
              >
                {visible ? (
                  <span className="material-symbols-outlined">visibility</span>
                ) : (
                  <span className="material-symbols-outlined">visibility_off</span>
                )}
              </div>
              <label htmlFor={id}>{placeHolder}</label>
            </div> */}
          </div>

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
