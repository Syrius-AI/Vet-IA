import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nuestra Misión</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            En VetIA, empoderamos a las clínicas veterinarias con tecnología inteligente de vanguardia para revolucionar la gestión, optimizar el diagnóstico y fortalecer la relación con los clientes. Creemos que la inteligencia artificial puede transformar el cuidado animal, haciendo que las clínicas sean más eficientes, rentables y centradas en el bienestar de las mascotas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
