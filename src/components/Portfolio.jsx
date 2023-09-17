import React from "react";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
import SQLQuickView from "../assets/portfolio/SQLQuickView.png";
import legalDebrief from "../assets/portfolio/Legal debrief.jpg";
import CarousalComponent from "../assets/portfolio/CorausalComponent.png"
import EarBeats from "../assets/portfolio/EarBeats.png"
import MarketPlaceRedux from "../assets/portfolio/MarketPlaceRedux.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: legalDebrief,
      code: "https://github.com/pritamkushwah04/Front-end-legal-debrief",
      demo: "https://master--legaldebrief.netlify.app/",
      dec: "Legal Debrief is your one-stop platform for legal job opportunities and insights. Explore blog posts, job listings, and featured content. Plus, an admin panel with a markdown-enabled text editor for easy post creation.",

    },
    {
      id: 2,
      src: SQLQuickView,
      code: "https://github.com/pritamkushwah04/SQLQuikView/tree/master",
      demo: "https://master--deft-marzipan-4db97b.netlify.app/",
      dec: "SQLQuickView is a user-friendly SQL table management and querying tool designed to simplify the management of SQL databases. It provides an intuitive interface for interacting with your tables, executing queries, and exporting query results.",
    },
    {
      id: 3,
      src: MarketPlaceRedux,
      code: "https://github.com/pritamkushwah04/MarketPlaceRedux",
      demo: "https://master--funny-shortbread-d7b3a9.netlify.app/",
      dec: "This MarketPlaceRedux showcases the power of Redux, React Router DOM, and Axios in action. Experience the art of fetching data from a FAKE API and managing state effortlessly. Explore a wide array of shopping items fetched from the API, and dive deeper into the details of any product with just a click",
    },
    {
      id: 4,
      src: EarBeats,
      code: "https://github.com/pritamkushwah04/EarBeats/tree/master",
      demo: "https://master--lively-starlight-7fd8c8.netlify.app/",
      dec: "Earbeats is a static single-page website that transforms the way users explore and shop for audio products. Unlike traditional marketplaces that offer only static images of products, Earbeats employs the power of Three.js to provide an immersive 3D experience.",
    },
    {
      id: 3,
      src: CarousalComponent,
      code: "https://github.com/pritamkushwah04/responsive-carousel-component/tree/master",
      demo: "https://master--comfy-elf-26b563.netlify.app/",
      dec: "Welcome to the Dynamic Menu & Carousel Showcase project! This project demonstrates the implementation of a dynamic navigation menu and an engaging circular carousel to enhance user experience on your website.",
    }

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
