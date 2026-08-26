import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPhp
} from "react-icons/fa";

import { SiMysql, SiC, SiKotlin, SiNextdotjs, SiTailwindcss } from "react-icons/si";

function Skills() {

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiC />, name: "Langage C" },
    { icon: <SiKotlin />, name: "Kotlin" }
  ];

  return (
    <section id="skills" className="skills">

      <h2>Compétences</h2>
      <center><div className="about-line"></div></center>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div key={index} className="skill-card">

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;