import React, { useState, useEffect } from 'react';

const Herosection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Turn Your UK Dream Into Reality',
      category: 'end-to-end',
      type: 'Full Guidance',
      location: 'Universities Across UK',
      year: '2024',
    //   image: '/Hero BG.png',
      video: '/uk-bgvideo.mp4', // Add video path for first project
      description: 'Confused about where to start? From choosing the right university to understanding part-time work and living costs, our seminar gives you a complete roadmap. Get personalized guidance to study, work, and settle in the UK with confidence.'
    },
    {
      id: 2,
  title: 'From Masters to Career: Your UK Success Story',
  category: 'career',
  type: 'Job Assistance',
  location: 'London, Manchester, Birmingham',
  year: '2024',
  image: '/job-bg.png',
  description: "Bridge the gap between your masters degree and dream UK job with our specialized IT training programs. Designed with leading tech employers, we provide CV workshops, mock interviews, and 100% placement support until you land your ideal role."
    },
    {
  id: 3,
  title: 'Beyond the Classroom: Your UK Adventure Awaits',
  category: 'lifestyle',
  type: 'Cultural Integration',
  location: 'Across UK',
  year: '2024',
  image: '/graduate-bg.png',
  description: 'Immerse yourself in British culture while studying – from historic pub quizzes to vibrant city festivals. Work part-time (up to 20 hours/week) at cafes, retail stores, or on-campus, making friends and earning £10-15/hr while building your global network and independence.'
},
    {
  id: 4,
  title: 'Your Gateway to the UK',
  category: 'support',
  type: 'End-to-End Assistance',
  location: 'UK Wide',
  year: '2024',
  image: '/visa-bg.png',
  description: "Your UK dream starts here. We handle everything – from hassle-free student visas with 98% success rate to guaranteed accommodation and loan assistance. Your only job? Pack your bags."
},
    {
  id: 5,
  title: 'Code Your Way to a UK Career',
  category: 'career',
  type: 'Job-Ready Programs',
  location: 'Tech Hubs Across UK',
  year: '2024',
  image: '/training-bg.png',
  description: 'Master in-demand tech skills through our industry-aligned IT training programs. From Data Science to Cloud Computing, we prepare you for top UK employers with hands-on projects, mock interviews, and direct placement support.'
}
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
        setMediaLoaded(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToProject = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject(index);
      setIsTransitioning(false);
      setMediaLoaded(false);
    }, 500);
  };

  const getPreviewProjects = () => {
    const previews = [];
    const total = projects.length;
    
    for (let i = 1; i <= 3; i++) {
      const index = (activeProject + i) % total;
      previews.push(projects[index]);
    }
    
    return previews;
  };

  return (
    <section id="projects" className="w-full bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Desktop Main Project Showcase Container - Full width */}
      <div className="hidden lg:block relative w-full h-screen">
        {/* Background Media - Full width */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
        >
          {projects[activeProject].video ? (
            <>
              {!mediaLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
              )}
              <video 
                key={activeProject}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={() => setMediaLoaded(true)}
                preload="metadata"
              >
                <source src={projects[activeProject].video} type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </video>
            </>
          ) : (
            <>
              {!mediaLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
              )}
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
                onLoad={() => setMediaLoaded(true)}
                loading="lazy"
              />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Project Content Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-12 transition-all duration-700 ${
          isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
        }`}>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-4 mb-">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs md:text-sm font-semibold">
                {projects[activeProject].type}
              </span>
            </div>

            <h3 className="text-2xl md:text-5xl font-bold text-white mb-2">
              {projects[activeProject].title}
            </h3>

            <p className="text-gray-300 text-lg mb-3 max-w-xl">
              {projects[activeProject].description}
            </p>
          </div>
        </div>

        {/* Desktop Preview Images - Positioned absolutely */}
        <div className="absolute bottom-8 right-10">
          <div className="flex gap-6">
            {getPreviewProjects().map((project, index) => (
              <div 
                key={project.id}
                className={`relative group cursor-pointer transition-all duration-500 transform ${
                  index === 0 
                    ? 'scale-110 -translate-y-2 shadow-2xl' 
                    : 'scale-100 hover:scale-105'
                }`}
                onClick={() => goToProject((activeProject + index + 1) % projects.length)}
              >
                <div className="w-40 h-28 rounded-lg overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                  {project.video ? (
                    <video 
                      src={project.video}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-white mb-1">{project.title}</h4>
                  <p className="text-xs text-gray-300">{project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Full width with object-contain and top alignment */}
      <div className="lg:hidden relative w-full bg-gradient-to-br from-gray-900 to-blue-900 pb-4">
        {/* Main Image/Video Container - Top aligned */}
        <div className="w-full pt-10 px-4">
          <div className="relative w-full aspect-[4/3]">
            <div 
              className={`absolute inset-0 transition-all duration-700 ${
                isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
              }`}
            >
              {projects[activeProject].video ? (
                <>
                  {!mediaLoaded && (
                    <div className="absolute inset-0 animate-pulse"></div>
                  )}
                  <video 
                    key={activeProject}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-contain"
                    onLoadedData={() => setMediaLoaded(true)}
                    preload="metadata"
                  >
                    <source src={projects[activeProject].video} type="video/mp4" />
                  </video>
                </>
              ) : (
                <>
                  {!mediaLoaded && (
                    <div className="absolute inset-0 animate-pulse"></div>
                  )}
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-contain"
                    onLoad={() => setMediaLoaded(true)}
                    loading="lazy"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Content - Below the image */}
        <div className="px-4 py-2">
          <div className={`transition-all duration-700 ${
            isTransitioning ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
          }`}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {projects[activeProject].type}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {projects[activeProject].title}
            </h3>

            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              {projects[activeProject].description}
            </p>
          </div>

          {/* Mobile Preview Images */}
          <div className="mt-4">
            <div className="flex gap-2 justify-center items-center">
              {getPreviewProjects().map((project, index) => (
                <div 
                  key={project.id}
                  className="flex-1 max-w-[100px] relative group cursor-pointer"
                  onClick={() => goToProject((activeProject + index + 1) % projects.length)}
                >
                  <div className="w-full aspect-[5/3] rounded-lg overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                    {project.video ? (
                      <video 
                        src={project.video}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Herosection;