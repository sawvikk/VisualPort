import React from "react";

const ServiceSection = () => {
  return (
    <section className="m-5">
      <div className="flex justify-center items-center mt-5 mb-5 text-5xl font-montseratt font-bold " id="Skills">
        My Skillset
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex lg:w-1/3 w-full flex-grow card bg-gradient-to-r from-blue-800 via-blue-900 to-gray-700 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">
          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans text-gray-100">
              Web Development
            </h2>
            <h3 className="font-semibold mb-2 text-gray-200">
              Crafting Responsive &amp; Modern Websites with Performance in Mind.
            </h3>
            <ul className="list-disc text-gray-300">
              <li>Design visually stunning layouts with Tailwind CSS &amp; Bootstrap.</li>
              <li>Create interactive interfaces with HTML, CSS, and JavaScript (ES6+).</li>
              <li>Build efficient backends using PHP and integrate databases like SQL &amp; MongoDB.</li>
              <li>Utilize Git &amp; GitHub for effective version control and collaboration.</li>
              <li>Ensure accessibility and responsiveness for diverse user experiences.</li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal hover:divider-accent text-gray-300">
          O
        </div>
        <div className="flex lg:w-1/3 w-full flex-grow card bg-gradient-to-r from-blue-800 via-blue-900 to-gray-700 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">

          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans text-gray-100">
              Problem Solving &amp; Programming
            </h2>
            <h3 className="font-semibold mb-3 text-gray-200">
              Solving Complex Challenges with Efficient Algorithms.
            </h3>
            <ul className="list-disc text-gray-300">
              <li>Mastered solving 700+ competitive programming problems.</li>
              <li>Proficient in C++, Java, Python, and JavaScript for versatile solutions.</li>
              <li>Implement object-oriented design patterns for scalable codebases.</li>
              <li>Experience with ACM-style problem-solving for algorithm optimization.</li>
              <li>Utilize debugging tools for efficient code troubleshooting.</li>
            </ul>
          </div>
        </div>
        <div className="divider lg:divider-horizontal hover:divider-accent text-gray-300">
          O
        </div>
        <div className="flex lg:w-1/3 w-full flex-grow card bg-gradient-to-r from-blue-800 via-blue-900 to-gray-700 rounded-box p-5 hover:shadow-lg hover:shadow-black duration-300 ease-in-out">

          <div className="p-3">
            <h2 className="text-lg font-bold mb-3 text-center font-sans text-gray-100">
              Tools &amp; Technologies
            </h2>
            <h3 className="font-semibold mb-3 text-gray-200">
              Leveraging the Right Tools for Efficient Development.
            </h3>
            <ul className="list-disc text-gray-200">
              <li>Skilled in development tools like Visual Studio Code and Figma.</li>
              <li>Efficiently use GitHub for version control and collaboration.</li>
              <li>Employ frameworks like Bootstrap and Tailwind CSS for styling.</li>
              <li>Adapt designs using responsive techniques such as Flexbox &amp; Grid.</li>
              <li>Develop, debug, and deploy web applications seamlessly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
