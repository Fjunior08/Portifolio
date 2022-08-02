import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
  { name: "linkedin",  icon: <Link href="linkedin.com/in/francisco-júnior-4b4a02119" target="_blank"><FaLinkedinIn /></Link>  },
  { name: "github",   icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
  <section id="social-networks"> 
  {socialNetworks.map((network) => (
  <a href="#" className="social-btn" id={network.name} key={network.name}>
      {network.icon}
  </a>
  ))}
  </section>
  );
};

export default SocialNetworks;