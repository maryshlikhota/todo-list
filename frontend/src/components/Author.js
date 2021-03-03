import React from "react";

const AuthorItem = ({author}) => {
   return (
       <tr>
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
           <table className="Authors">
               <th>
                   First name
               </th>
               <th>
                   Last Name
               </th>
               <th>
                   Email
               </th>
               {authors.map((author) => <AuthorItem author={author} />)}
           </table>
       </div>
   )
}

export default AuthorList