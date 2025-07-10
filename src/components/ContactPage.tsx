import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

function ContactPage() {
  const institutions = [
    {
      name: "Fundación Amparo",
      location: "Cúcuta",
      phone: "601 2345678",
      email: "contacto@amparo.org",
    },
    {
      name: "Centro Esperanza",
      location: "Los Patios",
      phone: "571 9876543",
      email: "info@esperanza.com",
    },
    {
      name: "Asociación Renacer",
      location: "Villa del Rosario",
      phone: "601 8765432",
      email: "contacto@renacer.org",
    },
    {
      name: "Clínica Nueva Vida",
      location: "Cúcuta",
      phone: "601 5432109",
      email: "info@nuevavida.com",
    },
  ];

  const handleCallPhone = (phone: string) => {
    window.open(`tel:${phone.replace(/\s/g, "")}`);
  };

  const handleSendEmail = (email: string) => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Directorio de instituciones
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Encuentra aquí las instituciones y organizaciones que pueden
            brindarte apoyo en tu proceso de recuperación y prevención.
          </p>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {institution.name}
                </h3>
                <div className="flex items-center space-x-2 text-white/80 mb-3">
                  <MapPin size={16} />
                  <span>{institution.location}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => handleCallPhone(institution.phone)}
                  className="flex-1 bg-white hover:bg-white/90 text-purple-700 font-semibold py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone size={16} />
                  <span className="text-sm">{institution.phone}</span>
                </button>

                <button
                  onClick={() => handleSendEmail(institution.email)}
                  className="flex-1 bg-white hover:bg-white/90 text-purple-700 font-semibold py-3 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail size={16} />
                  <span className="text-sm truncate">{institution.email}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
          <button className="bg-white hover:bg-white/90 text-purple-700 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <MessageCircle size={20} />
            <span>Escribir ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
