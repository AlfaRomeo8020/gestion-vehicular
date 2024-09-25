import React, { useState, useEffect } from 'react';

function Form({ saveRegistrar, editingRegistrar }) {
  const [formData, setFormData] = useState({
    tipoCedula: '',
    identificacion: '',
    nombreApellidos: '',
    placa: ''
  });

  // Cargar los datos del registro en el formulario cuando está en modo edición
  useEffect(() => {
    if (editingRegistrar) {
      setFormData(editingRegistrar);
    } else {
      setFormData({
        tipoCedula: '',
        identificacion: '',
        nombreApellidos: '',
        placa: ''
      });
    }
  }, [editingRegistrar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.tipoCedula && formData.identificacion && formData.nombreApellidos && formData.placa) {
      saveRegistrar(formData);
      setFormData({
        tipoCedula: '',
        identificacion: '',
        nombreApellidos: '',
        placa: ''
      });
    }
  };

  return (
    <div>
    <h2>Registro</h2>
    <form className="form-container" onSubmit={handleSubmit}>
      <select name="tipoCedula" className="form-input" value={formData.tipoCedula} onChange={handleChange} required>
        <option value="" disabled>Tipo de Cédula</option>
        <option value="CC">CC</option>
        <option value="CE">CE</option>
        <option value="TI">TI</option>
      </select>
      <input type="text" name="identificacion" className="form-input" value={formData.identificacion} onChange={handleChange} placeholder="Identificación" required/>
      <input type="text" name="nombreApellidos" className="form-input" value={formData.nombreApellidos} onChange={handleChange} placeholder="Nombre y Apellidos" required/>
      <input type="text" name="placa" className="form-input" value={formData.placa} onChange={handleChange} placeholder="Placa"  required />
      <button type="submit" className="form-button">{editingRegistrar ? 'Editar Registro' : 'Agregar Registro'}</button>
    </form>
    </div>
  );
}

export default Form;
