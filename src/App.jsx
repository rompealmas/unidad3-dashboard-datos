import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import { obtenerDatosVisualizacion, procesarDatos } from './services/dataService';
import './App.css';

function App() {
  // Manejo de estado utilizando useState[cite: 71]
  const [datos, setDatos] = useState([]);
  const [metricas, setMetricas] = useState({
    totalProductos: 0,
    valorTotalInventario: 0,
    totalStock: 0
  });

  // Ejecución de la petición simulada al montar la app con useEffect[cite: 71]
  useEffect(() => {
    const cargarDatos = async () => {
      const dataCruda = await obtenerDatosVisualizacion();
      const dataProcesada = procesarDatos(dataCruda);
      
      setDatos(dataProcesada.filas);
      setMetricas(dataProcesada.metricas);
    };

    cargarDatos();
  }, []);

  const estilosContenedor = {
    padding: '40px 32px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const estilosTarjetasGrid = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  };

  return (
    <div>
      <Navbar />

      <main style={estilosContenedor}>
        {/* Instancias de TarjetaMetrica con diferentes propiedades[cite: 71] */}
        <div style={estilosTarjetasGrid}>
          <TarjetaMetrica 
            titulo="Total de Productos" 
            valor={metricas.totalProductos} 
          />
          <TarjetaMetrica 
            titulo="Valor de Inventario" 
            valor={`$${metricas.valorTotalInventario}`} 
          />
          <TarjetaMetrica 
            titulo="Unidades en Stock" 
            valor={metricas.totalStock} 
          />
        </div>

        {/* Instancia de TablaDatos inyectando el estado[cite: 71] */}
        <TablaDatos datos={datos} />
      </main>
    </div>
  );
}

export default App;