import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="dots"></div>
      <div className="hero-circle"></div>

      <div className="wave">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
            M0,256
            L80,245.3
            C160,235,320,213,
            480,202.7
            C640,192,800,192,
            960,213.3
            C1120,235,1280,277,
            1360,298.7
            L1440,320
            L1440,320
            L0,320
            Z"
          />
        </svg>
      </div>

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Bonjour, je suis</h3>
        <h1>
          Eunice OGUNEMI
        </h1>
        <h3>Développeuse Web Junior</h3>

        <div className="hero-line"></div>
        <p className="hero-description">
          Passionnée par le développement web,
          j'aime créer des sites et applications
          modernes et responsives.
        </p>
        <br />
        <div className="hero-buttons">
        <a href="#projects" className="hero-btn">
          Voir mes projets
        </a>
        <a href="CV-OGUNEMI-EUNICE.pdf" className="hero-btn" download>
          Télécharger mon CV
        </a>
        </div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="photo-glow"></div>
        <img
          src="images.jpg"
          alt="Eunice Ogunemi"
        />
      </motion.div>

    </section>
  );
}

export default Hero;