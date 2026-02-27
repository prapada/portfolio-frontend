'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Grader Management System',
      description: 'Developed an achievement analysis program to support individual learner development. The system tracks academic performance, analyzes student progress, and provides data-driven insights to help educators design personalized learning plans and improve overall learning outcomes.',
      techStack: ['Python', 'Django', 'Jquery', 'Bootstrap', 'CSS'],
      image: '/images/grader.png',
    },
    {
      id: 2,
      title: 'School Management System',
      description: 'Developed a web frontend application used to display information, verify accuracy, and track check-in/check-out activities or digital data status. The system is primarily used in two main areas, including educational institution management applications (attendance tracking, parent notifications).',
      techStack: ['React.js', 'CSS'],
      image: '/images/checker.png',
    },
    {
      id: 3,
      title: 'Pick Up School Management System',
      description: 'A Pick Up School Management System is a digital platform designed to manage and monitor the student pick-up and drop-off process within a school. The system records check-in and check-out times, verifies authorized guardians, provides real-time notifications to parents, enhances student safety, and improves overall operational efficiency.',
      techStack: ['React.js', 'CSS'],
      image: '/images/pickup.png',
    },
    {
      id: 4,
      title: 'Canteen Management System',
      description: 'Developed a web frontend application used to display information, verify operational processes of the school cafeteria, track nutritional data, and manage payment transactions.',
      techStack: ['React.js', 'CSS'],
      image: '/images/canteen.png',
    },
    {
      id: 5,
      title: 'EQ and SDQ Assessment System',
      description: 'An EQ and SDQ Assessment System is a digital platform designed to evaluate students’ emotional intelligence (EQ) and behavioral strengths and difficulties using standardized assessment tools. It supports data collection, scoring, analysis, and reporting to help educators and parents monitor students’ emotional well-being and developmental progress.',
      techStack: ['React.js', 'CSS'],
      image: '/images/sdq.png',
    },
    {
      id: 6,
      title: 'Employee Management System',
      description: 'An Employee Management System is a digital platform designed to manage and organize employee-related information within an organization. It typically includes features such as employee profiles, attendance tracking, payroll management, performance evaluation, leave management, and reporting to improve administrative efficiency and workforce management.',
      techStack: ['React.js', 'CSS'],
      image: '/images/gpo.png',
    },
    {
      id: 7,
      title: 'Satit Bangna',
      description: 'The Satit Bangna App provides an all-in-one automated school management system.',
      techStack: ['Flutter'],
      image: '/images/satit.png',
    },
    {
      id: 8,
      title: 'Boots',
      description: 'The app allows users to browse and purchase health and beauty products, manage prescriptions (where available), access exclusive promotions, collect loyalty points, and receive personalized offers. It is designed to enhance customer convenience and support health and wellness needs through digital services.',
      techStack: ['Swift'],
      image: '/images/boots.png',
    },
    {
      id: 9,
      title: 'Yaphrom',
      description: 'Developed a system for pharmaceutical product distribution and free pharmacist consultation services.',
      techStack: ['Flutter'],
      image: '/images/yaphrom.png',
    },
    {
      id: 10,
      title: 'Sugarcane Management System',
      description: 'A Sugarcane Management System is a digital platform designed to manage and optimize sugarcane cultivation, harvesting, and supply chain operations.',
      techStack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
      image: '/images/kbs.png',
    },
    {
      id: 11,
      title: 'Krungsri Mobile Application',
      description: 'The application enables users to manage their finances conveniently.',
      techStack: ['Flutter'],
      image: '',
    },
  ];

  return (
    <section id="projects" className="w-full bg-slate-800/50 pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center pt-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        <div className="mt-8">
          <div className="w-full max-w-7xl">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-24 bg-linear-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image || '/images/default-project.png'} 
                    alt={project.title}
                    className="w-full h-full object-contain p-2"
                    onError={(e: any) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      if (img.nextElementSibling) {
                        (img.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="text-4xl" style={{display: 'none'}}>🚀</div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.slice(0, 2).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-xl border border-gray-700 max-w-4xl w-full max-h-[70vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="h-64 bg-linear-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image || '/images/default-project.png'} 
                    alt={selectedProject.title}
                    className="w-full h-full object-contain p-6"
                    onError={(e: any) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      if (img.nextElementSibling) {
                        (img.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="text-6xl" style={{display: 'none'}}>🚀</div>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
