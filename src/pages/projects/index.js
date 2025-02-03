import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectCard from '../../components/projectCard/ProjectCard';
import { projectData } from '../../data/data';

function Projects() {
    return (
        <div className='container pt-4'>
            <div className="row">
                <h2>Projects</h2>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
}

export default Projects;
