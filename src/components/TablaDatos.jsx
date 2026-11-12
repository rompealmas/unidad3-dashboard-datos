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
      <h3 style={{ color: '#334155' }}>Detalle Mensual</h3>
      <table style={estilosTabla}>
        <thead>
          <tr style={{ backgroundColor: '#1e293b', color: 'white' }}>
            <th style={estilosCelda}>Mes</th>
            <th style={estilosCelda}>Ventas</th>
            <th style={estilosCelda}>Usuarios</th>
            <th style={estilosCelda}>Conversión (%)</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td style={estilosCelda}>{item.mes}</td>
              <td style={estilosCelda}>${item.ventas}</td>
              <td style={estilosCelda}>{item.usuarios}</td>
              <td style={estilosCelda}>{item.conversion}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDatos;