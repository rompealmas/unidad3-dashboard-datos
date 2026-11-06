import React from 'react';

function TarjetaMetrica({ titulo, valor }) {
  const estilosTarjeta = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    flex: '1',
    minWidth: '200px',
    textAlign: 'center'
  };

  const estilosTitulo = {
    fontSize: '1rem',
    color: '#64748b',
    marginBottom: '10px'
  };

  const estilosValor = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#0f172a',
    margin: '0'
  };

  return (
    <div style={estilosTarjeta}>
      <h3 style={estilosTitulo}>{titulo}</h3>
      <p style={estilosValor}>{valor}</p>
    </div>
  );
}

export default TarjetaMetrica;