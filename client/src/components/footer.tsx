import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Producto",
      links: [
        { name: "Características", href: "#" },
        { name: "Precios", href: "#" },
        { name: "Integraciones", href: "#" },
        { name: "Actualizaciones", href: "#" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "#" },
        { name: "Documentación", href: "#" },
        { name: "Estado del Sistema", href: "#" },
        { name: "Contacto", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "#" },
        { name: "Términos de Servicio", href: "#" },
        { name: "Política de Cookies", href: "#" },
        { name: "GDPR", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" }
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">VetIA</h3>
            <p className="text-gray-300 mb-4">
              Transformando clínicas veterinarias con inteligencia artificial de vanguardia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 VetIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
