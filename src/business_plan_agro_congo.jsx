import { useState } from "react";

const COLORS = {
  terre: "#5C3D1E",
  savane: "#8B6914",
  vert: "#2D6A2D",
  vertClair: "#4A9A4A",
  or: "#C8920A",
  creme: "#F9F4EC",
  blanc: "#FFFFFF",
  gris: "#6B7280",
  grisClair: "#F3F0EB",
  rouge: "#C0392B",
};

const data = {
  horizon1: {
    label: "Horizon 1 — Démarrage",
    periode: "Année 1 – 2",
    description: "Exploitation pilote pour valider le modèle, former l'équipe et générer les premiers revenus.",
    investissements: [
      { poste: "Terrain (location 2 ha, 2 ans)", montant: 600000 },
      { poste: "Construction poulailler chair (500 places)", montant: 1500000 },
      { poste: "Construction poulailler pondeuses (200 places)", montant: 800000 },
      { poste: "Équipements (mangeoires, abreuvoirs, lampes)", montant: 400000 },
      { poste: "Installation solaire (panneaux + batteries + onduleur)", montant: 1500000 },
      { poste: "Forage / pompe à eau", montant: 500000 },
      { poste: "Clôture sécurisée", montant: 300000 },
      { poste: "Matériel agricole basique (1 ha maïs)", montant: 200000 },
      { poste: "Fonds de roulement initial (3 mois)", montant: 3000000 },
    ],
    chargesAnnuelles: [
      { poste: "Poussins 4 jours (500/bande × 6 bandes × 600 FCFA)", montant: 1800000 },
      { poste: "Poulettes pondeuses (200 × 2 000 FCFA)", montant: 400000 },
      { poste: "Aliment chair (12 000 kg × 350 FCFA)", montant: 4200000 },
      { poste: "Aliment pondeuses (8 395 kg × 350 FCFA)", montant: 2938250 },
      { poste: "Vaccins & vétérinaire", montant: 500000 },
      { poste: "Main d'œuvre (1 ouvrier permanent)", montant: 900000 },
      { poste: "Entretien système solaire", montant: 120000 },
      { poste: "Intrants agricoles (2 ha maïs + soja)", montant: 400000 },
      { poste: "Transport & commercialisation", montant: 400000 },
      { poste: "Divers & imprévus (10%)", montant: 1165825 },
    ],
    revenus: [
      { source: "Vente poulets de chair (57 lots de 50 × 250 000 FCFA/lot)", montant: 14250000 },
      { source: "Vente œufs (1 800 cageots de 30 × 3 000 FCFA/cageot)", montant: 5400000 },
      { source: "Vente surplus agricole (maïs + soja)", montant: 600000 },
    ],
  },
  horizon2: {
    label: "Horizon 2 — Croissance",
    periode: "Année 2 – 4",
    description: "Montée en puissance avec réinvestissement des bénéfices et entrée des premiers investisseurs.",
    investissements: [
      { poste: "Extension poulaillers chair (5 000 places)", montant: 12000000 },
      { poste: "Poulaillers pondeuses (2 000 places)", montant: 6000000 },
      { poste: "Unité fabrication aliment (mini-broyeur)", montant: 4500000 },
      { poste: "Chambre froide 10m³", montant: 3500000 },
      { poste: "Véhicule de livraison (camionnette)", montant: 6000000 },
      { poste: "Extension foncière (10 ha cultures)", montant: 2000000 },
      { poste: "Matériel agricole (tracteur léger)", montant: 8000000 },
      { poste: "Fonds de roulement", montant: 5000000 },
    ],
    chargesAnnuelles: [
      { poste: "Poussins (5 000/bande × 5 bandes)", montant: 12500000 },
      { poste: "Poulettes pondeuses (2 000)", montant: 6000000 },
      { poste: "Aliment volaille (produit en partie en interne)", montant: 18000000 },
      { poste: "Intrants agricoles (10 ha)", montant: 2500000 },
      { poste: "Personnel (5 employés)", montant: 5400000 },
      { poste: "Énergie (extension solaire + entretien)", montant: 3000000 },
      { poste: "Vétérinaire & prophylaxie", montant: 1200000 },
      { poste: "Transport & logistique", montant: 2400000 },
      { poste: "Divers & imprévus (10%)", montant: 5100000 },
    ],
    revenus: [
      { source: "Vente poulets de chair (570 lots de 50 × 250 000 FCFA/lot)", montant: 142500000 },
      { source: "Vente œufs (18 000 cageots de 30 × 3 000 FCFA/cageot)", montant: 54000000 },
      { source: "Vente surplus agricole (5 ha)", montant: 3000000 },
    ],
  },
  horizon3: {
    label: "Horizon 3 — Agro-industriel",
    periode: "Année 4 – 5",
    description: "Exploitation pleinement intégrée : abattoir, conditionnement, distribution propre et marque commerciale.",
    investissements: [
      { poste: "Poulaillers industriels (20 000 places)", montant: 45000000 },
      { poste: "Poulaillers pondeuses (10 000 places)", montant: 25000000 },
      { poste: "Abattoir & chaîne d'abattage semi-auto", montant: 20000000 },
      { poste: "Unité de conditionnement œufs", montant: 8000000 },
      { poste: "Chambre froide industrielle", montant: 12000000 },
      { poste: "Minoterie / fabrique aliment complète", montant: 15000000 },
      { poste: "50 ha foncier (achat ou bail long terme)", montant: 15000000 },
      { poste: "Flotte véhicules (3 camions frigorifiques)", montant: 24000000 },
      { poste: "Système solaire + raccordement SNÉL", montant: 10000000 },
      { poste: "Fonds de roulement", montant: 20000000 },
    ],
    chargesAnnuelles: [
      { poste: "Poussins (20 000/bande × 5 bandes)", montant: 50000000 },
      { poste: "Poulettes pondeuses (10 000)", montant: 30000000 },
      { poste: "Aliment (70% autoproduit)", montant: 60000000 },
      { poste: "Intrants agricoles (50 ha)", montant: 10000000 },
      { poste: "Personnel (25 employés)", montant: 27000000 },
      { poste: "Énergie (solaire industriel + réseau)", montant: 12000000 },
      { poste: "Vétérinaire & prophylaxie", montant: 5000000 },
      { poste: "Marketing & distribution", montant: 8000000 },
      { poste: "Divers & imprévus (10%)", montant: 20200000 },
    ],
    revenus: [
      { source: "Vente poulets de chair (2 280 lots de 50 × 250 000 FCFA/lot)", montant: 570000000 },
      { source: "Vente œufs (90 000 cageots de 30 × 3 000 FCFA/cageot)", montant: 270000000 },
      { source: "Vente surplus agricole (10 ha)", montant: 6000000 },
      { source: "Abattage à façon + services tiers", montant: 10000000 },
    ],
  },
};

