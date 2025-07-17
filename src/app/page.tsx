"use client";

import React from "react";
import { Code, Database, Zap, Server, Star } from "lucide-react";

const projects = [
  {
    name: "Weularity",
    link: "https://weularity.com",
    quote: 25000,
    description:
      "This is my digital agency website offering professional website development and digital marketing services. The quoted pricing reflects what it would cost to build a similar website for a client.",
    category: "Agency Website",
  },
  {
    name: "Luxterior",
    link: "https://fabric-umber.vercel.app/",
    quote: 25000,
    description:
      "Mr. Arora wanted to help his clients better visualize their interior designs. We developed a modern, fully responsive website featuring a 3D interior design tool using Next.js and Fabric.js, along with an integrated cart and shop for his products.",
    category: "Current Projects",
  },
  {
    name: "JVG Bedeckers",
    link: "https://jvgbedeckers.com",
    quote: 27000,
    description:
      "This is a premium e-commerce website for home décor, featuring a modern design with a complete shopping cart and product catalog functionality.",
    category: "Current Projects",
  },
  {
    name: "Dr. Tara Bhatt",
    link: "https://drtarabhatt.com",
    quote: 30000,
    description:
      "Dr. Tara, a gynecologist at JJ Hospital Mumbai, required a professional portfolio website to highlight her services and facilitate online appointment bookings. I developed a modern, responsive site with engaging animations and a user-friendly booking system.",
    category: "Current Projects",
  },

  {
    name: "Rhidya Gupta",
    link: "https://rhidyagupta.in",
    quote: 15000,
    description:
      "Rhidya Gupta, a digital marketing expert, needed a professional portfolio website to showcase her skills and services. The site features a modern design with smooth animations and a contact form for inquiries.",
    category: "Current Projects",
  },
  {
    name: "Sum-Ri",
    link: "https://treatofood.com",
    quote: 44000,
    description:
      "Sum-Ri is a premium AI-powered subscription tool that summarizes lengthy articles and documents into concise overviews. Built with Next.js, the website features a sleek, modern design and a robust subscription system.",
    category: "Completed Projects",
  },
  {
    name: "Aesthetic Trove",
    link: "https://www.theaesthetictrove.com/",
    quote: 25000,
    description:
      "The client wanted a website to showcase her jewelry collection with integrated cart and shop features. Orders are conveniently managed via WhatsApp, implemented using Next.js.",
    category: "Completed Projects",
  },
  {
    name: "Treato Food",
    link: "https://treatofood.com",
    quote: 12000,
    description:
      "This website was created for a cloud kitchen business, featuring a modern design with categorized products, a shopping cart, and streamlined ordering capabilities.",
    category: "Completed Projects",
  },
  {
    name: "YP Gold Spices",
    link: "https://ypgoldspices.com",
    quote: 10000,
    description:
      "The client needed an online presence to showcase his wholesale spice business. The website includes a Google Form and WhatsApp integration for placing bulk orders.",
    category: "Completed Projects",
  },
  {
    name: "Time Craft",
    link: "https://timecraft-nine.vercel.app/",
    quote: 25000,
    description:
      "Time Craft is a productivity tool designed to help users track time spent on tasks and projects. It includes a modern dashboard, a timer feature, and detailed time logs.",
    category: "Completed Projects",
  },
  {
    name: "Gaytri Deshpande",
    link: "https://gportfolio-92jl.vercel.app/",
    quote: 7000,
    description:
      "A single-page professional portfolio for Gaytri Deshpande, a data analyst. The site highlights her skills, projects, and contact information in a clean, modern layout.",
    category: "Completed Projects",
  },
  {
    name: "Dental Clinic",
    link: "https://dental-sigma.vercel.app/",
    quote: 15000,
    description:
      "A modern, responsive portfolio website for a dental clinic. It effectively presents the clinic’s services, team members, and contact details in an attractive format.",
    category: "Completed Projects",
  },
  {
    name: "Digital Agency (Digi)",
    link: "https://digital-agency-template-orcin.vercel.app/",
    quote: 15000,
    description:
      "A clean, modern, and responsive digital agency website that showcases services, project portfolios, and contact information. Built with Next.js for optimal performance.",
    category: "Completed Projects",
  },
  {
    name: "Gym Website",
    link: "https://gym-template-vert.vercel.app/",
    quote: 7000,
    description:
      "A simple yet modern gym website template presenting gym services, trainer profiles, and contact information. Built with Next.js, it ensures a clean and responsive user experience.",
    category: "Completed Projects",
  },
  {
    name: "Jai Thakur",
    link: "https://jai-thakur.vercel.app/",
    quote: 25000,
    description:
      "My personal developer portfolio website showcasing my skills and past projects. The listed quote represents the cost for developing a similar portfolio for other clients.",
    category: "Portfolio Website",
  },
  // Add more projects here
];

