import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Listar({ registrars, deleteRegistrar, editRegistrar }) {
  

  return (
    <div>
      <h2 className="left-align">Lista de Vehículo</h2>
   <table>
        <thead>
          <tr>
            <th>T.Identificación</th>
            <th>Identificación</th>
            <th>Nombres</th>
            <th>Placa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registrars.map((registrar) => (
            <tr key={registrar.id}>
              <td className="td-centrado">{registrar.tipoCedula}</td>
              <td>{registrar.identificacion}</td>
              <td>{registrar.nombreApellidos}</td>
              <td>{registrar.placa}</td>
              <td>
                {/* Aquí puedes agregar botones para editar o eliminar */}
                <button  className="action-button btn-primary " onClick={() => editRegistrar(registrar)}> <FontAwesomeIcon icon={faEdit} /></button>
                <button className="action-button btn-danger" onClick={() => deleteRegistrar(registrar.id)}> <FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listar;
