import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import PanelAnalitico from './components/PanelAnalitico';
import PanelFiltros from './components/PanelFiltros';
import DashboardLayout from './components/DashboardLayout';
import { obtenerDatosVisualizacion, procesarDatos, filtrarDatos } from './services/dataService';
import './App.css';

function App() {
  const [datosCrudos, setDatosCrudos] = useState([]);
  const [datosProcesados, setDatosProcesados] = useState(null);
  const [cargando, setCargando] = useState(true);

  // ESTADO GLOBAL DE FILTROS
  const [filtros, setFiltros] = useState({
    mes: 'todos',
    categoria: 'todas'
  });

  // Carga inicial de los datos
  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerDatosVisualizacion();
      setDatosCrudos(datos);
    };
    cargarDatos();
  }, []);

  // EFECTO QUE ESCUCHA LOS FILTROS
  useEffect(() => {
    if (datosCrudos.length > 0) {
      const datosFiltrados = filtrarDatos(datosCrudos, filtros);
      const procesados = procesarDatos(datosFiltrados);
      setDatosProcesados(procesados);
      setCargando(false);
    }
  }, [datosCrudos, filtros]);

  const estilosTarjetasGrid = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  };

  if (cargando) return <div>Cargando Dashboard...</div>;

  return (
    <div>
      <Navbar />

      <DashboardLayout 
        sidebar={
          <PanelFiltros filtros={filtros} setFiltros={setFiltros} />
        }
        main={
          <>
            <div style={estilosTarjetasGrid}>
              <TarjetaMetrica 
                titulo="Ventas Totales" 
                valor={`$${datosProcesados.totalVentas}`} 
              />
              <TarjetaMetrica 
                titulo="Usuarios Totales" 
                valor={datosProcesados.totalUsuarios} 
              />
              <TarjetaMetrica 
                titulo="Meses Mostrados" 
                valor={datosProcesados.datosOriginales.length} 
              />
            </div>

            <TablaDatos datos={datosProcesados.datosOriginales} />
            <PanelAnalitico />
          </>
        }
      />
    </div>
  );
}

export default App;