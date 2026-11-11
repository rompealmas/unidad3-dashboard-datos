import apiClient from './apiClient';

// Dataset simulado estático
const datasetSimulado = [
  { id: 1, nombre: 'Laptop Gamer', precio: 15500, stock: 12 },
  { id: 2, nombre: 'Mouse Inalámbrico', precio: 450, stock: 50 },
  { id: 3, nombre: 'Teclado Mecánico', precio: 1200, stock: 34 },
  { id: 4, nombre: 'Monitor 144Hz', precio: 3800, stock: 8 },
  { id: 5, nombre: 'Audífonos', precio: 850, stock: 22 }
];

// Función que simula una petición HTTP (retorna una Promesa con retardo)
export const obtenerDatosVisualizacion = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datasetSimulado);
    }, 800); // Simula el tiempo de carga de una API
  });
};

// Función para preparar los datos antes de la visualización
export const procesarDatos = (datos) => {
  const totalProductos = datos.length;
  const valorTotalInventario = datos.reduce((acc, item) => acc + (item.precio * item.stock), 0);
  const totalStock = datos.reduce((acc, item) => acc + item.stock, 0);

  return {
    filas: datos,
    metricas: {
      totalProductos,
      valorTotalInventario,
      totalStock
    }
  };
};

export const obtenerSerieDeTiempo = async () => {
  // Petición GET a Open-Meteo para obtener clima actual (ejemplo de datos analíticos)[cite: 18, 19]
  const response = await apiClient.get('/forecast?latitude=19.4284&longitude=-99.1276&current_weather=true');
  
  // Extraer el payload limpio[cite: 18]
  const clima = response.data.current_weather;
  
  return {
    temperatura: clima.temperature,
    viento: clima.windspeed,
    tiempo: clima.time
  };
};