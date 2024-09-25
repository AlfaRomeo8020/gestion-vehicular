import React, { useState } from 'react';
import Form from './components/Form';
import Listar from './components/Listar';
import './App.css';


function App() {
  // Estado para gestionar los registros
  const [registrars, setRegistrars] = useState([]);
  const [editingRegistrar, setEditingRegistrar] = useState(null); // Estado para gestionar el registro que se está editando

  // Función para agregar o editar un registro
  const saveRegistrar = (newRegistrar) => {
    if (editingRegistrar) {
      setRegistrars(
        registrars.map((registrar) =>
          registrar.id === editingRegistrar.id ? newRegistrar : registrar
        )
      );
      setEditingRegistrar(null);
    } else {
      setRegistrars([...registrars, { ...newRegistrar, id: Date.now() }]);
    }
  };

  // Función para eliminar un registro
  const deleteRegistrar = (id) => {
    setRegistrars(registrars.filter((registrar) => registrar.id !== id));
  };

  // Función para cargar un registro en el formulario
  const editRegistrar = (registrar) => {
    setEditingRegistrar(registrar);
  };

  return (
    <div  className="app-container">
       <header className="app-header">
        <h1>Gestión de Automotores</h1>
       </header>
       <div className="layout-container">      
        <div className="left-layout">
          <Listar
            registrars={registrars}
            deleteRegistrar={deleteRegistrar}
            editRegistrar={editRegistrar}
          />
        </div>
        <div className="right-layout">
          <Form saveRegistrar={saveRegistrar} editingRegistrar={editingRegistrar} />
        </div>
       </div>
    </div>
  );
}

export default App;
