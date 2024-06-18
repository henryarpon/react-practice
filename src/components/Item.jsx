/* eslint-disable react/prop-types */


function Items({item, onDeleteItem, onToggleCheck}) {

    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onToggleCheck(item.id)}/>
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
            <button onClick={ () => onDeleteItem(item.id) }>❌</button>
        </li>
    )
}

export default Items;