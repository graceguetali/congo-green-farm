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

      {page === 'businessplan' && <BusinessPlan />}
      {page === 'maquette' && <Maquette />}
      {page === 'pdf' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
            <a
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
import { useState } from "react";

const VERT = "#1A5C1A";
const OR = "#C8920A";
const GRIS = "#4A4A4A";
const VERT_CLAIR = "#2D8A2D";
const ROUGE = "#C0392B";
const BLEU = "#1A5276";

const HORIZONS = {
  h1: {
    label: "Horizon 1 — Démarrage",
    periode: "Année 1–2 · 1 ouvrier",
    couleur: VERT,
    structure: [
      {
        id: "dg",
        titre: "DIRECTEUR GÉNÉRAL",
        sous: "Fondateur & Promoteur",
        couleur: VERT,
        niveau: 0,
        desc: "Pilote la stratégie globale, gère les finances, assure les relations commerciales et supervise toutes les opérations de l'exploitation.",
        responsabilites: [
          "Direction stratégique et opérationnelle",
          "Gestion financière et comptabilité",
          "Relations clients et partenaires",
          "Supervision de toute l'équipe",
        ],
      },
      {
        id: "resp_elev",
        titre: "RESP. ÉLEVAGE",
        sous: "Technicien avicole",
        couleur: "#8B4513",
        niveau: 1,
        parent: "dg",
        desc: "Responsable du suivi quotidien des poulets de chair et des pondeuses. Gère l'alimentation, la santé du cheptel et les bandes.",
        responsabilites: [
          "Suivi quotidien chair et pondeuses",
          "Application du plan de vaccination",
          "Alimentation et abreuvement",
          "Collecte et conditionnement des œufs",
        ],
      },
      {
        id: "resp_agri",
        titre: "RESP. AGRICULTURE",
        sous: "Technicien agricole",
        couleur: "#2D6A2D",
        niveau: 1,
        parent: "dg",
        desc: "Responsable des cultures de maïs et soja sur 2 ha. Gère les semis, l'entretien, la récolte et le stockage des céréales.",
        responsabilites: [
          "Gestion des cultures (2 ha maïs + soja)",
          "Planification des semis et récoltes",
          "Gestion des intrants agricoles",
          "Compostage des déjections",
        ],
      },
    ],
  },
  h2: {
    label: "Horizon 2 — Croissance",
    periode: "Année 2–4 · 5 employés",
    couleur: OR,
    structure: [
      {
        id: "dg",
        titre: "DIRECTEUR GÉNÉRAL",
        sous: "Fondateur & Promoteur",
        couleur: VERT,
        niveau: 0,
        desc: "Direction générale, stratégie de croissance, levée de fonds et développement commercial vers les grandes surfaces et collectivités.",
        responsabilites: [
          "Direction et stratégie de croissance",
          "Levée de fonds investisseurs",
          "Développement commercial B2B",
          "Représentation institutionnelle",
        ],
      },
      {
        id: "daf",
        titre: "COMPTABLE / DAF",
        sous: "Direction Administrative & Financière",
        couleur: BLEU,
        niveau: 1,
        parent: "dg",
        desc: "Gère la comptabilité, la trésorerie, les déclarations fiscales et les rapports financiers mensuels de l'exploitation.",
        responsabilites: [
          "Tenue de la comptabilité SYSCOHADA",
          "Gestion de la trésorerie",
          "Déclarations fiscales et sociales",
          "Rapports financiers mensuels",
        ],
      },
      {
        id: "dir_tech",
        titre: "DIRECTEUR TECHNIQUE",
        sous: "Responsable des opérations",
        couleur: GRIS,
        niveau: 1,
        parent: "dg",
        desc: "Supervise l'ensemble des opérations techniques : élevage, agriculture et logistique. Coordonne les équipes terrain.",
        responsabilites: [
          "Supervision des opérations terrain",
          "Coordination des équipes techniques",
          "Contrôle qualité production",
          "Maintenance des équipements",
        ],
      },
      {
        id: "resp_elev",
        titre: "RESP. ÉLEVAGE",
        sous: "Technicien avicole senior",
        couleur: "#8B4513",
        niveau: 2,
        parent: "dir_tech",
        desc: "Gère 5 000 poulets/bande et 2 000 pondeuses avec 2 ouvriers. Supervise l'alimentation, la santé et la production.",
        responsabilites: [
          "Gestion 5 000 chair + 2 000 pondeuses",
          "Encadrement 2 ouvriers élevage",
          "Suivi performances zootechniques",
          "Relation vétérinaire",
        ],
      },
      {
        id: "resp_agri",
        titre: "RESP. AGRICULTURE",
        sous: "Technicien agricole",
        couleur: "#2D6A2D",
        niveau: 2,
        parent: "dir_tech",
        desc: "Gère 5 ha de cultures (maïs + soja) et supervise la mini-broyerie pour la fabrication d'aliment interne.",
        responsabilites: [
          "Gestion 5 ha (maïs + soja)",
          "Supervision mini-broyerie",
          "Production aliment interne",
          "Gestion stock céréales",
        ],
      },
      {
        id: "resp_logis",
        titre: "RESP. LOGISTIQUE",
        sous: "Commercial & Distribution",
        couleur: "#6C3483",
        niveau: 2,
        parent: "dir_tech",
        desc: "Gère les livraisons, les relations clients et l'organisation du quai de chargement. Assure la distribution vers Brazzaville.",
        responsabilites: [
          "Gestion des livraisons Brazzaville",
          "Relations clients grossistes",
          "Gestion chambre froide",
          "Suivi commandes et facturation",
        ],
      },
    ],
  },
  h3: {
    label: "Horizon 3 — Agro-Industriel",
    periode: "Année 4–5 · 25+ employés",
    couleur: ROUGE,
    structure: [
      {
        id: "dg",
        titre: "DIRECTEUR GÉNÉRAL",
        sous: "Fondateur & PDG",
        couleur: VERT,
        niveau: 0,
        desc: "Pilote le développement agro-industriel, les partenariats stratégiques, la marque commerciale et l'expansion régionale en Afrique Centrale.",
        responsabilites: [
          "Vision et stratégie agro-industrielle",
          "Partenariats régionaux CEMAC",
          "Développement marque commerciale",
          "Relations investisseurs et banques",
        ],
      },
      {
        id: "daf",
        titre: "DIRECTION FINANCIÈRE",
        sous: "DAF + Équipe comptable",
        couleur: BLEU,
        niveau: 1,
        parent: "dg",
        desc: "Direction financière complète avec une équipe de 2 personnes. Audit interne, contrôle de gestion, reporting aux investisseurs.",
        responsabilites: [
          "Contrôle de gestion",
          "Audit interne",
          "Reporting investisseurs",
          "Gestion trésorerie industrielle",
        ],
      },
      {
        id: "dir_comm",
        titre: "DIRECTION COMMERCIALE",
        sous: "Marketing & Ventes",
        couleur: OR,
        niveau: 1,
        parent: "dg",
        desc: "Développe la marque Congo Green Farm, gère les contrats grands comptes (supermarchés, hôtels, collectivités) et la communication.",
        responsabilites: [
          "Gestion marque Congo Green Farm",
          "Contrats grands comptes",
          "Stratégie marketing digital",
          "Export sous-région CEMAC",
        ],
      },
      {
        id: "dir_tech",
        titre: "DIRECTION TECHNIQUE",
        sous: "Production & Qualité",
        couleur: GRIS,
        niveau: 1,
        parent: "dg",
        desc: "Supervise toute la chaîne de production industrielle : élevage, agriculture, transformation, qualité et maintenance.",
        responsabilites: [
          "Supervision chaîne industrielle",
          "Contrôle qualité ISO",
          "Maintenance équipements",
          "Formation du personnel",
        ],
      },
      {
        id: "resp_elev",
        titre: "RESP. ÉLEVAGE",
        sous: "20 000 poulets · 10 000 pondeuses",
        couleur: "#8B4513",
        niveau: 2,
        parent: "dir_tech",
        desc: "Gère la production avicole industrielle avec une équipe de 8 ouvriers. Supervise l'abattoir et le conditionnement.",
        responsabilites: [
          "20 000 chair/bande × 6 bandes",
          "10 000 pondeuses",
          "Supervision abattoir",
          "Encadrement 8 ouvriers",
        ],
      },
      {
        id: "resp_agri",
        titre: "RESP. AGRICULTURE",
        sous: "10 ha · Minoterie",
        couleur: "#2D6A2D",
        niveau: 2,
        parent: "dir_tech",
        desc: "Gère 10 ha de cultures et la minoterie industrielle produisant 70% de l'aliment en interne.",
        responsabilites: [
          "Gestion 10 ha cultures",
          "Minoterie 70% aliment interne",
          "Gestion stock céréales",
          "Encadrement 4 ouvriers agricoles",
        ],
      },
      {
        id: "resp_logis",
        titre: "RESP. LOGISTIQUE",
        sous: "3 camions frigos · Distribution",
        couleur: "#6C3483",
        niveau: 2,
        parent: "dir_tech",
        desc: "Gère la flotte de 3 camions frigorifiques, la chambre froide industrielle et la distribution sur Brazzaville et Pointe-Noire.",
        responsabilites: [
          "Flotte 3 camions frigos",
          "Chambre froide industrielle",
          "Distribution Brazzaville + PNR",
          "Encadrement 4 chauffeurs-livreurs",
        ],
      },
    ],
  },
};

function Boite({ poste, isSelected, onClick }) {
  return (
    <div
      onClick={() => onClick(poste)}
      style={{
        background: isSelected ? poste.couleur : "#fff",
        border: `2px solid ${poste.couleur}`,
        borderRadius: 8,
        padding: "10px 14px",
        cursor: "pointer",
        minWidth: 140,
        maxWidth: 180,
        textAlign: "center",
        transition: "all 0.2s",
        boxShadow: isSelected ? `0 4px 16px ${poste.couleur}44` : "0 2px 8px #00000018",
        transform: isSelected ? "scale(1.04)" : "scale(1)",
      }}
    >
      <div style={{
        fontSize: 10, fontWeight: 800, letterSpacing: 0.5,
        color: isSelected ? "#fff" : poste.couleur,
        fontFamily: "Arial, sans-serif",
        marginBottom: 4,
      }}>
        {poste.titre}
      </div>
      <div style={{
        fontSize: 9, color: isSelected ? "rgba(255,255,255,0.85)" : "#666",
        fontFamily: "Arial, sans-serif", lineHeight: 1.3,
      }}>
        {poste.sous}
      </div>
    </div>
  );
}

function ConnectorLine({ color }) {
  return (
    <div style={{
      width: 2, height: 24, background: color,
      margin: "0 auto", opacity: 0.5,
    }} />
  );
}

function HorizontalBranch({ children, color }) {
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
      {/* Ligne horizontale */}
      <div style={{
        position: "absolute", top: -1,
        left: "10%", right: "10%",
        height: 2, background: color, opacity: 0.4,
      }} />
      {children}
    </div>
  );
}

