import React from "react";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import legalDebrief from "../assets/portfolio/Legal debrief.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: legalDebrief,
      code: "https://github.com/pritamkushwah04/Front-end-legal-debrief",
      demo: "https://legal-debrief.onrender.com/"
    },
    {
      id: 2,
      src: reactParallax,
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit py-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                    href={demo}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  > Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                    href={code}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  > Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
