import { useState } from 'react';
import BusinessPlan from './business_plan_agro_congo';
import Maquette from './maquette_exploitation_congo';

function App() {
  const [page, setPage] = useState('businessplan');

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, padding: 10, background: '#222' }}>
        <button onClick={() => setPage('businessplan')} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Business Plan
        </button>
        <button onClick={() => setPage('maquette')} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Maquette
        </button>
      </div>
      {page === 'businessplan' ? <BusinessPlan /> : <Maquette />}
    </div>
  );
}

export default App;