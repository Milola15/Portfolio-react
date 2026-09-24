import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaChevronDown
} from "react-icons/fa";

function About() {

  const [openIndex, setOpenIndex] = useState(null);

  const parcours = [
    {
      year: "2025-2026",
      title: "Licence 3 en Réseau Génie Logiciel à Pigier Côte d'ivoire (en cours)",
      description:
        "Approfondissement en réseau et en développement web et mobile."
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
        "j'ai effectué un stage de validation a la SOTRA pour obtenir mon diplôme."
    },
    {
      year: "2023-2024",
      title: "Licence 1 en Réseau Génie Logiciel à Pigier Côte d'ivoire",
      description:
        "Début de mon parcours universitaire et découverte de l'informatique j'ai appris les bases en programmation."
    },
    
   
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
           Développeuse Web & Mobile passionnée, spécialisée dans les technologies modernes
            (React, Next.js, PHP, MySQL, Kotlin). Rigoureuse et attentive à l'esthétique,
             j'accorde une importance essentielle à la propreté du code et à la fluidité des interfaces.
              Grâce à ma formation à Pigier Côte d'Ivoire et à mes projets d'ingénierie logicielle, 
              je transforme des besoins complexes en applications web et mobiles performantes, claires et accessibles.
               Découvrez à travers ce portfolio mes réalisations et mon savoir-faire.
          </p>

          <div className="qualite">

            <div className="quality-item">
              <div className="quality-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h3>Apprenante</h3>
                <p>Je monte en compétences rapidement et de manière autonome.</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-icon">
                <FaCode />
              </div>

              <div>
                <h3>Développeuse</h3>
                <p> Je code des solutions propres, maintenables et orientées utilisateur.</p>
              </div>
            </div>

            <div className="quality-item">
              <div className="quality-icon">
                <FaHeart />
              </div>

              <div>
                <h3>Passionnée</h3>
                <p>Le développement web est à la fois ma formation et ma pratique quotidienne.</p>
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
        <div className="about-line section-line"></div>

        <div className="education-list">

          {parcours.map((item, index) => (

            <motion.div
              className="education-card"
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >

              <span className="timeline-dot"></span>

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

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>

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

            </motion.div>

          ))}

        </div>

      </motion.section>
    </>
  );
}

export default About;