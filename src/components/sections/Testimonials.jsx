import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const testimonialStats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "5★", label: "Average Rating" },
    { value: "5★", label: "Average Rating" },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-black overflow-hidden">
      {/* Glow d'arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Quote className="w-3.5 h-3.5" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4 max-w-2xl">
              Trusted by forward-thinking teams
            </h2>
            <p className="text-white/60 text-base sm:text-lg max-w-xl">
              Empowering clients with design-driven, high-quality solutions built for success.
            </p>
          </div>
        </FadeIn>

        {/* Zone du Carrousel avec Flèches sur les côtés */}
        <FadeIn delay={100}>
          <div className="relative max-w-4xl mx-auto flex items-center justify-between gap-4">
            
            {/* Bouton Gauche */}
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all flex-shrink-0 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Conteneur des cartes */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-none flex snap-x snap-mandatory w-full"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex w-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 py-4 px-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      
                      {/* Photo & Badge Statistique */}
                      <div className="md:col-span-5 relative flex justify-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover grayscale"
                          />
                        </div>

                        {/* Badge de Statistique superposé sur la photo */}
                        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                          <div className="text-left">
                            <div className="text-sm font-bold text-primary">
                              {testimonialStats[index]?.value}
                            </div>
                            <div className="text-[10px] text-white/60">
                              {testimonialStats[index]?.label}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contenu Texte & Auteur */}
                      <div className="md:col-span-7 flex flex-col justify-between">
                        <div>
                          <Quote className="w-8 h-8 text-primary mb-3" />
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                            "{testimonial.quote}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div>
                            <div className="text-white font-semibold text-sm sm:text-base">
                              {testimonial.name}
                            </div>
                            <div className="text-white/40 text-xs">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>

                          {/* Étoiles de notation */}
                          <div className="flex items-center gap-1 text-primary">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary" />
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton Droit */}
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all flex-shrink-0 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Puces de Pagination (Dots) - Centrées en bas */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-white w-6 h-2"
                    : "bg-white/20 w-2 h-2 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;