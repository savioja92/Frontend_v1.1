import React from "react";
import logo from "./assets/logo.png";

function App() {
  return (
    <div style={styles.app}>
      <div style={styles.card}>
        {/* Logo */}
        <img src={logo} alt="Logo" style={styles.logo} />

        {/* Tekstit keskellä vasemmalla */}
        <div style={styles.textContainer}>
          <h1 style={styles.appName}>DigiDens</h1>
          <p style={styles.subtitle}>
            Helsingin Yliopiston<br /> Hammaslääketieteen oppimisympäristö
          </p>
        </div>

        {/* Painikkeet + alatunniste alaosassa */}
        <div style={styles.bottomContainer}>
          <div style={styles.buttonContainer}>
            <button style={styles.button}>Kirjaudu Sisään Opettajana</button>
            <button style={styles.button}>Kirjaudu Sisään Opiskelijana</button>
          </div>
          <p style={styles.alatunniste}>Helsingin Yliopisto</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcdcdc",
    padding: "40px",
    boxSizing: "border-box",
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    minHeight: "800px",
    padding: "40px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Tekstit pysyvät keskellä ylhäällä, alaosa pohjassa
  },
  logo: {
    width: "50px",
    height: "auto",
    alignSelf: "flex-start",
    marginBottom: "10px",
  },
  textContainer: {
    // Tekstit pysyvät tässä keskellä vasemmalla
  },
  appName: {
    fontSize: "clamp(22px, 4vw, 36px)",
    fontWeight: "500",
    marginBottom: "0px",
    textTransform: "none",
    color: "#000000",
    
  },
  subtitle: {
    fontSize: "clamp(14px, 2.5vw, 15px)",
    color: "#8F8F8F",
    lineHeight: "1.2",
    marginTop: "5px",
  },
  bottomContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // keskittää painikkeet ja alatunniste
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    alignItems: "center",
  },
  button: {
    padding: "15px 20px",
    width: "100%",
    backgroundColor: "#48A39B",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "clamp(14px, 2.5vw, 18px)",
    fontWeight: "400",
  },
  alatunniste: {
    textAlign: "center",
    marginTop: "25px",
    fontSize: "17px",
    color: "#5C5C5C",
  },
};

export default App;
