import { useState, useEffect } from 'react';
import ProjectsList from './ProjectsList';
import SearchBar from './SearchBar';
import styles from './index.module.css';
import { getProjects } from '../../api';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const handle = async (searchTerm) => {
        const response = await getProjects(searchTerm);
        const data = await response.json();
        if (response.status === 200) setProjects(data.data);
    };

    useEffect(() => {
        handle();
    }, []);

    const filterProjects = (searchTerm) => {
        handle(searchTerm);
    };

    return (
        <div className={styles.hasBackgroundLight}>
            <SearchBar onSearch={filterProjects} />
            <ProjectsList projects={projects} />
        </div>
    );
};

export default Projects;
