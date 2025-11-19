import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative h-full bg-white rounded-[30px] overflow-hidden shadow-apple-card hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1 cursor-default border border-slate-100">
      {/* Image Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-8 w-full">
             <div className="flex justify-between items-end mb-2">
                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{project.category}</p>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="text-white w-4 h-4" />
                </div>
             </div>
            <h3 className="text-white text-3xl font-bold tracking-tight mb-1">{project.title}</h3>
            <p className="text-white/80 text-sm font-medium">{project.role}</p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8">
        <div className="space-y-6">
            <div>
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-500"></span> Problem
                </h4>
                <p className="text-dark text-[15px] leading-relaxed font-medium">
                    {project.problemStatement}
                </p>
            </div>
             <div>
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-3 flex items-center gap-2">
                   <span className="w-1 h-1 rounded-full bg-green-500"></span> Impact
                </h4>
                <p className="text-secondary text-[15px] leading-relaxed">
                    {project.metrics}
                </p>
            </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
            <span key={tech} className="text-[10px] px-3 py-1 bg-slate-50 text-secondary border border-slate-100 rounded-full font-semibold tracking-wide">
                {tech}
            </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;