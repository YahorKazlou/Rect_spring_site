import NavDesktop from './DesktopNavigation/NavDesktop';
import NavMobile from './MobileNavigation/NavMobile';
import getWindowDimensions from '../../hooks/useWindowDimensions';
import ImageSpring from '../../assets/ImageSpring';
import { NAV_ELEMENT_TYPES } from '../../constants';
import styles from './index.module.css';

const navArray = [
    {
        title: 'Why Spring',
        items: [
            { name: 'Overview' },
            { name: 'Microservices' },
            { name: 'Reactive' },
            { name: 'Event Driven' },
            { name: 'Cloud' },
            { name: 'Web Applications' },
            { name: 'Serverless' },
            { name: 'Batch' },
        ],
    },
    {
        title: 'Learn',
        items: [
            { name: 'Overview' },
            { name: 'Quickstart' },
            { name: 'Guides' },
            { name: 'Blog' },
        ],
    },
    {
        title: 'Projects',
        items: [
            { name: 'Overview' },
            { name: 'Spring Boot' },
            { name: 'Spring Framowork' },
            { name: 'Spring Cloud' },
            { name: 'Spring Cloud Data Flow' },
            { name: 'Spring Data' },
            { name: 'Spring Integration' },
            { name: 'Spring Batch' },
            { name: 'Spring Security' },
            { name: 'Spring AI' },
            { name: 'View all projects', type: NAV_ELEMENT_TYPES.VIEWALL },
            { name: 'DEVELOPMENT TOOLS', type: NAV_ELEMENT_TYPES.SUBHEADER },
            { name: 'Spring Tools 4' },
            { name: 'Spring Initializr', icon: <ImageSpring /> },
        ],
    },
    {
        title: 'Academy',
        items: [{ name: 'Courses' }, { name: 'Get Certified' }],
    },
    {
        title: 'Solutions',
        items: [
            { name: 'Overview' },
            { name: 'Tanzu Spring' },
            { name: 'Spring Consulting' },
            { name: 'Spring Academy For Teams' },
            { name: 'Security Advisories' },
        ],
    },
    {
        title: 'Community',
        items: [{ name: 'Overview' }, { name: 'Events' }, { name: 'Autors' }],
    },
];

const Navigation = () => {
    const { width } = getWindowDimensions();
    if (width > 1000) {
        return (
            <div className={styles.header}>
                <NavDesktop navarray={navArray} />
            </div>
        );
    } else {
        return (
            <div className={styles.header}>
                <NavMobile navarray={navArray} />
            </div>
        );
    }
};

export default Navigation;
