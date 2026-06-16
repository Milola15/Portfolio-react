import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

function About() {

  const [openIndex, setOpenIndex] = useState(null);

  const parcours = [
    {
      year: "2023-2024",
      title: "Licence 1 en Réseau Génie Logiciel à Pigier Côte d'ivoire",
      description:
        "Début de mon parcours universitaire et découverte de l'informatique j'ai appris les bases en programmation."
    },
    {
      year: "2024-2025",
      title: "Licence 2 en Réseau Génie Logiciel à Pigier Côte d'ivoire",
      description:
        "Apprentissage des bases HTML, CSS et création de mes premiers sites."
    },
    {
      year: "2024-2025",
      title: "Admissibilité au BTS en informatique développeur d'application à Pigier Côte d'ivoire",
      description:
        "j'ai effectué un stage de validation pour obtenir mon diplôme."
    },
    {
      year: "2025-2026",
      title: "Licence 3 en Réseau Génie Logiciel à Pigier Côte d'ivoire (en du cours)",
      description:
        "Approfondissement en réseau et en développement web et mobile."
    }
    
  ];

  return (
    <>
      {/* SECTION A PROPOS */}
      <motion.section
        id="about"
        className="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-image">
          <img src="img.jpeg" alt="profil" />
        </div>

        <div className="about-content">

          <h2>À propos</h2>

          <div className="about-line"></div>

          <p>
            Je suis une développeuse web junior passionnée par la
            création de sites web modernes et efficaces.
            J'apprends chaque jour et je m'améliore constamment
            pour devenir une meilleure développeuse.
          </p>

          <div className="qualite">

            <div className="quality-item">
              <div className="quality-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h3>Apprenante</h3>
                <p>Toujours curieuse et motivée.</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-icon">
                <FaCode />
              </div>

              <div>
                <h3>Développeuse</h3>
                <p>J'aime coder des solutions utiles.</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-icon">
                <FaHeart />
              </div>

              <div>
                <h3>Passionnée</h3>
                <p>Le code est plus qu'une passion.</p>
              </div>
            </div>

          </div>

        </div>

      </motion.section>

      {/* SECTION PARCOURS */}
      <motion.section
        className="education-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <h2>Mon Parcours Universitaire</h2>

        <div className="education-list">

          {parcours.map((item, index) => (

            <div
              className="education-card"
              key={index}
            >

              <button
                className="education-header"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >

                <div>
                  <span className="year">
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>
                </div>

                {openIndex === index
                  ? <FaChevronUp />
                  : <FaChevronDown />
                }

              </button>

              <AnimatePresence>

                {openIndex === index && (

                  <motion.div
                    className="education-content"
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.4
                    }}
                  >

                    <p>
                      {item.description}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </motion.section>
    </>
  );
}

export default About;