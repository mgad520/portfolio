import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "FeedMe",
    type: "Digital Product",
    description:
      "A school meal management platform designed to replace manual queues, simplify subscriptions, and give institutions clearer control over meal operations.",
    tags: ["Product Design", "Web App", "Real-time"],
    featured: true,
  },
  {
    number: "02",
    title: "Fika Store",
    type: "E-commerce",
    description:
      "A modern commerce experience with product management, image uploads, an admin workflow, and a clean customer-facing storefront.",
    tags: ["E-commerce", "Full-stack", "Admin"],
  },
  {
    number: "03",
    title: "SwapLink",
    type: "Campus Platform",
    description:
      "A mobile-first campus marketplace concept that lets students exchange useful items directly with one another.",
    tags: ["Mobile", "UX/UI", "Community"],
  },
  {
    number: "04",
    title: "Rebamovie",
    type: "Media Platform",
    description:
      "A movie platform redesign focused on moving the experience toward a flexible modern frontend while keeping the existing backend services.",
    tags: ["React", "UX", "Media"],
  },
];

const skills = [
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "JavaScript",
  "Flutter",
  "UI/UX",
  "Product Thinking",
  "Cybersecurity",
];

const languages = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Flutter",
  "Dart",
  "HTML",
  "CSS",
  "Git",
  "REST APIs",
  "UI/UX",
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function BackgroundGeometry() {
  return (
    <div className="backgroundGeometry" aria-hidden="true">
      <div className="geoGrid" />
      <div className="geoLines geoLinesOne" />
      <div className="geoLines geoLinesTwo" />
      <div className="geoCircle geoCircleOne" />
      <div className="geoCircle geoCircleTwo" />
      <div className="geoSquare geoSquareOne" />
      <div className="geoSquare geoSquareTwo" />
      <div className="geoDiamond geoDiamondOne" />
      <div className="geoDiamond geoDiamondTwo" />
      <div className="geoTriangle geoTriangleOne" />
      <div className="geoTriangle geoTriangleTwo" />
      <div className="geoCross geoCrossOne" />
      <div className="geoCross geoCrossTwo" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.25]);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <BackgroundGeometry />

      <motion.div
        className="progress"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="nav">
        <a className="logo" href="#top" onClick={closeMenu}>
          MGAD<span>.</span>
        </a>

        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="navCta" href="#contact" onClick={closeMenu}>
          Let's talk
          <ArrowUpRight size={15} />
        </a>

        <button
          className="menuButton"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
       <section className="hero">
  <motion.div
    className="heroInner"
    style={{
      y: heroY,
      opacity: heroOpacity,
    }}
  >
    {/* Glass capsule "hey" */}
    <motion.div 
      className="heyCapsule"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Hey there! <span className="wave">👋</span>
    </motion.div>

    <h1>
      I build <em>digital</em>
      <br />
      things that matter.
    </h1>

    <div className="heroBottom">
      <p>
        I'm <strong>Mugisha Alex Gad</strong> — a software
        developer, product builder and entrepreneur turning
        ideas into useful digital experiences.
      </p>
    </div>

    {/* CTA Button */}
    <motion.div 
      className="ctaWrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <a href="#contact" className="ctaButton">
        Let's work together
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </motion.div>
  </motion.div>

          <div
            className="heroMarqueeWrapper"
            aria-label="Technologies and tools"
          >
            <div className="heroMarquee">
              {[...languages, ...languages].map((language, index) => (
                <div key={`${language}-${index}`} className="heroLanguage">
                  <span className="languageDot" />
                  <span>{language}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="work section">
  <div className="sectionHead">
    <Reveal>
      <p className="sectionKicker">02 / Selected work</p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="sectionTitle">My success stories</h2>
    </Reveal>
  </div>

  <div className="projectGrid">
    {projects.map((project, index) => (
      <Reveal
        key={project.title}
        delay={index * 0.05}
        className="project"
      >
        <article className="projectCard">
          <div className="projectContent">
            <div className="projectVisual">
              <div className="visualPlaceholder">
                <span className="projectEmoji">◆</span>
              </div>
            </div>
            
            <div className="projectInfo">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
              <div className="projectTags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    ))}
  </div>

  <Reveal className="workFooter">
    <a href="#projects" className="seeMoreLink">
      See recent work
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  </Reveal>
</section>

        <section id="about" className="about section">
          <div className="aboutLeft">
            <Reveal>
              <p className="sectionKicker">03 / About me</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2>
                Curious by nature.
                <br />
                <em>Builder by choice.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="aboutCopy">
            <p>
              I enjoy taking an idea from a rough thought to
              something people can actually use. My work sits
              between software, design and business — which
              means I'm interested in both{" "}
              <strong>how a product works</strong> and{" "}
              <strong>why it should exist.</strong>
            </p>
            <p>
              I've worked on platforms for education, commerce,
              media and student communities, while continuously
              exploring new ideas in technology and
              cybersecurity.
            </p>
            <div className="location">
              <MapPin size={17} />
              Kigali, Rwanda
            </div>
          </Reveal>
        </section>

        <section className="capabilities section">
          <Reveal>
            <p className="sectionKicker">04 / Capabilities</p>
          </Reveal>

          <div className="capabilityLayout">
            <Reveal className="capabilityIntro">
              <h2>
                From idea
                <br />
                to <em>interface.</em>
              </h2>
            </Reveal>

            <div className="skills">
              {skills.map((skill, i) => (
                <Reveal key={skill} delay={i * 0.025}>
                  <div className="skill">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{skill}</strong>
                    <ArrowUpRight size={15} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <Reveal>
            <p className="sectionKicker">06 / Get in touch</p>
            <h2>
              Have an idea?
              <br />
              <em>Let's build it.</em>
            </h2>
            <a className="emailLink" href="mailto:hello@gad.dev">
              hello@gad.dev
              <ArrowUpRight size={25} />
            </a>
            <div className="contactMeta">
              <span>Open to interesting projects, collaborations & ideas.</span>
              <div className="socials">
                <a href="#" aria-label="GitHub">
                  <Github size={19} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={19} />
                </a>
                <a href="mailto:hello@gad.dev" aria-label="Email">
                  <Mail size={19} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} MUGISHA Alex Gad</span>
        <span>Designed & built with intention.</span>
        <a href="#top">
          <ArrowUpRight size={17} />
          Back to top
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);