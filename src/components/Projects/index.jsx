import { useState } from "react";
import ProjectsList from "./ProjectsList";
import SearchBar from "./SearchBar";

import springBoot from "../../assets/spring-boot.svg";
import springFramework from "../../assets/spring-framework.svg";
import springData from "../../assets/spring-data.svg";
import springCloud from "../../assets/spring-cloud.svg";
import springDataFlow from "../../assets/spring-data-flow.svg";
import springSecurity from "../../assets/spring-security.svg";

const defaultProjects = [
      {
            name: "Spring Boot",
            text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
            imgUrl: springBoot,
            link: "",
      },
      {
            name: "Spring Framework",
            text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
            imgUrl: springFramework,
            link: "",
      },
      {
            name: "Spring Data",
            text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
            imgUrl: springData,
            link: "",
      },
      {
            name: "Spring Cloud",
            text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
            imgUrl: springCloud,
            link: "",
      },
      {
            name: "Spring Cloud Data Flow",
            text: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
            imgUrl: springDataFlow,
            link: "",
      },
      {
            name: "Spring Scurity",
            text: "Protects your application with comprehensive and extensible authentication and authorization support.",
            imgUrl: springSecurity,
            link: "",
      },
];

const Projects = () => {
      const [projects, setProjects] = useState(defaultProjects);

      const filterProjects = (searchTerm) => {
            const filteredProjects = defaultProjects.filter(
                  (project) =>
                        project.name.toLowerCase().includes(searchTerm) ||
                        project.text.toLowerCase().includes(searchTerm),
            );

            setProjects(filteredProjects);
      };

      return (
            <div className="has-background-light py-6 has-bing-bordder-bottom">
                  <SearchBar onSearch={filterProjects} />
                  <ProjectsList projects={projects} />
            </div>
      );
};

export default Projects;
