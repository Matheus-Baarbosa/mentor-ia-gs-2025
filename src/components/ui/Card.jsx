export default function Card({ children }) {
return (
<div
style={{
background: "#1c1c1c",
padding: "20px",
borderRadius: "10px",
marginBottom: "20px",
boxShadow: "0 0 10px rgba(0,0,0,0.4)"
}}
>
{children}
</div>
);
}