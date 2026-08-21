import { useState } from "react";
import "./Registro.css";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
          <input
            name="correo"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            value={formData.correo}
          />
          <input
            name="contraseña"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.contraseña}
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
