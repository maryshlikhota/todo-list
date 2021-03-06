import React from "react";
import { Link } from 'react-router-dom'

const AuthorItem = ({author}) => {
   return (
        <tr>
            <td>
                <Link to={`author/${author.username}`} >{author.username}</Link>
            </td>
            <td>
                {author.first_name}
            </td>
            <td>
                {author.last_name}
            </td>
            <td>
                {author.email}
            </td>
        </tr>
   )
}

const AuthorList = ({authors}) => {
   return (
        <div>
            <table className="Authors table">
                <tr>
                    <th>
                       Username
                    </th>
                    <th>
                       First name
                    </th>
                    <th>
                       Last name
                    </th>
                    <th>
                       Email
                    </th>
                </tr>
                {authors.map((author) => <AuthorItem author={author} />)}
            </table>
       </div>
   )
}

export default AuthorList