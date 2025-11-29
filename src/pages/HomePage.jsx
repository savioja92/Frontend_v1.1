import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutCard from "../components/LayoutCard";
import { styles } from "../styles/commonStyles";
import { dsStyles } from "../styles/dsStyles";


// Kotisivu (/)
function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={styles.app}>
      <LayoutCard
        header={
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <ds-icon
              ds-name="ds_flame"
              ds-size="4rem"
              ds-colour="ds-palette-black"
            >
            </ds-icon>
            <div style={{ maxWidth: "200px" }}>
              <h1 style={dsStyles.headerText}>HELSINGIN YLIOPISTO</h1>
            </div>
          </div>
        }
        footer={<p style={dsStyles.footerText}>@Helsingin Yliopisto</p>}
      >
      {/* Content only */}
      <div style={{ marginTop: "180px" }}>
        <h1 style={dsStyles.siteTitle}>DigiDens</h1>
      </div>

      <p style={dsStyles.subTitle}>
        Helsingin Yliopiston<br />Hammaslääketieteen oppimisympäristö
      </p>

      {/* Buttons */}
      <div style={dsStyles.buttonContainer}>
        <ds-button
          onClick={() => navigate("/studentCourses")}
          ds-value="Opiskelija"
          ds-full-width="true"
        ></ds-button>

        <ds-button
          onClick={() => navigate("/teacherYears")}
          ds-value="Opettaja"
          ds-variant="secondary"
          ds-full-width="true"
        ></ds-button>
      </div>

    </LayoutCard>

    </div >
  );
}

export default HomePage;
