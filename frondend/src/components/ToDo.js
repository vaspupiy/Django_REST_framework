import React from "react";
import Table from 'react-bootstrap/Table'

const ToDoItem = ({ todo }) => {
    return (
        <tbody>
            <tr>
                <td>
                    {todo.author}
                </td>
                <td>
                    {todo.project}
                </td>
                <td>
                    {todo.title}
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.created_add}
                </td>
                <td>
                    {todo.updated_add}
                </td>
            </tr>
        </tbody>
    )
}


const ToDoList = ({ todos }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>
                        Author
                    </th>
                    <th>
                        Project
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Text
                    </th>
                    <th>
                        Created_add
                    </th>
                    <th>
                        Updated_add
                    </th>
                </tr>
            </thead>
            {todos.map((todo) => <ToDoItem todo={todo} />)}
        </Table>
    )
}

export default ToDoList