import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ecomm from '../../assets/ecomms.jpg';
import chatapp from '../../assets/chat.jpg';
import miclone from '../../assets/miclones.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecomm}
          link="https://github.com/shashank123456755776/MERN-PRODUCTION1-ECOMMERCE"
          h3="E-commerce"
          p="E-commerce Store"
        />
        <ProjectCard
          src={chatapp}
          link="https://github.com/shashank123456755776/react-socketio-chat-app"
          h3="Chat-App"
          p="Multiple-Users-Live-Chat-App"
        />
        <ProjectCard
          src={miclone}
          link="https://github.com/shashank123456755776/miclone"
          h3="MICLONE"
          p="MICLONE App"
        />
      </div>
    </section>
  );
}

export default Projects;
