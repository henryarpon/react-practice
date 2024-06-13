/* eslint-disable react/prop-types */

function Items({item}) {


    return (
        <li>
            <span>{item.quantity}</span>
            <span>{item.description}</span>
            <span>&times;</span>
        </li>
    )
}

export default Items;