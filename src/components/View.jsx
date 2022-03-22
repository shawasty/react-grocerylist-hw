import React from 'react';
import { FaTrashAlt} from "react-icons/fa"

const View = ({groceries,deleteGrocery }) => {
    return groceries.map(grocery =>(
        <tr key={grocery.item}>
            <td>{grocery.item}</td>
            <td> {grocery.brand}</td>
            <td>{grocery.units}</td>
            <td>{grocery.quantity}</td>
            <td>{grocery.isPurchased}</td>
            <td className='delete-btn' 
            onClick={()=>deleteGrocery(grocery.item)}>
                <FaTrashAlt/>
            </td>

        </tr>
    ))
    // {grocery.purchased}
    
};

export default View;