import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Target, Star, Bot, Package } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Beneficios Clave: Optimización y Crecimiento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo VetIA revoluciona tu clínica veterinaria con soluciones inteligentes que reducen costos y aumentan ganancias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cost Optimization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Reduce Costos Operativos y Maximiza la Eficiencia
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Automatización Administrativa</h4>
                  <p className="text-gray-600">
                    VetIA automatiza tareas rutinarias como transcripción de consultas, gestión de inventario y recordatorios automáticos, liberando tiempo valioso del personal y reduciendo errores humanos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Package className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Gestión Inteligente de Inventario</h4>
                  <p className="text-gray-600">
                    Nuestra IA predice necesidades futuras y optimiza pedidos para minimizar el desperdicio y garantizar disponibilidad de suministros críticos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revenue Growth */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Impulsa tus Ingresos y Atrae Más Clientes
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mejora de la Experiencia del Cliente</h4>
                  <p className="text-gray-600">
                    Un servicio más eficiente y personalizado con recordatorios de citas y comunicación proactiva fomenta la fidelidad del cliente y genera más recomendaciones.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Identificación de Oportunidades</h4>
                  <p className="text-gray-600">
                    El análisis de datos de tu clínica permite identificar servicios rentables y nichos de mercado no explotados para maximizar ingresos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Programas de Fidelización Inteligentes</h4>
                  <p className="text-gray-600">
                    Implementa planes de salud y programas de lealtad automatizados que mantienen a los clientes comprometidos y aumentan el valor de vida del cliente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
