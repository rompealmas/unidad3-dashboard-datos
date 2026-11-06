import React from 'react';

function TablaDatos({ datos }) {
  const estilosTablaContenedor = {
    marginTop: '30px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  };

  const estilosTabla = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px'
  };

  const estilosCelda = {
    padding: '12px',
    borderBottom: '1px solid #e2e8f0',
    textAlign: 'left'
  };

  return (
    <div style={estilosTablaContenedor}>
      <h3 style={{ color: '#334155' }}>Detalle de Productos</h3>
      <table style={estilosTabla}>
        <thead>
          <tr style={{ backgroundColor: '#f8fafc' }}>
            <th style={estilosCelda}>ID</th>
            <th style={estilosCelda}>Nombre</th>
            <th style={estilosCelda}>Precio ($)</th>
            <th style={estilosCelda}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizado dinámico de filas usando el método .map() */}
          {datos.map((item) => (
            <tr key={item.id}>
              <td style={estilosCelda}>{item.id}</td>
              <td style={estilosCelda}>{item.nombre}</td>
              <td style={estilosCelda}>${item.precio}</td>
              <td style={estilosCelda}>{item.stock} uds.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDatos;