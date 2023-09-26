import React from 'react';

export default function SearchMovies({ data, header }) {
  return (
    <div className="lista-usuarios">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            {header.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
