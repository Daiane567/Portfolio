import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/daiane.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Desenvolvedora</p>
      <SocialNetworkContainer />
      <InformationContainer />
      {/* <a href="#" className="btn">
        Download currículo
      </a> */}
    </aside>
  );
};

export default Sidebar;
