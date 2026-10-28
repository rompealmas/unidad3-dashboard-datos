import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const estilosContenedor = {
    padding: '40px 32px',
    textAlign: 'center'
  };

  return (
    <div>
      {/* Renderizado del componente de navegación superior */}
      <Navbar />

      {/* Lienzo principal preparado para futuros modelos de datos */}
      <main style={estilosContenedor}>
        <h2>Entorno Frontend Inicializado Correctamente</h2>
        <p style={{ marginTop: '10px', color: '#64748b' }}>
          Proyecto base en React + Vite listo para la integración y visualización de modelos de Ciencia de Datos.
        </p>
      </main>
    </div>
  );
}

export default App;