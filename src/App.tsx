import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Menu, X, ExternalLink, Code, Palette, Layers, User, Briefcase, Award, FolderOpen } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Aspiring Software Development Engineer | AI & ML Practitioner | Web Designer";
   
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`text-sm font-medium transition-colors duration-300 hover:text-orange-500 ${
        activeSection === href ? 'text-orange-500' : 'text-gray-700'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
            >
              Punith A R
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="services">Services</NavLink>
              <NavLink href="portfolio">Portfolio</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="experience">Experience</NavLink>
                <NavLink href="skills">Skills</NavLink>
                <NavLink href="services">Services</NavLink>
                <NavLink href="portfolio">Portfolio</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="text-center px-4">
          {/* Profile Picture Placeholder */}
          <div className="mb-8 animate-pulse">
            <img 
              src="https://i.postimg.cc/cLDf1qHg/20241130-164016.jpg" 
              alt="Punith A R - Profile Photo"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-md transform hover:scale-105 transition-transform duration-300 border-4 border-orange-500"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Punith A R
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {typedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I am an aspiring Software Development Engineer with a strong foundation in Python, C/C++, and Java. Currently pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning, I am passionate about problem-solving, building scalable solutions, and exploring innovative technologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With interests in web development and AI applications, I aim to leverage my skills to contribute to impactful projects and grow as a professional in the tech industry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Bachelor of Engineering</h4>
                    <p className="text-orange-600 font-medium">Artificial Intelligence and Machine Learning</p>
                    <p className="text-gray-600">Jyothy Institute of Technology, Bengaluru</p>
                    <p className="text-sm text-gray-500">Expected Graduation: 2028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-orange-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Volunteer</h3>
              </div>
              <h4 className="text-xl font-semibold text-orange-600 mb-2">Vivekananda Yuvak Sangha</h4>
              <p className="text-gray-600 leading-relaxed">
                Actively participating in community service and social outreach activities, developing leadership skills and contributing to meaningful social causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Code className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Programming</h3>
              <p className="text-gray-600">Python</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Palette className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Web Designing</h3>
              <p className="text-gray-600">Modern & Responsive</p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Layers className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Full Stack Development</h3>
              <p className="text-gray-600">End-to-end Solutions</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <User className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600">User-Centered Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Designing</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating responsive and modern websites that provide exceptional user experiences across all devices and platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Designing user-friendly and aesthetic interfaces that enhance user engagement and deliver seamless digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Portfolio</h2>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-8 animate-pulse">
              <FolderOpen className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Coming Soon</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Exciting projects are currently in development. Check back soon to see my latest work in web development, AI/ML applications, and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="mailto:parthh.ekbote@gmail.com"
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-sm text-gray-600 break-all">parthh.ekbote@gmail.com</p>
            </a>

            <a
              href="tel:+916363853821"
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">+91 63638 53821</p>
            </a>

            <a
              href="https://linkedin.com/in/punith-a-r-681999371"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <span>Connect</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </a>

            <a
              href="https://github.com/parthhekbote"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <span>View Code</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Punith A R. Designed & Developed.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;