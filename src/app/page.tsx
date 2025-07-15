"use client";

import React from "react";

const projects = [
  {
    name: "Weularity",
    link: "https://weularity.com",
    quote: 0,
    description:
      "This is my digital agency website where webiste building and digital marketing services are offered",
    category: "Agency Website",
  },
  {
    name: "Luxterior",
    link: "https://cloudbites.in",
    quote: 25000,
    description:
      "Mr. Arora wanted to solve the problem of making his clients visualize how their interiors would look like. So we created a website with a 3D interior designing feature using Next.js and Fabric.js.With a modern & premium design, the website is fully responsive and has a cart and shop feature for his products.",
    category: "Current Projects",
  },
  {
    name: "JVG Bedeckers",
    link: "https://jvgbedeckers.com",
    quote: 37000,
    description:
      "This website is a premium e-commerce home decor website with cart and shop features.",
    category: "Current Projects",
  },
  {
    name: "Dr. Tara Bhatt",
    link: "https://treatofood.com",
    quote: 25000,
    description:
      "Dr. Tara , a gynaecologist at JJ Hospital Mumbai wanted a portfolio website to showcase her services and book appointments online. I created a modern and responsive website with a booking system. With a modern and premium design with animtaions heavy i am building this ",
    category: "Current Projects",
  },
  {
    name: "Sum-Ri",
    link: "https://treatofood.com",
    quote: 44000,
    description:
      "Sum-Ri is a premium subscription based AI Summarization tool that helps users summarize long articles and documents into concise summaries. The website is built with Next.js and has a modern design with a subscription system.",
    category: "Completed Projects",
  },

  {
    name: "Aesthetic Trove",
    link: "https://www.theaesthetictrove.com/",
    quote: 20000,
    description:
      "The client wanted a website to showcase her jewellery products which cart and shop features and wanted the orders to be delivered via WhatsApp.Achieved this using Next.js ",
    category: "Completed Projects",
  },
  {
    name: "Treato Food",
    link: "https://treatofood.com",
    quote: 12000,
    description:
      "The client wanted a website for his cloud kitchen business with cart and shop features and categories for his products.",
    category: "Completed Projects",
  },
  {
    name: "YP Gold Spices",
    link: "https://ypgoldspices.com",
    quote: 10000,
    description:
      "The client wanted to showcase his spices business with a website as he sells in wholesale so he wanted a google form and whatsapp integration for orders.",
    category: "Completed Projects",
  },
  {
    name: "Time Craft",
    link: "https://timecraft-nine.vercel.app/",
    quote: 25000,
    description:
      " Time Craft is a tool used to track time spent on tasks and projects. It has a modern design with a timer feature and a dashboard to view time logs.",
    category: "Completed Projects",
  },
  {
    name: "Gaytri Deshpande",
    link: "https://gportfolio-92jl.vercel.app/",
    quote: 7000,
    description:
      "Single Page Portfolio Website for Gaytri Deshpande, a data analytics. The website showcases her skills, projects, and contact information.",
    category: "Completed Projects",
  },
  {
    name: "Dental Clinic",
    link: "https://dental-sigma.vercel.app/",
    quote: 15000,
    description:
      "A simple and modern portfolio website for a dental clinic. The website showcases the clinic's services, team, and contact information.",
    category: "Completed Projects",
  },
  {
    name: "Digital Agency (Digi)",
    link: "https://digital-agency-template-orcin.vercel.app/",
    quote: 15000,
    description:
      "A modern and responsive digital agency website showcasing services, portfolio, and contact information. The website is built with Next.js and has a clean design.",
    category: "Completed Projects",
  },
  {
    name: "Gym Website",
    link: "https://gym-template-vert.vercel.app/",
    quote: 7000,
    description:
      "A simple and modern gym website template showcasing gym services, trainers, and contact information. The website is built with Next.js and has a clean design.",
    category: "Completed Projects",
  },
  {
    name: "Jai Thakur",
    link: "https://jai-thakur.vercel.app/",
    quote: 0,
    description:
      "My personal developer portfolio webiste showcasing my skills and projects",
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-4xl text-black font-bold text-center mb-6">
          My Projects & Quotes
        </h1>
        {sectionOrder.map((section) => {
          const filteredProjects = projects.filter(
            (p) => p.category === section
          );
          if (filteredProjects.length === 0) return null;

          return (
            <div key={section} className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                {section}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 font-semibold text-gray-700">
                        Project
                      </th>
                      <th className="px-6 py-3 font-semibold text-gray-700">
                        Quote (₹)
                      </th>
                      <th className="px-6 py-3 font-semibold text-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredProjects.map((project, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-blue-600 hover:underline">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.name}
                          </a>
                        </td>
                        <td className="px-6 py-4 text-green-600 font-semibold">
                          ₹{project.quote.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
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
      </div>
    </div>
  );
}
