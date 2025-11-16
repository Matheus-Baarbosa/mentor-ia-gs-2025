export const getBotResponse = (msg) => {
msg = msg.toLowerCase();


if (msg.includes("carreira") || msg.includes("profissão"))
return "Carreiras em alta: IA, Cibersegurança, Cloud, Análise de Dados e UX.";


if (msg.includes("skill") || msg.includes("habilidade"))
return "Skills essenciais: Python, SQL, Comunicação, Estatística e Git.";


if (msg.includes("futuro") || msg.includes("tendência"))
return "Tendências: automação cognitiva, IA generativa, personalização total e robótica avançada.";


return "Não entendi muito bem, mas posso te ajudar! Pergunte sobre carreiras, habilidades ou tendências.";
};