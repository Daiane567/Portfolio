import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPython,
  DiMysql,
  DiReact,
  DiDocker,
  DiNodejsSmall,
  DiSass,

} from "react-icons/di";
import { FaFigma } from "react-icons/fa";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Python", icon: <DiPython /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "figma", name: "Figma", icon: <FaFigma /> },





];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
