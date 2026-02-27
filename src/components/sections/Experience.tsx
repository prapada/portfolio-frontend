'use client';

import React from 'react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Programmer (Internship)',
      company: 'Forviz Co. Ltd',
      duration: 'Aug 2017 - Dec 2017',
      responsibilities: [
        'Create a mobile application with React Native',
        'Make a PT Galleria Website with React',
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Checker Co., Ltd',
      duration: 'April 2018 - April 2022',
      responsibilities: [
        'Developed time attendance management website using GraphQL and React.',
        'Developed school registrar website using GraphQL and React.',
        'Developed canteen management website using GraphQL and React.',
        'Developed club management website using GraphQL and React.',
        'Developed student behavioral assessment form website using GraphQL and React.',
        'Developed an achievement analysis program to develop individual learners using Python (Django).',
        'Provide PDF and EXCEL academic results reports.',
        'Performing bug fixes and code reviews',
        'Create responsive templates using modern CSS techniques and JavaScript libraries.',
        'Developed NFT game using React.',
      ]
    },
    {
      title: 'Software Developer',
      company: 'Cnes Consulting Co., Ltd',
      duration: 'Jun 2022 - Present',
      responsibilities: [
        'Developed mobile applications with Swift',
        'Developed mobile applications with Flutter',
        'Developed web cms with Nuxt.js',
      ]
    }
  ];

  return (
    <section id="experience" className="w-full bg-slate-800/50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center pt-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="mt-8">
          <div className="w-full max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-400 text-xs">{exp.duration}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="text-gray-300 text-xs flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">▸</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