function formatFCFA(n) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

function ProgressBar({ value, max, color }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ background: "#E5DDD0", borderRadius: 4, height: 8, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, background: color, height: "100%", borderRadius: 4, transition: "width 0.6s ease" }} />
    </div>
  );
}

function TableSection({ title, icon, rows, color, total }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ fontWeight: 700, color, fontSize: 15, letterSpacing: 0.3 }}>{title}</span>
      </div>
      <div style={{ background: COLORS.blanc, borderRadius: 10, overflow: "hidden", border: `1px solid #E5DDD0` }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "10px 14px", background: i % 2 === 0 ? COLORS.blanc : COLORS.grisClair,
            borderBottom: i < rows.length - 1 ? "1px solid #EDE8DF" : "none"
          }}>
            <span style={{ color: "#444", fontSize: 13 }}>{r.poste || r.source}</span>
            <span style={{ fontWeight: 600, color: "#222", fontSize: 13, whiteSpace: "nowrap", marginLeft: 12 }}>
              {formatFCFA(r.montant)}
            </span>
          </div>
        ))}
        <div style={{
          display: "flex", justifyContent: "space-between", padding: "12px 14px",
          background: color + "18", borderTop: `2px solid ${color}`
        }}>
          <span style={{ fontWeight: 700, color, fontSize: 14 }}>TOTAL</span>
          <span style={{ fontWeight: 800, color, fontSize: 14 }}>{formatFCFA(total)}</span>
        </div>
      </div>
    </div>
  );
}

