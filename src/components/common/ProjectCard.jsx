import React, { Component } from 'react';

const ProjectCard = ({onClick, onMouseOver, onMouseOut, frontTitle, backTitle, description, link, img, alt, subTitle}) => {
    return (<div
        className="portfolio"
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
      >
        <div className="front">
          <img
            src={img}
            alt={alt}
          />
          <div className="project_title">
            <span>{frontTitle}</span>

            {subTitle ? (<span>{subTitle}</span>) : <></>}

            
          </div>
        </div>
        <div className="back">
          <div>
            <h2 className="proj_title">
              {backTitle}
            </h2>
            <div>
              {description}
            </div>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out
          </a>
        </div>
      </div>);
}
 
export default ProjectCard;