import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NutriLife</h3>
            <p className="text-emerald-200">
              Transformando vidas através da nutrição personalizada e consciente.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <a href="tel:+551199999999" className="flex items-center space-x-2 text-emerald-200 hover:text-white">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </a>
              <a href="mailto:contato@nutrilife.com" className="flex items-center space-x-2 text-emerald-200 hover:text-white">
                <Mail className="h-4 w-4" />
                <span>contato@nutrilife.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <a href="https://www.instagram.com/nutrilife" className="flex items-center space-x-2 text-emerald-200 hover:text-white">
              <Instagram className="h-4 w-4" />
              <span>@nutrilife</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-700 text-center text-emerald-200">
          <p>&copy; {new Date().getFullYear()} NutriLife. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;