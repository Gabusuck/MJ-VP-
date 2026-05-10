import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-construction.jpg"
          alt="Construção moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Anos de Experiência
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Construímos o Futuro com Qualidade e Excelência
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialistas em Obras, remodelações e construção. 
            Transformamos os seus projetos em realidade com compromisso e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
            >
              <Link href="#projetos">
                Ver Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-base px-8"
            >
              <Link href="#agendar">Agendar Consulta</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 flex justify-center max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/10 backdrop-blur-sm rounded-lg border border-primary-foreground/10 min-w-[250px]">
            <p className="font-serif text-3xl md:text-4xl font-bold text-accent">94%</p>
            <p className="text-sm text-primary-foreground/70 mt-1">dos clientes satisfeitos</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
