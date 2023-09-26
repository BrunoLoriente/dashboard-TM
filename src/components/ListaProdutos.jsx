import React from 'react';
import './listas.css'

export default function ListaProductos({ data, header }) {
  return (
    <div className="lista-productos">
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            {header.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
