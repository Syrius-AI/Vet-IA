import { motion } from "framer-motion";
import { Megaphone, Headphones, Edit, Stethoscope, CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Megaphone,
      title: "Marketing y Captación de Nuevos Clientes",
      gradient: "from-purple-500 to-pink-500",
      items: [
        "Automatización de Google Business Profile y gestión de reseñas",
        "Asistente para marketing de contenidos y optimización SEO local",
        "Gestión de campañas de redes sociales y análisis de rendimiento",
        "Integración con publicidad local (Google Ads/Social Ads)"
      ]
    },
    {
      icon: Headphones,
      title: "Atención al Cliente y Comunicación",
      gradient: "from-blue-500 to-cyan-500",
      items: [
        "Sistema de citas online inteligente con recordatorios automáticos",
        "Chatbots y asistentes virtuales 24/7 para consultas frecuentes",
        "Plataforma de email marketing y SMS integrada",
        "Soporte al cliente proactivo con atención preventiva personalizada"
      ]
    },
    {
      icon: Edit,
      title: "Creación de Contenidos y Educación",
      gradient: "from-green-500 to-emerald-500",
      items: [
        "Generador de contenido clínico para descripciones de enfermedades",
        "Biblioteca de recursos visuales de alta calidad",
        "Guías para preguntas frecuentes y educación del cliente",
        "Fichas informativas personalizadas para dueños de mascotas"
      ]
    },
    {
      icon: Stethoscope,
      title: "Soporte al Diagnóstico y Tratamiento",
      gradient: "from-red-500 to-orange-500",
      items: [
        "Análisis de diagnóstico por imagen (radiografías, ecografías)",
        "Asistentes de diagnóstico virtual con sugerencias inteligentes",
        "Medicina personalizada con planes de tratamiento adaptativos",
        "Análisis predictivo para identificación temprana de riesgos"
      ]
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Características Principales de VetIA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los módulos y funcionalidades que transformarán tu clínica veterinaria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
