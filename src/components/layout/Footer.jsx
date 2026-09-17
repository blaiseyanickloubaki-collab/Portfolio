import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

// Composant pour afficher les logos SVG officiels des réseaux sociaux
const SocialIcon = ({ name }) => {
  switch (name) {
    case 'github':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm10.13 10.79c-.83-.16-3.1-.53-5.69.32-.1-.23-.21-.46-.32-.69 2.45-1.07 3.37-2.61 3.45-2.75 1.43 1.36 2.37 3.27 2.56 5.38zm-11.4-8.08c1.37 0 2.62.49 3.61 1.3-.08.13-.94 1.51-3.17 2.47-1.14-.54-2.31-1.11-3.41-1.74 0 0 1.2-1.75 2.97-2.03zm-5.06 1.8c.18.15 1.15.98 2.3 2.11-1.39.46-2.91.73-4.51.78-.11-.97.16-1.95.78-2.67.45-.14.94-.22 1.43-.22zm-4.99 5.86c1.68-.05 3.32-.35 4.81-.86.32.96.64 1.94.94 2.92-2.52.8-5.01.76-5.18.75-.41-.93-.61-1.94-.57-2.81zm2.59 5.61c.21 0 2.42-.04 4.79-.76.54 1.63 1.05 3.26 1.49 4.88-2.12.83-4.32-.12-4.91-.42-.87-.44-1.31-1.46-1.37-3.7zm7.57 6.13c-.45-1.63-.98-3.29-1.53-4.95 2.46-.86 4.96-.53 5.12-.51-.31 2.36-1.95 4.7-3.59 5.46zm5.17-7.23c-.27-.02-2.93-.32-5.59.61-.31-.99-.64-1.99-.97-2.99 2.34-.78 4.67-.44 4.86-.41.52.92.79 1.96.7 2.79z" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grille à 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Colonne 1 : Logo, Tagline & Cartes Contact */}
          <FadeIn delay={0}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  {PERSONAL_INFO.name.split(' ')[0]}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-white/80 hover:text-primary transition-colors truncate">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-white/80">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Colonne 2 : Quick Links avec puces */}
          <FadeIn delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-white/60 list-disc list-inside">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="hover:text-primary transition-colors cursor-pointer inline-block text-left"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Colonne 3 : Connect With Me */}
          <FadeIn delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white">
                Connect With Me
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Let's connect and create something amazing together.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${platform}`}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  >
                    <SocialIcon name={platform} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Copyright & Bas de page */}
        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> using React & Tailwind CSS
            </p>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};

export default Footer;