import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/daiane-cardoso-0b2bb1202/", // Substitua "seu-perfil" pelo seu usuário do LinkedIn
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/Daiane567", // Substitua "seu-usuario" pelo seu usuário do GitHub
  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
