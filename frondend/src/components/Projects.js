import React from "react";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'


const ProjectItem = ({ project }) => {
    return (
        <tbody>
            <tr>
                <td>
                    <Link to={`project/${project.uid}`}>{project.name}</Link>
                </td>
                <td>
                    {project.link}
                </td>
                <td>
                    {/* {project.worker} */}
                    {JSON.stringify(project.worker)}
                </td>
            </tr>
        </tbody>
    )
}


const ProjectList = ({ projects }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>
                        ProjectName
                    </th>
                    <th>
                        Link
                    </th>
                    <th>
                        Worker
                    </th>
                </tr>
            </thead>
            {projects.map((project) => <ProjectItem project={project} />)}
        </Table>
    )
}

export default ProjectList