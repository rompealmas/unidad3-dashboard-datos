import React from 'react';

function DashboardLayout({ sidebar, main }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      minHeight: '100vh', 
      padding: '20px', 
      gap: '20px', 
      backgroundColor: '#f4f6f9' 
    }}>
      <aside style={{ flex: '1 1 250px', maxWidth: '300px' }}>
        {sidebar}
      </aside>
      
      <main style={{ flex: '3 1 600px', display: 'flex', flexDirection: 'column' }}>
        {main}
      </main>
    </div>
  );
}

export default DashboardLayout;