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
  { id: "html",  name: "HTML5",      desc: "Estrutura de layouts, principais tags, HTML semântico.      ",        icon: <DiHtml5 /> },
  { id: "css3",  name: "CSS3",       desc: "Estilização de layout, animação, responsivo, FlexBox, Grid.",        icon: <DiCss3 /> },
  { id: "js",    name: "JavaScript", desc: "Manipulação do DOM, tipos de dados, funções, array, objetos, eventos      ",        icon: <DiJsBadge /> },
  { id: "node",  name: "Node.js",    desc: "Domínio, aplicação, APIs, CRUD, funções, array, objetos, express, arquitetura MVC", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL",      desc: "Estruturas de dados, views, procedures, funções, T-SQL",                     icon: <DiMysql /> },
  { id: "react", name: "React",      desc: "UseState, props, funções, array, objetos, eventos, hooks",                    icon: <DiReact /> },
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
          <h5>{tech.desc}</h5>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer