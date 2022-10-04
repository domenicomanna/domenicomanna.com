import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const socialNetworks = [
  {
    network: "Github",
    url: "https://github.com/domenicomanna",
    username: "domenicomanna",
    icon: faGithub,
  },
  {
    network: "LinkedIn",
    url: "https://www.linkedin.com/in/domenico-manna-6007a01a2/",
    username: "Domenico Manna",
    icon: faLinkedin,
  },
]

const email = {
  address: "dom@domenicomanna.com",
  icon: faEnvelope,
}

export { socialNetworks, email }
