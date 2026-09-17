import React from 'react';
import { ExternalLink, Code, TrendingUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const { title, description, image, technologies = [], metrics, demoUrl, githubUrl } = project;

  return (
    <div className="relative group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
      {/* Container Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title || "Project"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge Catégorie (En haut à gauche comme le prof) */}
        <div className="absolute top-4 left-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-white/80 backdrop-blur-md">
            {project?.category}
          </span>
        </div>

        {/* Liens Demo & Code (En bas à droite sur l'image comme le prof) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/60 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-primary/50 transition-all"
              title="View Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/60 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-primary/50 transition-all"
              title="View Code"
            >
              <Code className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Contenu de la Carte */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-white/60 mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        <div>
          {/* Badges Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Section Métriques (En Vert comme le prof) */}
          {metrics && (
            <div className="flex items-center gap-2 text-xs text-primary pt-2 border-t border-white/10">
              <TrendingUp className="w-3.5 h-3.5" />
              <p className="text-primary font-medium">{metrics}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;