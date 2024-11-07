import { useState, useEffect } from 'react';
import ProjectsList from './ProjectsList';
import SearchBar from './SearchBar';
import styles from './index.module.css';
import { getProjectsApi } from '../../api';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const handleApi = async (searchTerm) => {
        const response = await getProjectsApi(searchTerm);
        const data = await response.json();
        if (response.status === 200) setProjects(data.data);
    };

    useEffect(() => {
        handleApi();
    }, []);

    const filterProjects = (searchTerm) => {
        handleApi(searchTerm);
    };

    return (
        <div className={styles.hasBackgroundLight}>
            <SearchBar onSearch={filterProjects} />
            <ProjectsList projects={projects} />
        </div>
    );
};

export default Projects;
