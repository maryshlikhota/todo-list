import React from "react";

const ToDoItem = ({todo_item}) => {
    return (
        <tr>
            <td>
                {todo_item.name}
            </td>
            <td>
                {todo_item.project}
            </td>
            <td>
                {todo_item.author}
            </td>
            <td>
                {todo_item.text}
            </td>
            <td>
                {todo_item.created}
            </td>
            <td>
                {todo_item.modified}
            </td>
            <td>
                {todo_item.is_active}
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