import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30}  />
        </>
      ),
      href: "https://www.linkedin.com/in/pritamk47/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub<FaGithub size={30} /> 
        </>
      ),
      href: "https://github.com/pritamkushwah04",
    },
    {
      id: 3,
      child: (
        <>
          Mail<HiOutlineMail size={30}  /> 
        </>
      ),
      href: "mailto:Pritamkushwah.04.08@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume<BsFillPersonLinesFill size={30} /> 
        </>
      ),
      href: "https://drive.google.com/file/d/1dTP55vXXjFd9SIgVOlg-RztwQQeajR6g/view",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <>
      <div className="hidden sm:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" sm:hidden bg-gradient-to-b from-gray-800 to-black">
          {links.map(({ id, child, href, style, download }) => (
            <div
              key={id}
              className={
                "flex justify-between items-center  h-14 px-4 " +
                " " 
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </div>
          ))}
      </div>
    </>

  );
};

export default SocialLinks;
