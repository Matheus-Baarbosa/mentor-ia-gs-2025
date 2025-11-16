import { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Skills() {
  const [skills, setSkills] = useLocalStorage("skills", []);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (!input.trim()) return;
    setSkills([...skills, input]);
    setInput("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Minhas Skills</h1>

      <Card>
        <div style={{ display: "flex", gap: "10px" }}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Adicionar nova skill..."
          />
          <Button onClick={addSkill}>Adicionar</Button>
        </div>
      </Card>

      <Card>
        {skills.map((s, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px"
            }}
          >
            <span>{s}</span>
            <Button variant="danger" onClick={() => removeSkill(i)}>
              Remover
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}
