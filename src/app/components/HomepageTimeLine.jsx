import React from "react";

const HomepageTimeLine = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section Title */}
      <div
        id="Experience"
        className="flex justify-center items-center mt-10 mb-5 text-5xl font-montseratt font-bold text-gray-800"
      >
        My Journey
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-gray-500">
        {/* Education */}
        <div className="mb-10 ml-6">
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">BSc in Computer Science & Engineering</h3>
          <span className="block text-sm text-gray-600">Jatiya Kabi Kazi Nazrul Islam University (Feb 2020 - Jan 2025)</span>
          <p className="mt-2 text-gray-700">
            Pursuing a degree in Computer Science, developing skills in programming, web technologies, and problem-solving.
          </p>
        </div>

        {/* Competitive Achievements */}
        <div className="mb-10 ml-6">
          <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">ACM Competitive Programming</h3>
          <span className="block text-sm text-gray-600">2023 - Ranked 3rd in CSE, JKKNIU</span>
          <p className="mt-2 text-gray-700">
            Solved 700+ problems across platforms like Codeforces and LeetCode, honing problem-solving skills and algorithmic thinking.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-10 ml-6">
          <div className="absolute w-6 h-6 bg-purple-500 rounded-full -left-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">Conference Management System</h3>
          <span className="block text-sm text-gray-600">2023</span>
          <p className="mt-2 text-gray-700">
            Built a full-stack application using HTML, CSS, PHP, and Bootstrap. Features include user dashboards, email notifications, and paper management.
          </p>
        </div>

        {/* Extracurricular */}
        <div className="mb-10 ml-6">
          <div className="absolute w-6 h-6 bg-yellow-500 rounded-full -left-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">Mid Day Programming Club</h3>
          <span className="block text-sm text-gray-600">Member</span>
          <p className="mt-2 text-gray-700">
            Active participation in programming events and collaborative learning initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageTimeLine;
