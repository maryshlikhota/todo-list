import React from "react";
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

const ToDoItem = ({todo_item}) => {
    return (
        <tr>
            <td>
                <Link to={`todo/${todo_item.id}`}>{todo_item.name}</Link>
            </td>
            <td>
                <Link to={`project/${todo_item.project.id}`}>{todo_item.project.name}</Link>
            </td>
            <td>
                {todo_item.author.first_name} {todo_item.author.last_name}
            </td>
            <td>
                {todo_item.text}
            </td>
            <td>
                <Moment format="YYYY-MM-DD HH:mm">{todo_item.created}</Moment>
            </td>
            <td>
                <Moment format="YYYY-MM-DD HH:mm">{todo_item.modified}</Moment>
            </td>
            <td>
                {todo_item.is_active.toString()}
            </td>
        </tr>
    )
}

const ToDoList = ({todo_list}) => {
    return (
        <div>
            <table className="ToDo table">
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Project
                    </th>
                    <th>
                        Author
                    </th>
                    <th>
                        Text
                    </th>
                    <th>
                        Created
                    </th>
                    <th>
                        Modified
                    </th>
                    <th>
                        Is_active
                    </th>
                </tr>
                {todo_list.map((todo_item) => <ToDoItem todo_item={todo_item} />)}
            </table>
        </div>
    )
}

export default ToDoList