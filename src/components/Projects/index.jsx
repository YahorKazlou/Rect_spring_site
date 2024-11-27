import { useEffect } from 'react';
import ProjectsList from './ProjectsList';
import SearchBar from './SearchBar';
import styles from './index.module.css';

import { useDispatch } from 'react-redux';
import { getProjects as getProjectsAction } from '../../store/projects/actions';

const Projects = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjectsAction());
    }, [dispatch]);

    const filterProjects = (searchTerm) => {
        dispatch(getProjectsAction(searchTerm));
    };

    return (
        <div className={styles.hasBackgroundLight}>
            <SearchBar onSearch={filterProjects} />
            <ProjectsList />
        </div>
    );
};

export default Projects;
