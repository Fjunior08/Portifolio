import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';
  
const Sidebar = () => {
  return (
    <aside id="Sidebar">
      {/* <img src={Avatar} alt="Francisco Junior" /> */}
      <p className="title">Desenvolvedor</p>
      <SocialNetworks /> 
      <InformationContainer />
      <a href="" className='btn'>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;