import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
      return (
            <div class="container">
                  <div class="list columns is-multiline ph-6">
                        {projects.length === 0
                              ? "No results"
                              : projects.map((item) => (
                                      <ProjectCard {...item} />
                                ))}
                  </div>
            </div>
      );
};

export default ProjectsList;
