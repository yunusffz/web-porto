'use client'

import { useState } from 'react'
import Image from 'next/image'
import { portfolioData } from './data/portfolio'

export default function Page() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'contact'>('about')
  const topSkills = [...portfolioData.skills.frontend.slice(0, 4)]

  return (
    <main className="relative flex min-h-screen bg-[#21252b] overflow-hidden">
      <div className="absolute -top-20 -right-20 w-0 h-0 border-l-[200px] border-l-transparent border-b-[200px] border-b-[#f8b133]/20 rotate-45 blur-xl"></div>

      <div className="absolute -bottom-32 -left-32 w-0 h-0 border-r-[300px] border-r-transparent border-t-[300px] border-t-[#f8b133]/15 rotate-12 blur-xl"></div>

      <div className="absolute top-1/2 -right-40 w-0 h-0 border-l-[250px] border-l-transparent border-b-[250px] border-b-[#f8b133]/25 -rotate-45 blur-xl"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-8">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-[#f8b133]/30 flex-shrink-0">
              <Image
                src="/photo-profile.png"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#f6f7f8] mb-2">
                {portfolioData.profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-[#f8b133] mb-4">
                {portfolioData.profile.title}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {topSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#282c34] text-[#f8b133] text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-1 sm:gap-2 mb-6 border-b border-[#282c34]">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all text-sm sm:text-base ${
                activeTab === 'about'
                  ? 'text-[#f8b133] border-b-2 border-[#f8b133]'
                  : 'text-[#ffefd6]/60 hover:text-[#ffefd6]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all text-sm sm:text-base ${
                activeTab === 'projects'
                  ? 'text-[#f8b133] border-b-2 border-[#f8b133]'
                  : 'text-[#ffefd6]/60 hover:text-[#ffefd6]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all text-sm sm:text-base ${
                activeTab === 'contact'
                  ? 'text-[#f8b133] border-b-2 border-[#f8b133]'
                  : 'text-[#ffefd6]/60 hover:text-[#ffefd6]'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="bg-[#282c34]/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 min-h-[250px] sm:min-h-[300px]">
            {activeTab === 'about' && (
              <div className="space-y-4 text-[#ffefd6]">
                <p className="text-base sm:text-lg leading-relaxed">{portfolioData.profile.bio}</p>
                <div className="pt-4 border-t border-[#21252b]">
                  <h3 className="text-[#f8b133] font-semibold mb-3 text-base sm:text-lg">
                    Skills & Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="text-[#f6f7f8] font-semibold mb-2">Frontend Engineering</h4>
                      <p className="text-[#ffefd6]/80">
                        {portfolioData.skills.frontend.join(', ')}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#f6f7f8] font-semibold mb-2">UI & Styling</h4>
                      <p className="text-[#ffefd6]/80">
                        {portfolioData.skills.uiStyling.join(', ')}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[#f6f7f8] font-semibold mb-2">Backend & Databases</h4>
                      <p className="text-[#ffefd6]/80">{portfolioData.skills.backend.join(', ')}</p>
                    </div>
                    <div>
                      <h4 className="text-[#f6f7f8] font-semibold mb-2">Tools & Infrastructure</h4>
                      <p className="text-[#ffefd6]/80">{portfolioData.skills.tools.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-4 sm:space-y-6  overflow-y-auto pr-2">
                {portfolioData.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-[#f8b133] pl-4">
                    <h3 className="text-[#f6f7f8] text-lg sm:text-xl font-bold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-[#ffefd6]/80 text-sm mb-2">{project.description}</p>
                    {project.achievement && (
                      <p className="text-[#f8b133] text-xs mb-2">⚡ {project.achievement}</p>
                    )}
                    <p className="text-[#f8b133] text-xs">{project.technologies.join(' • ')}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-4 sm:space-y-6">
                <p className="text-[#ffefd6] text-base sm:text-lg">
                  Let's work together! Feel free to reach out through any of these channels.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#f8b133]/20 rounded-full flex items-center justify-center text-[#f8b133]">
                      ✉
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#f6f7f8] font-semibold text-sm sm:text-base">Email</p>
                      <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="text-[#ffefd6]/80 text-xs sm:text-sm hover:text-[#f8b133] transition-colors break-all"
                      >
                        {portfolioData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#f8b133]/20 rounded-full flex items-center justify-center text-[#f8b133]">
                      ⚡
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#f6f7f8] font-semibold text-sm sm:text-base">GitHub</p>
                      <a
                        href={portfolioData.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ffefd6]/80 text-xs sm:text-sm hover:text-[#f8b133] transition-colors break-all"
                      >
                        {portfolioData.contact.github}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#f8b133]/20 rounded-full flex items-center justify-center text-[#f8b133]">
                      💼
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#f6f7f8] font-semibold text-sm sm:text-base">LinkedIn</p>
                      <a
                        href={`https://${portfolioData.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ffefd6]/80 text-xs sm:text-sm hover:text-[#f8b133] transition-colors break-all"
                      >
                        {portfolioData.contact.linkedin}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#f8b133]/20 rounded-full flex items-center justify-center text-[#f8b133]">
                      📱
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#f6f7f8] font-semibold text-sm sm:text-base">Phone</p>
                      <a
                        href={`tel:${portfolioData.contact.phone}`}
                        className="text-[#ffefd6]/80 text-xs sm:text-sm hover:text-[#f8b133] transition-colors"
                      >
                        {portfolioData.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-[#21252b]">
                  <p className="text-[#f8b133] text-sm">
                    💡 Currently available for freelance work
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
