 "use client"

import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="container mt-10 mx-auto px-12 py-4">

      <h2 className="text-4xl font-bold text-center">
        Professional Experience
      </h2>

      <div className="md:grid  gap-8 items-center py-8 px-4 sm:py-16 xl:px-16">

        <div>
          <h3 className="text-xl font-semibold">
            Senior Software Engineer
          </h3>

          <p className="text-gray-500">
            Wayfair Client | Feb 2023 – Dec 2025
          </p>

         <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
  <li>
    Contributed to a large-scale e-commerce platform handling supplier onboarding workflows and high-volume supplier data across global regions.
  </li>
  <li>
    Developed scalable React-based UI components integrating with BFF layer and GraphQL APIs, improving data fetching efficiency and user experience.
  </li>
  <li>
    Designed and implemented an export status tracking system by introducing an intermediate “Exported” state, improving visibility of asynchronous workflows and data consistency.
  </li>
  <li>
    Built asynchronous processing mechanisms for external system integrations, ensuring reliable status transitions and reducing processing delays.
  </li>
  <li>
    Enhanced warehouse management workflows, including creation, lifecycle tracking, and integrations across North America and EU regions.
  </li>
  <li>
    Resolved critical production issues, significantly improving system reliability and reducing supplier onboarding delays.
  </li>
  <li>
    Contributed to revamp of KPI and sales dashboards, improving business visibility and reducing manual reporting effort.
  </li>
  <li>
    Developed and maintained REST APIs using Java and Spring Boot for supplier onboarding and warehouse workflows.
  </li>
  <li>
    Collaborated with cross-functional teams in Agile environments to deliver scalable, high-impact features.
  </li>
</ul>

        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Senior Software Engineer
          </h3>

          <p className="text-gray-500">
            Pure Software | Oct 2021 – Jan 2023
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
            <li>
              Revamped core modules of a real estate platform, improving UI architecture and user engagement.
            </li>
            <li>
              Designed and developed CRM features for seller management with advanced search and filtering.
            </li>
            <li>
              Built scalable backend services and optimized APIs for better performance and response times.
            </li>
            <li>
              Improved database performance through query optimization and efficient data handling.
            </li>
            <li>
              Delivered end-to-end features by collaborating with product, design, and engineering teams.
            </li>
          </ul>

        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Software Engineer
          </h3>

          <p className="text-gray-500">
            Qolsys | Dec 2018 – Aug 2021
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
            <li>Developed smart home security features for Android-based systems, including sensor configuration and monitoring.</li>
             <li>
              Built real-time emergency response workflows for security and medical use cases.
            </li>
            <li>
              Improved backend integrations and device activation workflows, enhancing system reliability.
            </li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default Experience;