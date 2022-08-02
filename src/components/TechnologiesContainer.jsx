import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact

} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html",  name: "HTML5",   desc: "Conhecimento avançado HTML5",    icon: <DiHtml5 /> },
  { id: "css3",  name: "CSS3",    desc: "Conhecimento avançado CSS3",     icon: <DiCss3 /> },
  { id: "js",    name: "JavaScript", desc: "Conhecimento avançado JavaScript", icon: <DiJsBadge /> },
  { id: "node",  name: "Node.js", desc: "Conhecimento avançado Node.js",  icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL",   desc: "Conhecimento avançado MySQL",    icon: <DiMysql /> },
  { id: "react", name: "React",   desc: "Conhecimento avançado React.js", icon: <DiReact /> },
]

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
          <h4>{tech.desc}</h4>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer