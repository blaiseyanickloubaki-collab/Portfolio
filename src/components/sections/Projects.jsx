import React, { useState, useRef } from 'react';
import { projects, categories } from '../../data/projects';
import { Briefcase, Target, Globe, Zap, Cpu, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Reset carousel without lag
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  // Category icons mapping
  const categoryIcons = {
    'All': Target,
    'Web Apps': Globe,
    'Mobile': Smartphone,
    'Full Stack': Zap,
    'AI & Robotics': Cpu,
  };

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">My Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Showcasing my best work across Web, Mobile, AI, and Robotics
            </p>
          </div>
        </FadeIn>

        {/* Category Filter - snappy transitions */}
        <FadeIn delay={50}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-150 cursor-pointer ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-150 ${
                    activeCategory === category
                      ? 'bg-primary/10 opacity-100'
                      : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                  }`}
                />

                <div className="relative z-10 flex items-center gap-2">
                  {React.createElement(categoryIcons[category] || Target, { className: "w-4 h-4 text-primary" })}
                  <span className="text-sm">{category}</span>
                </div>

                {activeCategory === category && (
                  <div className="absolute inset-0 border border-primary/30 rounded-full pointer-events-none" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Carousel */}
        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-none scroll-smooth"
            >
              <div className="flex gap-6 pb-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 disabled:opacity-35 disabled:cursor-not-allowed transition-all duration-150 backdrop-blur-sm z-20 cursor-pointer"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-primary/50 disabled:opacity-35 disabled:cursor-not-allowed transition-all duration-150 backdrop-blur-sm z-20 cursor-pointer"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Navigation Dots */}
            {filteredProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: Math.max(0, filteredProjects.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-150 rounded-full cursor-pointer ${
                      index === currentIndex
                        ? 'bg-primary w-6 h-2'
                        : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;