import { Home, Building, Factory, PenTool, HardHat, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Construção Residencial",
    description:
      "Casas, apartamentos e condomínios projetados com qualidade e atenção aos detalhes para o conforto da sua família.",
  },
  {
    icon: Building,
    title: "Construção Comercial",
    description:
      "Escritórios, lojas e centros comerciais modernos que atendem às necessidades do seu negócio.",
  },
  {
    icon: Factory,
    title: "Construção Industrial",
    description:
      "Galpões, fábricas e instalações industriais com infraestrutura robusta e eficiente.",
  },
  {
    icon: PenTool,
    title: "Projetos Arquitetônicos",
    description:
      "Design personalizado e projetos arquitetônicos que transformam a sua visão em realidade.",
  },
  {
    icon: HardHat,
    title: "Gestão de Obras",
    description:
      "Acompanhamento completo da obra com controle de qualidade, prazos e orçamento.",
  },
  {
    icon: Wrench,
    title: "Remodelações e Manutenção",
    description:
      "Serviços de remodelação, ampliação e manutenção predial com excelência e pontualidade.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            Soluções Completas em Construção
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades 
            em construção civil, sempre com qualidade e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
