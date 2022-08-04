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
  { id: "html",  name: "HTML5",      desc: "Estrutura de layouts, principais tags, HTML semântico, formulários.",         icon: <DiHtml5 /> },
  { id: "css3",  name: "CSS3",       desc: "Estilização de layout, animação, responsiveis",                               icon: <DiCss3 /> },
  { id: "js",    name: "JavaScript", desc: "Manipulação do DOM, tipos de dados, funções, array, objetos, eventos",        icon: <DiJsBadge /> },
  { id: "node",  name: "Node.js",    desc: "Domínio, Aplicação, APIs, CRUD, funções, array, objetos, Express, Arquitetura MVC", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL",      desc: "Estruturas de dados, Viewer, Procedures, funções, T-SQL",                     icon: <DiMysql /> },
  { id: "react", name: "React",      desc: "UseState, Props, funções, array, objetos, eventos, hooks",                    icon: <DiReact /> },
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