function KPI({ label, value, sub, color, icon }) {
  return (
    <div style={{
      background: COLORS.blanc, borderRadius: 12, padding: "16px 18px",
      border: `2px solid ${color}22`, flex: 1, minWidth: 140
    }}>
      <div style={{ fontSize: 22, marginBottom: 4 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginTop: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: COLORS.gris, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

export default function BusinessPlan() {
  const [activeHorizon, setActiveHorizon] = useState("horizon1");
  const [activeTab, setActiveTab] = useState("synthese");
  const h = data[activeHorizon];

  const totalInvest = h.investissements.reduce((s, r) => s + r.montant, 0);
  const totalCharges = h.chargesAnnuelles.reduce((s, r) => s + r.montant, 0);
  const totalRevenus = h.revenus.reduce((s, r) => s + r.montant, 0);
  const resultat = totalRevenus - totalCharges;
  const margeNette = ((resultat / totalRevenus) * 100).toFixed(1);
  const payback = (totalInvest / Math.max(resultat, 1)).toFixed(1);

  const tabs = [
    { id: "synthese", label: "Synthèse" },
    { id: "invest", label: "Investissements" },
    { id: "charges", label: "Charges" },
    { id: "revenus", label: "Revenus" },
  ];

  const horizons = ["horizon1", "horizon2", "horizon3"];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: COLORS.creme, minHeight: "100vh", padding: "0 0 40px" }}>

      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.terre} 0%, ${COLORS.vert} 100%)`,
        padding: "28px 24px 24px", color: COLORS.blanc
      }}>
        <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.75, textTransform: "uppercase", marginBottom: 6 }}>
          Business Plan — Exploitation Agro-Industrielle
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>
          FERME INTÉGRÉE<br />
          <span style={{ color: "#F4C842" }}>BRAZZAVILLE SUD</span>
        </div>
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8 }}>
          Poulets de chair · Œufs · Agriculture vivrière · Congo-Brazzaville
        </div>

        {/* Horizon selector */}
        <div style={{ display: "flex", gap: 8, marginTop: 20, flexWrap: "wrap" }}>
          {horizons.map((hk) => (
            <button key={hk} onClick={() => setActiveHorizon(hk)} style={{
              padding: "7px 14px", borderRadius: 20, border: "2px solid",
              borderColor: activeHorizon === hk ? "#F4C842" : "rgba(255,255,255,0.3)",
              background: activeHorizon === hk ? "#F4C842" : "transparent",
              color: activeHorizon === hk ? COLORS.terre : COLORS.blanc,
              fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s"
            }}>
              {data[hk].label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 16px" }}>

        {/* Période & description */}
        <div style={{
          background: COLORS.or + "18", border: `1px solid ${COLORS.or}44`,
          borderRadius: 10, padding: "12px 16px", margin: "16px 0 12px",
          display: "flex", alignItems: "flex-start", gap: 10
        }}>
          <span style={{ fontSize: 18 }}>📅</span>
          <div>
            <div style={{ fontWeight: 700, color: COLORS.savane, fontSize: 13 }}>{h.periode}</div>
            <div style={{ color: "#555", fontSize: 12, marginTop: 2 }}>{h.description}</div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "#E8E0D4", borderRadius: 10, padding: 4 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              flex: 1, padding: "8px 4px", borderRadius: 8, border: "none",
              background: activeTab === t.id ? COLORS.blanc : "transparent",
              color: activeTab === t.id ? COLORS.terre : COLORS.gris,
              fontWeight: activeTab === t.id ? 700 : 500,
              fontSize: 12, cursor: "pointer", transition: "all 0.2s",
              boxShadow: activeTab === t.id ? "0 1px 4px rgba(0,0,0,0.1)" : "none"
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* SYNTHÈSE */}
        {activeTab === "synthese" && (
          <div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
              <KPI label="Investissement total" value={formatFCFA(totalInvest).replace(" FCFA", "")} sub="FCFA" color={COLORS.terre} icon="🏗️" />
              <KPI label="Résultat net annuel" value={formatFCFA(resultat).replace(" FCFA", "")} sub="FCFA" color={resultat >= 0 ? COLORS.vert : COLORS.rouge} icon={resultat >= 0 ? "📈" : "📉"} />
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
              <KPI label="Marge nette" value={`${margeNette}%`} sub="sur CA annuel" color={COLORS.or} icon="💰" />
              <KPI label="Retour investissement" value={`${payback} ans`} sub="payback estimé" color={COLORS.savane} icon="⏱️" />
            </div>

            {/* Comparatif revenus vs charges */}
            <div style={{ background: COLORS.blanc, borderRadius: 12, padding: 16, border: "1px solid #E5DDD0", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.terre, marginBottom: 14 }}>
                📊 Revenus vs Charges annuelles
              </div>
              {[
                { label: "Revenus", val: totalRevenus, color: COLORS.vert },
                { label: "Charges", val: totalCharges, color: COLORS.rouge },
                { label: "Résultat", val: resultat, color: COLORS.or },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, color: "#444" }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>{formatFCFA(Math.abs(item.val))}</span>
                  </div>
                  <ProgressBar value={Math.abs(item.val)} max={totalRevenus} color={item.color} />
                </div>
              ))}
            </div>

            {/* Alertes / recommandations */}
            <div style={{ background: COLORS.vert + "12", border: `1px solid ${COLORS.vert}33`, borderRadius: 10, padding: 14 }}>
              <div style={{ fontWeight: 700, color: COLORS.vert, fontSize: 13, marginBottom: 8 }}>✅ Points clés de ce scénario</div>
              {activeHorizon === "horizon1" && [
                "Démarrage prudent avec 500 poulets/bande — risque maîtrisé",
                "Les œufs génèrent plus de revenus que les poulets dès l'année 1",
                "L'aliment acheté à l'extérieur pèse 40% des charges — priorité à internaliser en H2",
                "Retour sur investissement estimé en moins de 2 ans si taux de mortalité < 10%",
              ].map((pt, i) => <div key={i} style={{ fontSize: 12, color: "#333", marginBottom: 4 }}>• {pt}</div>)}
              {activeHorizon === "horizon2" && [
                "×10 sur la capacité chair, ×10 sur les pondeuses par rapport à H1",
                "La mini-broyerie réduit le coût aliment de ~35% — levier de rentabilité majeur",
                "La chambre froide ouvre l'accès aux supermarchés et hôtels",
                "La flotte de livraison sécurise les débouchés et améliore la marge",
              ].map((pt, i) => <div key={i} style={{ fontSize: 12, color: "#333", marginBottom: 4 }}>• {pt}</div>)}
              {activeHorizon === "horizon3" && [
                "Modèle pleinement intégré : de la production à la distribution",
                "70% de l'aliment autoproduit — avantage concurrentiel durable",
                "L'abattoir permet de vendre du poulet découpé à valeur ajoutée",
                "CA prévisionnel > 660 millions FCFA/an — niveau PME agro-industrielle régionale",
              ].map((pt, i) => <div key={i} style={{ fontSize: 12, color: "#333", marginBottom: 4 }}>• {pt}</div>)}
            </div>
          </div>
        )}

        {/* INVESTISSEMENTS */}
        {activeTab === "invest" && (
          <TableSection
            title="Plan d'investissement initial"
            icon="🏗️"
            rows={h.investissements}
            color={COLORS.terre}
            total={totalInvest}
          />
        )}

        {/* CHARGES */}
        {activeTab === "charges" && (
          <TableSection
            title="Charges d'exploitation annuelles"
            icon="💸"
            rows={h.chargesAnnuelles}
            color={COLORS.rouge}
            total={totalCharges}
          />
        )}

        {/* REVENUS */}
        {activeTab === "revenus" && (
          <div>
            <TableSection
              title="Revenus annuels prévisionnels"
              icon="💰"
              rows={h.revenus}
              color={COLORS.vert}
              total={totalRevenus}
            />
            <div style={{ background: COLORS.blanc, borderRadius: 12, padding: 16, border: "1px solid #E5DDD0" }}>
              <div style={{ fontWeight: 700, color: COLORS.terre, fontSize: 14, marginBottom: 12 }}>Structure du CA</div>
              {h.revenus.map((r, i) => {
                const pct = ((r.montant / totalRevenus) * 100).toFixed(0);
                const cols = [COLORS.vert, COLORS.or, COLORS.savane, COLORS.terre];
                return (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 12, color: "#444" }}>{r.source.split("(")[0].trim()}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: cols[i] }}>{pct}%</span>
                    </div>
                    <ProgressBar value={r.montant} max={totalRevenus} color={cols[i]} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer navigation */}
        <div style={{
          marginTop: 24, padding: "14px 16px",
          background: COLORS.terre + "0D", borderRadius: 12,
          border: `1px solid ${COLORS.terre}22`, textAlign: "center"
        }}>
          <div style={{ fontSize: 12, color: COLORS.gris }}>
            📌 Prochaines étapes : <strong>Maquette 3D de l'exploitation</strong> · Structure juridique · Pitch investisseur
          </div>
        </div>
      </div>
    </div>
  );
}
