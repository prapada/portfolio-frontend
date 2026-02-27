'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full bg-slate-900/50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        <div className="text-center pt-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="mt-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                    <img
                      src="/images/profile.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a front-end developer with 6+ years of experience in education tech company. 
                    I love to create simple yet beautiful websites with great user experience.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My skills might be limited, but my desire to learn new things and develop professionally are endless. 
                    I'm interested in the whole frontend stack Like trying new things and building great projects.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Flexible within the working environment and able to adapt quickly and positively to challenging situations. 
                    I am a quick learner and a good team member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
