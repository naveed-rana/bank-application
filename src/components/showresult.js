import React from 'react';

const Showresult = (props)=> {
    return (
        
            <tr>
         <td>{props.data.id}</td>
          <td>{props.data.name}</td>
           <td>{props.data.accounttype}</td>
             <td>
             {props.data.amount}
          </td>
       </tr>
       
    )
}

export default Showresult;
