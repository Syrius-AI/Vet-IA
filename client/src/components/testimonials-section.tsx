import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dra. María González",
      clinic: "Clínica Veterinaria San Patricio",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      testimonial: "VetIA transformó completamente nuestra operación. Reducimos los costos administrativos en un 40% y aumentamos la satisfacción del cliente significativamente."
    },
    {
      name: "Dr. Carlos Mendoza",
      clinic: "Centro Veterinario Integral",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      testimonial: "La capacidad de VetIA para predecir necesidades de inventario y automatizar recordatorios nos ahorró más de 20 horas semanales de trabajo manual."
    },
    {
      name: "Dra. Ana Ruiz",
      clinic: "Hospital Veterinario Norte",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      testimonial: "El sistema de diagnóstico asistido por IA nos ha ayudado a detectar problemas de salud más temprano, mejorando significativamente los resultados de nuestros pacientes."
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo VetIA ha transformado clínicas veterinarias en todo el país
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, veterinario`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.clinic}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "{testimonial.testimonial}"
              </p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
