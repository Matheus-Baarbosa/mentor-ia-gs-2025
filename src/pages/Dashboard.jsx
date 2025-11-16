import { loadData } from "../utils/storage";

export default function Dashboard() {
  const skills = loadData("skills");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard - Nível de Preparo</h1>

      <p style={{ marginTop: "10px" }}>
        Total de skills cadastradas: <strong>{skills.length}</strong>
      </p>

      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            height: "20px",
            width: "300px",
            background: "#333",
            borderRadius: "5px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${skills.length * 20}px`,
              background: "#4caf50"
            }}
          ></div>
        </div>

        <p style={{ marginTop: "10px" }}>
          Quanto mais skills você cadastrar, maior será sua barra de preparo para o futuro do trabalho!
        </p>
      </div>
    </div>
  );
}
