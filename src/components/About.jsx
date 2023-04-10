import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Pritam Kushwah, a final year engineering student at the Institute of Engineering and Technology, Devi Ahilya Vishwavidyalaya, Indore. With a passion for technology and design, I have gained a strong foundation in fundamental concepts such as Data Structures and Algorithms, Object-oriented Programming, and Operating Systems. I have experience working with programming languages such as C++ and JavaScript, along with frameworks and libraries including Tailwind CSS, Socket.IO, Node.js, Express, Three.js, and React.js. I enjoy applying my technical skills and creative problem-solving abilities to develop innovative solutions that meet the needs of users.
        </p>

        <br />
        <p className="text-xl">
          During my internship at Sony, I had the opportunity to work with experienced professionals in the field and apply my theoretical knowledge in a practical setting. This allowed me to learn new skills and gain valuable industry experience. When I'm not working on engineering projects, you can find me exploring new technologies or pursuing my hobbies. I believe in lifelong learning and am always looking for new challenges and opportunities to grow as a professional.
        
          Thank you for visiting my portfolio website, and I hope you enjoy browsing my projects and learning more about my work!
        </p>
      </div>
    </div>
  );
};

export default About;
