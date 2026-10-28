import React from 'react';

function Navbar() {
  const estilosNavbar = {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
  };

  const estilosTitulo = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  };

  const estilosAlumno = {
    fontSize: '1rem',
    backgroundColor: '#334155',
    padding: '6px 14px',
    borderRadius: '6px',
    color: '#e2e8f0'
  };

  return (
    <header style={estilosNavbar}>
      <div style={estilosTitulo}>
        Dashboard de Ciencia de Datos
      </div>
      <div style={estilosAlumno}>
        Alumno: Pérez Castro Saúl Magdiel
      </div>
    </header>
  );
}

export default Navbar;