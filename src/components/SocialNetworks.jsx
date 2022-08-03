import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
//import Link from 'react-link';
import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: "linkedin",  icon: <a href="https://www.linkedin.com/in/francisco-j%C3%BAnior-4b4a02119/" target="_blank"> <FaLinkedinIn /></a>},
  { name: "github",   icon: <a href="https://github.com/Fjunior08?tab=repositories" target="_blank"><FaGithub /></a> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
  <section id="social-networks"> 
  {socialNetworks.map((network) => (
  <a href='Link' className="social-btn" id={network.name} key={network.name}>
      {network.icon}
  </a>
  ))}
  </section>
  );
};

export default SocialNetworks;