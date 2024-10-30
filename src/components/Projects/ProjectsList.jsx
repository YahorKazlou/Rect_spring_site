import ProjectCard from './ProjectCard';
import styles from './ProjectsList.module.css';

const ProjectsList = ({ projects }) => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {projects.length === 0
                    ? 'No results'
                    : projects.map((item) => (
                          <ProjectCard {...item} key={item.name} />
                      ))}
            </div>
        </div>
    );
};

export default ProjectsList;
