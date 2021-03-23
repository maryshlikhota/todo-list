import React from "react";
import { Link } from 'react-router-dom'

const MemberItem = ({member}) => {
    return (
        <span>
            {member.first_name} {member.last_name}
        </span>
    )
}

const ProjectsItem = ({project}) => {
    return (
        <tr>
            <td>
                <Link to={`project/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                {project.members.map((member, i) => [
                    i > 0 && ", ",
                    <MemberItem key={i} member={member} />
                ])}
            </td>
        </tr>
    )
}

const ProjectsList = ({projects}) => {
    return (
        <div>
            <table className="Projects table">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Repository
                    </th>
                    <th>
                        Members
                    </th>
                </tr>
                {projects.map((project) => <ProjectsItem project={project} />)}
            </table>
        </div>
    )
}

export default ProjectsList