export default function Organigramme() {
  const [horizon, setHorizon] = useState("h1");
  const [selected, setSelected] = useState(null);
  const h = HORIZONS[horizon];

  const niveau0 = h.structure.filter(p => p.niveau === 0);
  const niveau1 = h.structure.filter(p => p.niveau === 1);
  const niveau2 = h.structure.filter(p => p.niveau === 2);

  const handleClick = (poste) => {
    setSelected(selected?.id === poste.id ? null : poste);
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#F5F0E8",
      minHeight: "100vh",
      padding: "0 0 40px",
    }}>

      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${VERT} 0%, #0A2A0A 100%)`,
        padding: "20px 16px 16px",
        color: "#fff",
      }}>
        <div style={{ fontSize: 10, letterSpacing: 2, color: "#6DB86D", textTransform: "uppercase", marginBottom: 4 }}>
          Structure Organisationnelle
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#F4C842" }}>
          CONGO GREEN FARM
        </div>
        <div style={{ fontSize: 11, color: "#8FBC8F", marginTop: 2 }}>
          Organigramme — {h.label}
        </div>

        {/* Sélecteur horizon */}
        <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {Object.entries(HORIZONS).map(([key, val]) => (
            <button key={key} onClick={() => { setHorizon(key); setSelected(null); }} style={{
              padding: "6px 14px", borderRadius: 16, border: "2px solid",
              borderColor: horizon === key ? "#F4C842" : "rgba(255,255,255,0.3)",
              background: horizon === key ? "#F4C842" : "transparent",
              color: horizon === key ? VERT : "#fff",
              fontWeight: 700, fontSize: 11, cursor: "pointer",
            }}>
              {val.label.split("—")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Période */}
      <div style={{
        margin: "12px 16px",
        padding: "8px 12px",
        background: h.couleur + "18",
        border: `1px solid ${h.couleur}44`,
        borderRadius: 8,
        fontSize: 11, color: h.couleur, fontWeight: 600,
      }}>
        📅 {h.periode}
      </div>

      {/* Organigramme */}
      <div style={{ padding: "0 12px", overflowX: "auto" }}>

        {/* Niveau 0 — DG */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
          {niveau0.map(p => (
            <Boite key={p.id} poste={p} isSelected={selected?.id === p.id} onClick={handleClick} />
          ))}
        </div>

        {niveau1.length > 0 && (
          <>
            <ConnectorLine color={h.couleur} />
            <HorizontalBranch color={h.couleur}>
              {niveau1.map(p => (
                <div key={p.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 2, height: 20, background: h.couleur, opacity: 0.4 }} />
                  <Boite poste={p} isSelected={selected?.id === p.id} onClick={handleClick} />
                </div>
              ))}
            </HorizontalBranch>
          </>
        )}

        {niveau2.length > 0 && (
          <>
            <ConnectorLine color={h.couleur} />
            <HorizontalBranch color={h.couleur}>
              {niveau2.map(p => (
                <div key={p.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 2, height: 20, background: h.couleur, opacity: 0.4 }} />
                  <Boite poste={p} isSelected={selected?.id === p.id} onClick={handleClick} />
                </div>
              ))}
            </HorizontalBranch>
          </>
        )}
      </div>

      {/* Panneau détail */}
      <div style={{
        margin: "16px 12px 0",
        minHeight: 80,
        background: selected ? "#fff" : "#F0EDE6",
        borderRadius: 12,
        border: `1px solid ${selected ? selected.couleur + "66" : "#DDD"}`,
        overflow: "hidden",
        transition: "all 0.3s",
      }}>
        {selected ? (
          <div>
            <div style={{
              padding: "12px 14px 10px",
              background: selected.couleur + "18",
              borderBottom: `1px solid ${selected.couleur}33`,
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14, color: selected.couleur }}>{selected.titre}</div>
                <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{selected.sous}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{
                background: "none", border: "none", color: "#888", fontSize: 18, cursor: "pointer",
              }}>✕</button>
            </div>
            <div style={{ padding: "10px 14px" }}>
              <p style={{ fontSize: 12, color: "#444", lineHeight: 1.6, marginBottom: 10, fontFamily: "Arial, sans-serif" }}>
                {selected.desc}
              </p>
              <div style={{ fontSize: 11, fontWeight: 700, color: selected.couleur, marginBottom: 6 }}>
                Responsabilités clés :
              </div>
              {selected.responsabilites.map((r, i) => (
                <div key={i} style={{ fontSize: 11, color: "#555", marginBottom: 4, display: "flex", gap: 6 }}>
                  <span style={{ color: selected.couleur }}>•</span> {r}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ padding: 16, textAlign: "center", color: "#888", fontSize: 12 }}>
            👆 Clique sur un poste pour voir ses responsabilités
          </div>
        )}
      </div>

      {/* Légende effectifs */}
      <div style={{ margin: "12px 12px 0", padding: "10px 14px", background: "#fff", borderRadius: 10, border: "1px solid #E5DDD0" }}>
        <div style={{ fontSize: 10, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
          Effectifs par horizon
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            { h: "H1", n: "1 employé", c: VERT },
            { h: "H2", n: "5 employés", c: OR },
            { h: "H3", n: "25+ employés", c: ROUGE },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: item.c }} />
              <span style={{ fontSize: 11, color: "#555" }}><strong>{item.h}</strong> — {item.n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}