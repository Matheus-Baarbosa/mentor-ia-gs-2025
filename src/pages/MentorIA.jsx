import { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getBotResponse } from "../utils/responses";


export default function MentorIA() {
const [messages, setMessages] = useLocalStorage("chat", []);
const [input, setInput] = useState("");


const sendMessage = () => {
if (!input.trim()) return;


const userMsg = { sender: "Você", text: input };
const botMsg = { sender: "Mentor IA", text: getBotResponse(input) };


setMessages([...messages, userMsg, botMsg]);
setInput("");
};


return (
<div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
<h1>Mentor IA</h1>


<Card>
<div style={{ height: "55vh", overflowY: "auto" }}>
{messages.map((m, i) => (
<p key={i}>
<strong style={{ color: "#4CAF50" }}>{m.sender}:</strong> {m.text}
</p>
))}
</div>
</Card>


<div style={{ display: "flex", gap: "10px" }}>
<Input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Pergunte algo sobre carreira..."
/>
<Button onClick={sendMessage}>Enviar</Button>
</div>
</div>
);
}