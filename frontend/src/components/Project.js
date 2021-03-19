import React from "react";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
               {project.name}
            </td>
            <td>
               {project.repository}
            </td>
            <td>
               {project.members}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
   return (
        <div>
           <table className="Projects table">
               <th>
                   Name
               </th>
               <th>
                   Repository
               </th>
               <th>
                   Members
               </th>
               {projects.map((project) => <ProjectItem project={project} />)}
           </table>
       </div>
   )
}

export default ProjectList