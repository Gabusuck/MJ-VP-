"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["Todos", "Residencial", "Comercial", "Industrial", "Remodelação"];

const projects = [
  {
    id: 1,
    title: "Projeto Tondela",
    category: "Residencial",
    location: "Tondela, Viseu",
    year: "2026",
    images: [
      "/images/projeto-tondela-1.jpg",
      "/images/projeto-tondela-2.jpg",
      "/images/projeto-tondela-3.jpg",
    ],
    description:
      "Projeto residencial moderno com linhas direitas, amplas áreas envidraçadas e deck exterior em madeira. Desenvolvido em harmonia com a paisagem natural envolvente.",
    details: ["Arquitetura contemporânea", "Amplo deck exterior", "Integração com a natureza", "Acabamentos premium"],
  },
  {
    id: 2,
    title: "Projeto Viseu",
    category: "Residencial",
    location: "Viseu",
    year: "2026",
    images: [
      "/images/projeto-viseu-1.jpg",
      "/images/projeto-viseu-2.jpg",
      "/images/projeto-viseu-3.jpg",
    ],
    description:
      "Projeto de arquitetura contemporânea focado na funcionalidade e aproveitamento da luz natural. Espaços interiores abertos e integração fluida com a zona de lazer.",
    details: ["Design minimalista", "Eficiência energética", "Luz natural abundante", "Materiais nobres"],
  },
  {
    id: 3,
    title: "Moradia Moderna",
    category: "Residencial",
    location: "Portugal",
    year: "2025",
    images: [
      "/images/projeto-casarao-1.png",
      "/images/projeto-casarao-2.png",
      "/images/projeto-casarao-3.png",
    ],
    description:
      "Renovação e ampliação de um casarão tradicional. Preservação de elementos clássicos harmonizados com conforto e tecnologia moderna.",
    details: ["Restauro histórico", "Materiais autênticos", "Modernização de interiores", "Design clássico-contemporâneo"],
  },
  {
    id: 4,
    title: "Reconstrução Total de Moradia",
    category: "Remodelação",
    location: "Viseu",
    year: "2025",
    images: [
      "/images/remodelacao-1.png",
      "/images/remodelacao-2.png",
      "/images/remodelacao-3.png",
    ],
    description:
      "Reconstrução total de uma moradia em Viseu. Transformação completa dos espaços interiores e exteriores, otimizando a funcionalidade e a estética.",
    details: ["Reconstrução total", "Otimização de espaços", "Acabamentos modernos", "Nova fachada"],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent font-medium tracking-widest uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            Projetos Realizados
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Conheça alguns dos nossos projetos concluídos com excelência e dedicação.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                  {project.category}
                </Badge>
              </div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center transition-colors shadow-sm opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center transition-colors shadow-sm opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Dots indicator */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-accent" : "bg-white/50"
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-accent text-accent-foreground">
                      {selectedProject.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {selectedProject.year}
                    </span>
                  </div>
                  <DialogTitle className="font-serif text-2xl">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {selectedProject.location}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  {selectedProject.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-foreground mb-2">Destaques do Projeto:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedProject.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
