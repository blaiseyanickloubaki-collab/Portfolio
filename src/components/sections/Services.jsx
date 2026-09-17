import React from "react";
import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Wrench } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      {/* Halo de lumière (Glow effect) en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      {/* Grille d'arrière-plan ultra-subtile */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* En-tête de la section */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Wrench className="w-3.5 h-3.5" />
              <span>WHAT I OFFER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 max-w-2xl">
              Built for innovation. Designed for results.
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-xl">
              Comprehensive solutions to transform your ideas into exceptional digital experiences.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid - Rangée du haut (2 cartes principales) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bento Grid - Rangée du bas (4 cartes secondaires) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;