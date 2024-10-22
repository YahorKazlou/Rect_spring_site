import styles from './index.module.css';

const ProjectCard = ({ link, imgUrl, name, text }) => (
      <article>
            <a className={styles.card} href={link}>
                  <div className={styles.projectItem}>
                        <div className={styles.image}>
                              <img src={imgUrl} alt={name} />
                        </div>
                        <div className={styles.projectInfo}>
                              <h1>
                                    {name}
                              </h1>
                              <p className={styles.py3}>{text}</p>
                        </div>
                  </div>
            </a>
      </article>
);
export default ProjectCard;
