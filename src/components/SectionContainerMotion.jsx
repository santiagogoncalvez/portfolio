import { motion } from "framer-motion";

const SectionContainerMotion = ({children,...props}) => {
   return (
      <motion.section
         initial={{ opacity: 0, y: 30 }} // Estado inicial (invisible y más abajo)
         whileInView={{ opacity: 1, y: 0 }} // Estado al entrar en vista
         viewport={{ once: true, amount: 0.2 }} // Configuración del scroll
         transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.25, 1, 0.5, 1], // Easing suave (Cubic Bezier)
         }}
         className="w-full mx-auto lg:w-[900px] flex flex-col gap-8"
         {...props}
      >
         {children}
      </motion.section>
   );
};

export { SectionContainerMotion };
