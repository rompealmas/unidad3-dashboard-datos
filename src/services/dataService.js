import apiClient from './apiClient'; // Mantén tu importación de la Práctica 3

export const obtenerDatosVisualizacion = async () => {
  try {
    const respuesta = await fetch('/datos.json');
    if (!respuesta.ok) throw new Error('Error al cargar los datos');
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const procesarDatos = (datos) => {
  const etiquetas = datos.map(item => item.mes);
  const valoresVentas = datos.map(item => item.ventas);
  
  const totalVentas = valoresVentas.reduce((acc, curr) => acc + curr, 0);
  const totalUsuarios = datos.reduce((acc, curr) => acc + curr.usuarios, 0);

  return {
    etiquetas,
    valoresVentas,
    totalVentas,
    totalUsuarios,
    datosOriginales: datos
  };
};

export const filtrarDatos = (datos, filtros) => {
  if (filtros.mes === 'todos') return datos;
  return datos.filter(item => item.mes === filtros.mes);
};

// Mantén tu función de la Práctica 3 aquí abajo
export const obtenerSerieDeTiempo = async () => {
  const response = await apiClient.get('/forecast?latitude=19.4284&longitude=-99.1276&current_weather=true');
  const clima = response.data.current_weather;
  return {
    temperatura: clima.temperature,
    viento: clima.windspeed,
    tiempo: clima.time
  };
};