import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Qué tan difícil es implementar VetIA en mi clínica?",
      answer: "La implementación de VetIA es muy sencilla. Nuestro equipo de soporte te guía paso a paso durante todo el proceso de integración, que típicamente toma entre 2-5 días dependiendo del tamaño de tu clínica."
    },
    {
      question: "¿Es segura la información de mis pacientes?",
      answer: "Absolutamente. VetIA cumple con todos los estándares de seguridad de datos más exigentes. Utilizamos encriptación de extremo a extremo y servidores seguros para proteger toda la información médica de tus pacientes."
    },
    {
      question: "¿Puedo integrar VetIA con mi sistema actual?",
      answer: "Sí, VetIA está diseñado para integrarse con la mayoría de sistemas de gestión veterinaria existentes. Nuestro equipo técnico evaluará tu sistema actual y te proporcionará una solución de integración personalizada."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Muchas clínicas ven mejoras inmediatas en eficiencia desde el primer día. Los beneficios completos, como el aumento de ingresos y la optimización de costos, típicamente se observan dentro de las primeras 4-6 semanas de uso."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Respuestas a las preguntas más comunes sobre VetIA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border-none">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
