import React, { useState } from "react";
import styles from "./../styles/Login.module.css";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";
import { createUser } from "../auth/user"; // Asegúrate de tener una función para crear usuarios

function Register() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    paternal_surname: "",
    maternal_surname: "",
    username: "",
    email: "",
    phone: "",
    countryCode: "+52",
    password: "",
    type: 5,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    console.log("Datos del formulario:", formData);
    try {
      const status = await createUser(formData);
      console.log("Estado de creación de usuario:", status);
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  const nextStep = () => {
    if (step < 2) {
      if (
        (step == 0 && !formData.name) ||
        !formData.paternal_surname ||
        !formData.maternal_surname
      ) {
        alert("Por favor, completa todos los campos antes de continuar.");
        return;
      }
      if (step === 1 && (!formData.username || !formData.email)) {
        alert("Por favor, completa todos los campos antes de continuar.");
        return;
      }
      setStep(step + 1);
    }
    if (step === 2) {
      if (
        !formData.name ||
        !formData.paternal_surname ||
        !formData.maternal_surname ||
        !formData.username ||
        !formData.email ||
        !formData.phone ||
        !formData.password
      ) {
        alert("Por favor, completa todos los campos antes de registrarte.");
        return;
      }
      handleRegister();
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <div className={styles.background}>
      <div className={styles.form_Container}>
        <div className={styles.form_Box}>
          <div className={styles.form_Logo}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </div>
          <h2 className={styles.loginTitle}>Registrarse</h2>

          <div className={styles.slider}>
            <div className={styles.sliderWrapper}>
              <div
                className={styles.slider}
                style={{ transform: `translateX(-${step * 100}%)` }}
              >
                {/* Paso 0 */}
                <div className={styles.slide}>
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <div className={styles.doubleInput}>
                    <input
                      type="text"
                      placeholder="Apellido paterno"
                      name="paternal_surname"
                      className={styles.input}
                      value={formData.paternal_surname}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Apellido materno"
                      name="maternal_surname"
                      className={styles.input}
                      value={formData.maternal_surname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Paso 1 */}
                <div className={styles.slide}>
                  <input
                    type="text"
                    placeholder="Nombre de usuario"
                    name="username"
                    className={styles.input}
                    value={formData.username}
                    onChange={handleInputChange}
                  />

                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Paso 2 */}
                <div className={styles.slide}>
                  <div className={styles.cellphoneInput}>
                    <select
                      name="countryCode"
                      id="countryCode"
                      className={styles.countryCode}
                      value={formData.code}
                      onChange={handleInputChange}
                    >
                      <option value="+1">+1</option>
                      <option value="+52">+52</option>
                      <option value="+34">+34</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      name="phone"
                      className={styles.inputcellphone}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className={styles.input}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              className={step > 0 ? styles.loginBtn : styles.btnDisabled}
              onClick={prevStep}
              disabled={step === 0}
            >
              Anterior
            </button>
            <button className={styles.loginBtn} onClick={nextStep}>
              {step === 2 ? "Registrarse" : "Siguiente"}
            </button>
          </div>

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
