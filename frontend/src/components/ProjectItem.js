import React from "react";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MemberItem = ({member}) => {
    return (
        <li>
            <Link to={`/author/${member.username}`} >{member.first_name} {member.last_name}</Link>
        </li>
    )
}

const ProjectItemDescr = ({project}) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <div className="TextBlock">
                <span>Repository:</span>
                {project.repository}
            </div>
            <div className="TextBlock">
                <span>Members:</span>
                <ul>
                    {project.members.map((member) => <MemberItem member={member} />)}
                </ul>
            </div>
        </div>
    )
}

const ProjectItem = ({projects}) => {
    let { id } = useParams();
    let filtered_projects = projects.filter((project) => project.id == id);
    return (
        <div className="ContentInner">
            {filtered_projects.map((project) => <ProjectItemDescr project={project} />)}
        </div>
    )
}

export default ProjectItem