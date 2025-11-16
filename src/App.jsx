import { useState } from "react";
import MentorIA from "./pages/MentorIA";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";


export default function App() {
const [page, setPage] = useState("mentor");


return (
<div>
<Navbar currentPage={page} setPage={setPage} />


{page === "mentor" && <MentorIA />}
{page === "skills" && <Skills />}
{page === "dashboard" && <Dashboard />}
</div>
);
}