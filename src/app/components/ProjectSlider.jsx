import React from "react";
import ProjectCards from "./projectcard";
import Link from "next/link";

const ProjectSlider = () => {
  const projects = [
    {
      imageSrc: "/images/ictbjhomepage.png",
      altText: "ICTBJ-2023",
      title: "ICTBJ-2023",
      description: "The official website of Jatiya Kabi Kazi Nazrul Islam University's research conference on Technology, Business, and Justice. Used by over hundreds of students, teachers, and researchers to submit their research papers and register for the conference.",
      liveLink: "https://ictbj.jkkniu.edu.bd/",
      youtubeLink: "",
      githubLink: "",
    }
  ];
  return (
    <div>
      <div id="Projects" className="flex justify-center items-center mt-10 mb-5 text-5xl font-montseratt font-bold">
        Featured projects
      </div>

      <div className="carousel flex justify-center items-center p-8 space-x-4">
        {projects.map((project) => (
          <ProjectCards key={project.title} project={project} />
        ))}
      </div>


      <div className="flex justify-center items-center m-5 mb-8">
        <Link href="/projects">
          <button className="btn bg-black text-white btn-lg rounded-full shadow-md hover:bg-gray-800 hover:border-gray-700 hover:shadow-gray-900 hover:scale-110 transition duration-300 ease-in-out">
            View all Projects
          </button>

        </Link>
      </div>
    </div>
  );
};

export default ProjectSlider;
