export default function Input({ value, onChange, placeholder }) {
return (
<input
value={value}
onChange={onChange}
placeholder={placeholder}
style={{
padding: "12px",
borderRadius: "8px",
border: "1px solid #333",
width: "100%",
background: "#1a1a1a",
color: "white"
}}
/>
);
}