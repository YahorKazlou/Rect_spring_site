import React from "react";

const ProjectCard = ({ link, imgUrl, name, text }) => (
      <article>
            <a className="box is-special item" href={link}>
                  <div className="project-item">
                        <div className="image">
                              <img src={imgUrl} alt={name} />
                        </div>
                        <div className="project-info">
                              <h1 className="is-size-4 has-text-weight-medium">
                                    {name}
                              </h1>
                              <p className="py-3">{text}</p>
                        </div>
                  </div>
            </a>
      </article>
);
export default ProjectCard;
