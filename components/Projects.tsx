import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 max-w-3xl reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-dark tracking-tighter mb-6">Selected Work.</h2>
          <p className="text-xl text-secondary font-normal leading-relaxed">
             A collection of apps and tools built to solve real problems. Focusing on performance, accessibility, and delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`reveal delay-${(index % 3) * 100}`}>
                <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;