import React from 'react';

function PanelFiltros({ filtros, setFiltros }) {
  
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ marginTop: '0', color: '#1e293b' }}>Filtros Globales</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>Mes</label>
          <select 
            name="mes" 
            value={filtros.mes} 
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="todos">Todos los meses</option>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px' }}>Categoría</label>
          <select 
            name="categoria" 
            value={filtros.categoria} 
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="todas">Todas</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PanelFiltros;