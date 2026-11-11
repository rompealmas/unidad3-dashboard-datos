import React, { useState } from 'react';
import { obtenerSerieDeTiempo } from '../services/dataService';
import TarjetaMetrica from './TarjetaMetrica';

function PanelAnalitico() {
  // 1. Definición de estados
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // 2. Función disparadora de la petición con try/catch/finally
  const consumirAPI = async () => {
    setCargando(true);
    setError(null);
    setDatos(null);

    try {
      // Retraso artificial de 1.5s para que te dé tiempo de tomar la captura de "Loading"
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const respuesta = await obtenerSerieDeTiempo();
      setDatos(respuesta);
    } catch (err) {
      setError('Error de conexión: No se pudo obtener la información de la API de ciencia de datos.');
    } finally {
      setCargando(false);
    }
  };

  const estilosPanel = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    marginTop: '30px',
    border: '1px solid #e2e8f0'
  };

  const estilosBoton = {
    backgroundColor: '#0ea5e9',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const alertaError = {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '15px',
    borderRadius: '5px',
    borderLeft: '5px solid #dc2626',
    fontWeight: 'bold'
  };

  const contenedorTarjetas = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  };

  return (
    <div style={estilosPanel}>
      <h2 style={{ marginBottom: '15px', color: '#1e293b' }}>Integración con API Externa (Clima)</h2>
      
      <button style={estilosBoton} onClick={consumirAPI} disabled={cargando}>
        {cargando ? 'Conectando con API...' : 'Obtener Datos Analíticos'}
      </button>

      {/* Renderizado Condicional de Estados */}
      
      {/* Estado: Cargando */}
      {cargando && (
        <div style={{ color: '#0ea5e9', fontWeight: 'bold', fontSize: '1.2rem' }}>
          ⏳ Analizando datos y consultando servidor...
        </div>
      )}

      {/* Estado: Error */}
      {error && (
        <div style={alertaError}>
          ⚠️ {error}
        </div>
      )}

      {/* Estado: Éxito (Reutilizando TarjetaMetrica de la práctica 3.2) */}
      {datos && !cargando && (
        <div style={contenedorTarjetas}>
          <TarjetaMetrica 
            titulo="Temperatura Actual" 
            valor={`${datos.temperatura} °C`} 
          />
          <TarjetaMetrica 
            titulo="Velocidad del Viento" 
            valor={`${datos.viento} km/h`} 
          />
        </div>
      )}
    </div>
  );
}

export default PanelAnalitico;