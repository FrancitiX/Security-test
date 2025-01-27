import React, { useState } from "react";
import styles from "./../styles/Login.module.css";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";

function Register() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <div className={styles.fullContainer}>
      <div className={styles.login_Container}>
        <div className={styles.login_Box}>
          <div className={styles.login_Logo}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </div>
          <h2 className={styles.loginTitle}>Registrarse</h2>
          {/* <div className={styles.inputs}>
            <div className={styles.inputSection}>
              <input
                type="text"
                placeholder="Username"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Correo Electrónico"
                className={styles.inputField}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                className={styles.inputField}
              />
              <input
                type="password"
                placeholder="Repetir contraseña"
                className={styles.inputField}
              />
            </div>
          </div> */}
          <div className={styles.slider}>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${step * 100}%)` }}
            >
              {/* Paso 1 */}
              <div className={styles.slide}>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.inputField}
                />
                <input
                  type="text"
                  placeholder="Correo Electrónico"
                  className={styles.inputField}
                />
              </div>

              {/* Paso 2 */}
              <div className={styles.slide}>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className={styles.inputField}
                />
                <input
                  type="password"
                  placeholder="Repetir contraseña"
                  className={styles.inputField}
                />
              </div>
            </div>
          </div>
          {/* <button className={styles.loginBtn}>Registrar</button> */}
          {step > 0 && (
            <button className={styles.loginBtn} onClick={prevStep}>
              Anterior
            </button>
          )}
          {step < 1 ? (
            <button className={styles.loginBtn} onClick={nextStep}>
              Siguiente
            </button>
          ) : (
            <button className={styles.loginBtn}>Registrar</button>
          )}
          <div className={styles.registerLink}>
            <p>¿Ya tienes cuenta?</p>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
