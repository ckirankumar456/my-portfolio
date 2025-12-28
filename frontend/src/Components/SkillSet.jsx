function SkillSet() {
  return (
    <>
      <div class="container">
        <h1>Skills</h1>
        <div class="skills-row">
          <div className="box">
            <h3>Programming Language</h3>
            <div className="tags">
              <span className="tag">Basic Java</span>
              <a href="https://drive.google.com/file/d/1d78ihVh58RuECCXtEbimExLhA0tgi77y/view?usp=sharing">
                <button className="glass-btn">View</button>
              </a>
            </div>
          </div>
          <div class="box">
            <h3>Frontend</h3>
            <div class="tags">
              <span class="tag">HTML5</span>
              <span class="tag">CSS</span>
              <span class="tag">JavaScript</span>
              <span class="tag">ReactJS</span>
              <span class="tag">Bootstrap</span>
            </div>
          </div>
          <div class="box">
            <h3>Backend / APIs</h3>
            <div class="tags">
              <span class="tag">Node.js</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Express</span>
              <span class="tag">APIs</span>
              <span class="tag">MYSQL</span>
            </div>
          </div>
        </div>
        <div class="tools-box">
          <h3>Tools & Others</h3>
          <div class="tags">
            <span class="tag">GitHub</span>
            <span class="tag">Postman</span>
            <span class="tag">Web Deployment</span>
            <span class="tag">Responsive Design</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSet;
