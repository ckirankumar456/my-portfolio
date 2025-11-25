import React from "react";

function IntroSection() {
  return (
    <div className="intro-container">
      <p className="intro-text">Hi, I'm</p>
      <h1 className="intro-name">Kiran Kumar</h1>
      <h2 className="role">MERN Stack Developer</h2>
      <p className="description">
        I am a fresher and passionate Full Stack Developer with strong expertise
        in the MERN stack (MYSQL, Express.js, React.js, Node.js). I completed my
        MBA in 2024 from Sai Rajeswari Institute of Technology, Proddatur, where
        I developed a strong personal interest in software development. I have
        built an e-commerce website using React.js and a full-stack OCR project
        that extracts text from images using the MERN stack. I am now looking
        for a good opportunity in a positive and growth-oriented environment
        where I can apply my knowledge, improve my skills, and contribute to
        meaningful projects.
      </p>
      <div className="stats">
        <div className="stat-card">
          <h3>M</h3>
          <p>MYSQL</p>
          <button className="certificate">
            <a
              href="https://drive.google.com/file/d/136lZcFq6exWzVDGn8-mrOm9ZDJEL85K_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
        </div>
        <div className="stat-card">
          <h3>E</h3>
          <p>Express.js</p>
          <button className="certificate">
            <a
              href="https://drive.google.com/file/d/1z-pdFlufODpLcJHiPqJq8HvhHXt_5WBs/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
        </div>
        <div className="stat-card">
          <h3>R</h3>
          <p>React.js</p>
          <button className="certificate">
            <a
              href="https://drive.google.com/file/d/1MU61z0mtRD8wKqsauig88T47NDPxOPWv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
        </div>
        <div className="stat-card">
          <h3>N</h3>
          <p>Node.js</p>
          <button className="certificate">
            <a
              href="https://drive.google.com/file/d/1DYfVP5LiLacklhBkgFpJCwqfyoE9GVvP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </button>
        </div>
      </div>
      <div className="aboutSection">
        <section class="about-me">
          <h2>About Me</h2>
          <p>
            I’m Kiran Kumar, a Full Stack Developer with a background in
            business. I completed my MBA in 2024 from Sai Rajeswari Institute of
            Technology, Proddatur. While I studied management, my strong
            interest in technology led me to explore software development. I
            enjoy solving problems and building useful applications, which
            motivated me to start my journey into full stack development.
          </p>
          <p>
            Between September 2024 and March 2025, I focused on learning full
            stack technologies like React, Redux, Node.js, Express, MySQL, and
            MongoDB. I’ve built several projects using these tools, both
            frontend and full stack. I’m confident working with React Hooks and
            Redux Toolkit for state management, and I also have experience with
            tools like Git, Postman, and REST APIs. I always aim to write clean
            code and create smooth, responsive designs.
          </p>
          <p>
            Along with my technical learning, I also have experience in
            coaching, which has improved my communication and teamwork skills.
            I’m always eager to learn new things and take on new challenges.
            Now, I’m actively looking for a full-time opportunity as a Full
            Stack or Frontend Developer where I can apply my skills, grow as a
            developer, and build meaningful projects.
          </p>
        </section>
      </div>
    </div>
  );
}

export default IntroSection;
