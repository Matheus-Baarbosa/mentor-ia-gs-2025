export default function Navbar({ currentPage, setPage }) {
return (
<nav style={styles.nav}>
<button style={styles.button(currentPage === "mentor")} onClick={() => setPage("mentor")}>
Mentor IA
</button>
<button style={styles.button(currentPage === "skills")} onClick={() => setPage("skills")}>
Skills
</button>
<button style={styles.button(currentPage === "dashboard")} onClick={() => setPage("dashboard")}>
Dashboard
</button>
</nav>
);
}


const styles = {
nav: {
background: "#141414",
padding: "15px 25px",
display: "flex",
gap: "10px",
borderBottom: "1px solid #222"
},


button: (active) => ({
padding: "10px 15px",
borderRadius: "6px",
border: "none",
cursor: "pointer",
background: active ? "#4CAF50" : "#222",
color: "white",
transition: "0.2s"
})
};