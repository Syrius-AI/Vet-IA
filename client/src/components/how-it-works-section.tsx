import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Registro",
      description: "Regístrate en nuestra plataforma y configura tu perfil de clínica veterinaria con información básica.",
      color: "bg-blue-800"
    },
    {
      number: "2",
      title: "Integración",
      description: "Nuestro equipo te ayuda a integrar VetIA con tus sistemas existentes de manera fluida y segura.",
      color: "bg-green-600"
    },
    {
      number: "3",
      title: "Optimización",
      description: "Comienza a ver resultados inmediatos mientras VetIA aprende y se adapta a las necesidades específicas de tu clínica.",
      color: "bg-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Cómo Funciona VetIA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Implementar VetIA en tu clínica es fácil y rápido. Sigue estos simples pasos para comenzar tu transformación digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
