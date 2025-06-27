import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(href)}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
    >
      {children}
    </button>
  );

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-800">VetIA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="inicio">Inicio</NavLink>
              <NavLink href="beneficios">Beneficios</NavLink>
              <NavLink href="caracteristicas">Características</NavLink>
              <NavLink href="testimonios">Testimonios</NavLink>
              <NavLink href="contacto">Contacto</NavLink>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2"
            >
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLink href="inicio">Inicio</NavLink>
                  <NavLink href="beneficios">Beneficios</NavLink>
                  <NavLink href="caracteristicas">Características</NavLink>
                  <NavLink href="testimonios">Testimonios</NavLink>
                  <NavLink href="contacto">Contacto</NavLink>
                  <Button 
                    onClick={() => scrollToSection("contacto")}
                    className="bg-red-600 hover:bg-red-700 text-white w-full mt-4"
                  >
                    Solicitar Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
