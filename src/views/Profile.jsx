import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  console.log("Perfil de Usuario", localStorage.getItem("userToken"));



  return (
    <>
      <NavBar />

      <main className="container">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Perfil de Usuario</h2>
            <p>Nombre: </p>
            <p>Email: </p>
          </div>
        </div>
        <div>
          <button onClick={() => {
            localStorage.removeItem("userToken");
            window.location.href = "/login";
          }}>Cerrar sesión</button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
