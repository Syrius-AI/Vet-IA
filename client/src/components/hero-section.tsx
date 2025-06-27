import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              VetIA: La Inteligencia Artificial que Transforma tu Clínica Veterinaria
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Optimiza Costos, Incrementa Ganancias y Eleva el Cuidado Animal con Soluciones de IA de Vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("beneficios")}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all"
              >
                Descubre Cómo
              </Button>
              <Button
                onClick={() => scrollToSection("contacto")}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all bg-transparent"
              >
                Solicita una Demostración
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Veterinario moderno utilizando tecnología avanzada"
              className="rounded-xl shadow-2xl w-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Bot className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">IA Integrada</p>
                  <p className="text-sm text-gray-500">24/7 Disponible</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
