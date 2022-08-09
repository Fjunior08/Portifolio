import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: "linkedin",   icon:  <a href="https://www.linkedin.com/in/francisco-j%C3%BAnior-4b4a02119/" target="_blank"><FaLinkedinIn /></a> },
  { name: "github",     icon:  <a href="https://github.com/Fjunior08/" target="_blank"><FaGithub /></a> },
  { name: "E-mail",     icon:  <a href="mailto:juniorlina872@gmail.com" target="_blank"><FaEnvelope /></a> },
];

const SocialNetworks = () => {
  return (
  <section id="social-networks"> 
  {socialNetworks.map((network) => (
  <a href='#' className="social-btn" id={network.name} key={network.name}>
      {network.icon}
  </a>
  ))}
  </section>
  );
};

export default SocialNetworks;