import { useState } from 'react';
import BusinessPlan from './business_plan_agro_congo';
import Maquette from './maquette_exploitation_congo';

function App() {
  const [page, setPage] = useState('businessplan');

  const navStyle = (p) => ({
    padding: '8px 16px',
    cursor: 'pointer',
    background: page === p ? '#2D6A2D' : 'transparent',
    color: page === p ? '#fff' : '#aaa',
    border: 'none',
    borderBottom: page === p ? '2px solid #F4C842' : '2px solid transparent',
    fontWeight: page === p ? 700 : 400,
    fontSize: 13,
    fontFamily: 'Arial, sans-serif',
    letterSpacing: 1,
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#111', minHeight: '100vh' }}>

      {/* Barre de navigation */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#0A1A0A', borderBottom: '1px solid #2D5A2D',
        padding: '0 16px', flexWrap: 'wrap', gap: 4
      }}>
        <span style={{ color: '#F4C842', fontWeight: 800, fontSize: 14, padding: '10px 0', letterSpacing: 1 }}>
          🌿 CONGO GREEN FARM
        </span>
        <div style={{ display: 'flex' }}>
          <button style={navStyle('businessplan')} onClick={() => setPage('businessplan')}>
            📊 Business Plan
          </button>
          <button style={navStyle('maquette')} onClick={() => setPage('maquette')}>
            🗺️ Maquette
          </button>
          <button style={navStyle('pdf')} onClick={() => setPage('pdf')}>
            📄 Document PDF
          </button>
        </div>
      </div>

      {/* Contenu */}
      {page === 'businessplan' && <BusinessPlan />}
      {page === 'maquette' && <Maquette />}
      {page === 'pdf' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            
              href="/CONGO_GREEN_FARM_BusinessPlan.pdf"
              download="CONGO_GREEN_FARM_BusinessPlan.pdf"
              style={{
                padding: '10px 20px', background: '#2D6A2D', color: '#fff',
                borderRadius: 6, textDecoration: 'none', fontWeight: 700, fontSize: 13
              }}
            >
              ⬇️ Télécharger le PDF
            </a>
          </div>
          <iframe
            src="/CONGO_GREEN_FARM_BusinessPlan.pdf"
            title="Business Plan Congo Green Farm"
            style={{ width: '100%', maxWidth: 900, height: '85vh', border: 'none', borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
}

export default App;