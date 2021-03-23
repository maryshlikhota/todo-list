import React from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const AuthorItemDescr = ({author}) => {
    return (
        <div className="ContentWrap">
            <h1>{author.first_name} {author.last_name}</h1>
            <div className="TextBlock">
                <span>Username:</span>
                {author.username}
            </div>
            <div className="TextBlock">
                <span>Email:</span>
                {author.email}
            </div>
        </div>
    )
}

const AuthorItem = ({authors}) => {
    let { username } = useParams();
    let filtered_authors = authors.filter((author) => author.username == username);
    return (
        <div className="ContentInner">
            {filtered_authors.map((author) => <AuthorItemDescr author={author} />)}
        </div>
    )
}

export default AuthorItem