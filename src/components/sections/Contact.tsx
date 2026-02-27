'use client';

import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ying.prapada@gmail.com',
      href: 'mailto:ying.prapada@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '091-727-9683',
      href: 'tel:+66917279683'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prapada-somboonruengsri',
      href: 'https://linkedin.com/in/prapada-somboonruengsri-3132b815b'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/prapada',
      href: 'https://github.com/prapada'
    }
  ];

  return (
    <section id="contact" className="w-full bg-slate-900/50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="text-center pt-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-4xl">
          <div
            className="bg-slate-800/50 p-8 rounded-xl border border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <info.icon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-4">
                I'm always interested in hearing about new projects and opportunities.
              </p>
              <p className="text-gray-400">
                Feel free to reach out if you'd like to collaborate or just say hello!
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