const sectionOrder = [
  "Agency Website",
  "Portfolio Website",
  "Current Projects",
  "Completed Projects",
  "Self Projects",
];

const techStack = [
  {
    category: "Frontend",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    techs: [
      {
        name: "Next.js",
        description: "Used by Netflix, TikTok, Hulu",
        highlight: true,
      },
      {
        name: "React",
        description: "Powers Facebook, Instagram, WhatsApp",
        highlight: true,
      },
      { name: "TypeScript", description: "Enterprise-grade type safety" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    ],
  },
  {
    category: "Animations & Interactions",
    icon: <Zap className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    techs: [
      { name: "Framer Motion", description: "Production-ready motion library" },
      { name: "GSAP", description: "Industry-standard animations" },
      { name: "Lottie", description: "Smooth micro-interactions" },
    ],
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    techs: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Prisma", description: "Next-generation ORM" },
      { name: "MongoDB", description: "NoSQL database" },
      { name: "PostgreSQL", description: "Advanced SQL database" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Server className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    techs: [
      { name: "AWS", description: "Cloud infrastructure" },
      { name: "Vercel", description: "Deployment platform" },
      { name: "Docker", description: "Containerization" },
      { name: "Redis", description: "In-memory caching" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-4 sm:p-6">
        <h1 className="text-3xl sm:text-4xl text-black font-bold text-center mb-8">
          My Projects & Quotes
        </h1>

        {sectionOrder.map((section) => {
          const filteredProjects = projects.filter(
            (p) => p.category === section
          );
          if (filteredProjects.length === 0) return null;

          return (
            <div key={section} className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                {section}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-[600px] w-full divide-y divide-gray-200 text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 sm:px-6 font-semibold text-gray-700">
                        Project
                      </th>
                      <th className="px-4 py-3 sm:px-6 font-semibold text-gray-700">
                        Quote (₹)
                      </th>
                      <th className="px-4 py-3 sm:px-6 font-semibold text-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredProjects.map((project, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-4 sm:px-6 text-blue-600 hover:underline">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.name}
                          </a>
                        </td>
                        <td className="px-4 py-4 sm:px-6 text-green-600 font-semibold">
                          ₹{project.quote.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 sm:px-6 text-gray-700">
                          {project.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
        {/* Tech Stack Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Industry-Leading Technology
            </h2>
            <p className="text-lg text-gray-600">
              The same tech stack trusted by Netflix, Facebook, and other tech
              giants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {techStack.map((stack, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stack.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {stack.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {stack.category}
                  </h3>
                  <div className="space-y-3">
                    {stack.techs.map((tech, techIndex) => (
                      <div key={techIndex} className="group/tech">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`text-sm font-medium ${
                              tech.highlight ? "text-blue-600" : "text-gray-700"
                            }`}
                          >
                            {tech.name}
                          </span>
                          {tech.highlight && (
                            <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full">
                              <Star className="w-3 h-3" />
                              Enterprise
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          {tech.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
