import { motion } from "framer-motion";

const ExampleMotion = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }} // Estado inicial (invisible y más abajo)
         whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
         viewport={{ once: true, amount: 0.2 }} // Configuración del scroll
         transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1], // Easing suave (Cubic Bezier)
         }}
      >
         <h2>Contenido de la sección</h2>
         <p>Este texto aparecerá suavemente hacia arriba.</p>
      </motion.div>
   );
};

export { ExampleMotion };
