import React from 'react';

function Registrar({ registrar, deleteRegistrar, editRegistrar }) {
  return (
    <li>
      <span>{registrar.tipoCedula} - {registrar.identificacion} - {registrar.nombreApellidos} - {registrar.placa}</span>
      <button onClick={() => editRegistrar(registrar)}>Editar</button>
      <button onClick={() => deleteRegistrar(registrar.id)}>Eliminar</button>
    </li>
  );
}

export default Registrar;
