import React from 'react';

const User = ({user , index}) => {
    const {email , _id} = user;
    return (
        <tr>
        <th>{index +1 }</th>
        <td>{email}</td>
        <td>{_id}</td>
       
      </tr>
    
    );
};

export default User;