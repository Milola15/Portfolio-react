import { motion } from "framer-motion";
import {
 FaGithub,
 FaLinkedin
} from "react-icons/fa";
function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Conception et déploiement d'un portfolio single-page avec React, animations Framer Motion, formulaire EmailJS sécurisé et design responsive réalisé de A à Z.",
        github: "https://github.com/Milola15/Portfolio-react",
      image:
        "capfort.png"
    },

    {
      title: "Tableau de Bord",
      description:
        "Application web de gestion d'inscription pour un établissement scolaire : interface intuitive, base de données MySQL et logique PHP côté serveur",
        github: "https://github.com/Milola15/Application-d-inscription-scolaire",
      image:
        "dashboard.png"
    },

    {
      title: "Site Vitrine",
      description:
        "Landing page moderne développée en React avec une attention particulière portée à l'UX, la performance et le responsive design.",
        github: "https://github.com/Milola15/interface-moderne",
      image:
        "caplanding.png"
    }
  ];

  return (
    <motion.section
  id="projects"
  className="projects"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

      <h2>Mes Projets</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  className="project-card"
  initial={{
    opacity: 0,
    y: 50
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.2
  }}
  whileHover={{
    y: -10,
    scale: 1.03
  }}
>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">

                <motion.button className="btn" whileHover={{
                  scale: 1.1
                 }}
                whileTap={{
                 scale: 0.95
                        }}>
                          <FaGithub />
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                 </motion.button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </motion.section>
  );
}

export default Projects;