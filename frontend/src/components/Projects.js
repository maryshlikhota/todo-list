import React from "react";

const MemberItem = ({member}) => {
    return (
        <li>
            {member}
        </li>
    )
}

const MemberList = ({members, authors}) => {
    return (
        <ul>
            {members.map((member) => <MemberItem member={member} />)}
        </ul>
    )
}


const ProjectItem = ({project, authors}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                {project.members.map((members) => <MemberList members={project.members} authors={authors}/>)}
            </td>
        </tr>
    )
}

const ProjectList = ({projects, authors}) => {
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
                {projects.map((project) => <ProjectItem project={project} authors={authors}/>)}
            </table>
        </div>
    )
}

export default ProjectList