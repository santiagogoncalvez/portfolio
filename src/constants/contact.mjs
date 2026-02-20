const phone = "5491135821266";
const message =
   "¡Hola Santiago! Vi tu portfolio y me interesó tu trabajo. Me gustaría contarte sobre un proyecto web que tengo en mente y consultar tu disponibilidad. ¡Saludos!";
const encodedMessage = encodeURIComponent(message);

export const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

export const mail = "santiago.goncalvez.dev@gmail.com";
