import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      clinic: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+1 (555) 123-4567",
      color: "bg-blue-800"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@vetia.com",
      color: "bg-green-600"
    },
    {
      icon: MapPin,
      title: "Oficina",
      info: "123 Innovation Ave, Tech City, TC 12345",
      color: "bg-red-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Twitter, href: "#", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Linkedin, href: "#", color: "bg-blue-700 hover:bg-blue-800" },
    { icon: Instagram, href: "#", color: "bg-pink-600 hover:bg-pink-700" }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu clínica veterinaria? Ponte en contacto con nosotros hoy mismo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicita una Demostración</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-800 mb-2">
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  placeholder="Dr. Juan Pérez"
                  {...form.register("name")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                />
                {form.formState.errors.name && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-800 mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@clinica.com"
                  {...form.register("email")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                />
                {form.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-800 mb-2">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  {...form.register("phone")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="clinic" className="text-sm font-medium text-gray-800 mb-2">
                  Nombre de la Clínica
                </Label>
                <Input
                  id="clinic"
                  placeholder="Clínica Veterinaria San Patricio"
                  {...form.register("clinic")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                />
                {form.formState.errors.clinic && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.clinic.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-gray-800 mb-2">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Cuéntanos sobre tu clínica y cómo podemos ayudarte..."
                  {...form.register("message")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                />
              </div>
              
              <Button
                type="submit"
                disabled={submitContactMutation.isPending}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                {submitContactMutation.isPending ? "Enviando..." : "Solicitar Demostración"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center mr-4`}>
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{contact.title}</h4>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white transition-colors`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
