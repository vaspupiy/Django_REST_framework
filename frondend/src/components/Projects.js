import React from "react";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const ProjectItem = ({ project }) => {
    return (
        <tbody>
            <tr>
                <td>
                    <Link to={`project/${project.id}`}>{project.id}</Link>
                </td>
                <td>
                    {project.name}
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

const ProjectListItem = ({ projects }) => {
    let { id } = useParams();
    let filtered_items = projects.filter((item) => item.id == id)
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
            {filtered_items.map((project) => <ProjectItem project={project} />)}
        </Table>
    )
}

export { ProjectList, ProjectListItem }