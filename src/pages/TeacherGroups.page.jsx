import React, { useState } from "react"; 
import { ryhmat } from "../mockData/ryhmat";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import LayoutCard from "../components/LayoutCard";
import { studentFrontStyles as styles } from "../styles/commonStyles";
import TeacherAddCard from "../components/TeacherAddCard";

export default function TeacherGroupsPage() {
  const navigate = useNavigate();
  const { courseName } = useParams();
  const [activeView, setActiveView] = useState("groups"); // "groups" or "details"

  // Ryhmät aakkosjärjestyksessä
  const ryhmalistaus = ryhmat.sort((a, b) => a.nimi.localeCompare(b.nimi));

  if (activeView === "details") {
    return <TeacherAddCard courseName={courseName} />;
  }

  return (
    <div style={styles.app}>
      <LayoutCard
        header={
          <>
            <div style={styles.headerRow}>
              <img src={logo} alt="Logo" style={styles.logo} />
              <div style={styles.topRight}>
                <span style={styles.filter}>Suodata: Kaikki</span>
                <span style={styles.hamburger}>☰</span>
              </div>
            </div>
          </>
        }
        dividerStyle={{ backgroundColor: "#00000022" }}
        contentStyle={{ padding: "15px 30px" }}
        footer={<p style={styles.footerText}>@Helsingin Yliopisto</p>}
      >
        {/* Takaisin-painike */}
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ← Takaisin
        </button>

        {/* Välilehdet */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button
            style={{
              ...styles.primaryButton,
              backgroundColor: activeView === "groups" ? "#007bff" : "#6c757d",
              padding: "10px 20px",
              fontSize: "16px",
            }}
            onClick={() => setActiveView("groups")}
          >
            Ryhmät
          </button>
          <button
            style={{
              ...styles.primaryButton,
              backgroundColor: activeView === "details" ? "#007bff" : "#6c757d",
              padding: "10px 20px",
              fontSize: "16px",
            }}
            onClick={() => setActiveView("details")}
          >
            Kurssin tiedot
          </button>
        </div>

        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
          {ryhmalistaus.length > 0 ? ryhmalistaus[0].kurssitunnus : ""}: Ryhmät
        </h1>

        {/* Ryhmät isona painikkeena */}
        <div style={styles.itemContainer}>
          {ryhmalistaus.map((ryhma) => {
            return (
              <button
                key={ryhma.id}
                style={styles.itemButton}
                onClick={() => alert(`Siirryt ryhmään: ${ryhma.nimi}`)}
              >
                <div style={styles.courseInfo}>
                  <div>
                    <p>{ryhma.nimi}</p>
                  </div>
                  <div style={styles.arrow}>→</div>
                </div>
              </button>
            );
          })}
        </div>
      </LayoutCard>
    </div>
  );
}
