import React from 'react';

const View = ({groceries}) => {
    return groceries.map(grocery =>(
        <tr key={grocery.item}>
            <td>{grocery.item}</td>
            <td> {grocery.brand}</td>
            <td>{grocery.units}</td>
            <td>{grocery.quantity}</td>
            <td><input type="checkbox" /></td>

        </tr>
    ))
       
    
};

export default View;