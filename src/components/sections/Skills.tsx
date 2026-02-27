'use client';

import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Nuxt.js', icon: '🟢' },
    { name: 'Tailwind CSS', icon: '🎯' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Dart', icon: '🎯' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Python (Django)', icon: '🐍' },
    { name: 'Swift', icon: '🍎' }
  ];

  return (
    <section id="skills" className="w-full bg-slate-900/50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center pt-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        <div className="mt-8">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
