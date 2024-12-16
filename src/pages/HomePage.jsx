import Navigation from '../components/Navigation';
import MainBlock from '../components/MainBlock';
import Projects from '../components/Projects';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <>
            <Navigation />
            <div className={styles.main}>
                <MainBlock />
                <Projects />
            </div>
        </>
    );
}

export default HomePage;
