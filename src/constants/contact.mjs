const phone = "5491135821266";
// El que ya tenías (Proyecto específico)
const projectMessage =
   "¡Hola Santiago! Vi tu portfolio y me interesó tu trabajo. Me gustaría contarte sobre un proyecto web que tengo en mente y consultar tu disponibilidad. ¡Saludos!";

// El de "Charlar" (Descubrimiento/Asesoría)
const chatMessage =
   "¡Hola Santiago! Estuve viendo tu trabajo y me gustaría agendar una charla para contarte sobre una idea que tengo y ver cómo podemos impulsarla. ¡Saludos!";

export const whatsappUrlprojectMessage = `https://wa.me/${phone}?text=${encodeURIComponent(projectMessage)}`;
export const whatsappUrlchatMessage = `https://wa.me/${phone}?text=${encodeURIComponent(chatMessage)}`;

export const mail = "santiago.goncalvez.dev@gmail.com";
