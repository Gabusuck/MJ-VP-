import { Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telemóvel",
    details: ["962 016 563"],
  },
  {
    icon: MapPin,
    title: "Morada",
    details: ["Vila Chã de Sá, Portugal, 3510"],
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    details: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            Entre em Contacto Connosco
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos prontos para o ajudar. Entre em contacto através dos canais abaixo 
            ou visite o nosso escritório.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail) => (
                  <p key={detail} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
