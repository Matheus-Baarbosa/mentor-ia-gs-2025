export default function Button({ children, onClick, variant = "primary" }) {
const variants = {
primary: { background: "#4CAF50", color: "white" },
danger: { background: "#E53935", color: "white" },
secondary: { background: "#333", color: "white" }
};


return (
<button
onClick={onClick}
style={{
padding: "10px 15px",
borderRadius: "6px",
border: "none",
cursor: "pointer",
...variants[variant]
}}
>
{children}
</button>
);
}