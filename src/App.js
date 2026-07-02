import { useState } from 'react';
import BusinessPlan from './business_plan_agro_congo';
import Maquette from './maquette_exploitation_congo';
import Organigramme from './organigramme_congo_green_farm';

function App() {
  const [page, setPage] = useState('businessplan');

  const navStyle = (p) => ({
    padding: '8px 14px',
    cursor: 'pointer',
    background: page === p ? '#2D6A2D' : 'transparent',
    color: page === p ? '#fff' : '#aaa',
    border: 'none',
    borderBottom: page === p ? '2px solid #F4C842' : '2px solid transparent',
    fontWeight: page === p ? 700 : 400,
    fontSize: 12,
    fontFamily: 'Arial, sans-serif',
    letterSpacing: 0.5,
    whiteSpace: 'nowrap',
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#111', minHeight: '100vh' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#0A1A0A', borderBottom: '1px solid #2D5A2D',
        padding: '0 12px', flexWrap: 'wrap', gap: 4,
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <span style={{ color: '#F4C842', fontWeight: 800, fontSize: 13, padding: '10px 0', letterSpacing: 1 }}>
          🌿 CONGO GREEN FARM
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <button style={navStyle('businessplan')} onClick={() => setPage('businessplan')}>
            📊 Business Plan
          </button>
          <button style={navStyle('maquette')} onClick={() => setPage('maquette')}>
            🗺️ Maquette
          </button>
          <button style={navStyle('organigramme')} onClick={() => setPage('organigramme')}>
            🏢 Organigramme
          </button>
        </div>
      </div>

      {page === 'businessplan' && <BusinessPlan />}
      {page === 'maquette' && <Maquette />}
      {page === 'organigramme' && <Organigramme />}
    </div>
  );
}

export default App;