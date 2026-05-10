import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Materiais de primeira linha e mão de obra especializada em todos os projetos.",
  },
  {
    icon: Users,
    title: "Equipa Experiente",
    description: "Profissionais qualificados com anos de experiência no mercado de construção.",
  },
  {
    icon: Clock,
    title: "Prazos Cumpridos",
    description: "Compromisso com cronogramas e entrega pontual de todos os projetos.",
  },
];

const checkItems = [
  "Projetos personalizados",
  "Acompanhamento técnico",
  "Garantia de 5 anos",
  "Orçamento transparente",
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-accent font-medium tracking-widest uppercase mb-4">
              Sobre Nós
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              Excelência em Construção Civil
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A MJ & VP Construção Civil é referência no mercado de construção civil, oferecendo 
              soluções completas para projetos residenciais, comerciais e industriais. 
              Nossa missão é transformar sonhos em realidade, construindo com qualidade, 
              segurança e respeito ao meio ambiente.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com uma equipa de mais de 150 profissionais qualificados, entregamos projetos 
              que superam as expectativas dos nossos clientes, sempre com transparência e 
              compromisso.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
