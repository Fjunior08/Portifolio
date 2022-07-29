import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="Sidebar">
      <img src={Avatar} alt="Francisco Junior" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks /> 
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1CeSVpNzpywnaXteS1Nz0fWoGPc5XrWVC/view?usp=sharing"  className='btn'>
        Meu Currículo
     </a>
    </aside>
  );
};

export default Sidebar;