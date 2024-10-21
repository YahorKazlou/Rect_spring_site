import styles from './index.module.css';

const MainBlock = () => (
    <div className={styles.hero}>
        <div className={styles.container}>
            <h1 className={styles.header}>Projects</h1>

            <div className={styles.description}>
                From configuration to security, web apps to big data—whatever
                the infrastructure needs of your application may be, there is a
                Spring Project to help you build it. Start small and use just
                what you need—Spring is modular by design.
            </div>

            <div className={styles.buttonContainer}>
                <button href="#release-calendar" className={styles.button}>
                    Release Calendar
                </button>
            </div>
        </div>
    </div>
);

export default MainBlock;
