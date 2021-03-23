import React from "react";
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ToDoItemDescr = ({todo_item}) => {
    return (
        <div>
            <h1>{todo_item.name}</h1>
            <div className="TextBlock">
                <span>Project:</span>
                <Link to={`/project/${todo_item.project.id}`}>{todo_item.project.name}</Link>
            </div>
            <div className="TextBlock">
                <span>Author:</span>
                <Link to={`/author/${todo_item.author.username}`} >
                    {todo_item.author.first_name} {todo_item.author.last_name}
                </Link>
            </div>
            <div className="TextBlock">
                <span>Text:</span>
                {todo_item.text}
            </div>
            <div className="TextBlock">
                <span>Created:</span>
                <Moment format="YYYY-MM-DD HH:mm">{todo_item.created}</Moment>
            </div>
            <div className="TextBlock">
                <span>Modified:</span>
                <Moment format="YYYY-MM-DD HH:mm">{todo_item.modified}</Moment>
            </div>
            <div className="TextBlock">
                <span>is active:</span>
                {todo_item.is_active.toString()}
            </div>
        </div>
    )
}

const ToDoItem = ({todo_list}) => {
    let { id } = useParams();
    let filtered_todo = todo_list.filter((todo_item) => todo_item.id == id);
    return (
        <div className="ContentInner">
            {filtered_todo.map((todo_item) => <ToDoItemDescr todo_item={todo_item} />)}
        </div>
    )
}

export default ToDoItem