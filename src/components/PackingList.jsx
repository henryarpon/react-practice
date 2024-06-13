/* eslint-disable react/prop-types */

import Item from './Item';


function PackingList({items}) {
    
    return (
        <ul className="list">
            {items.map((item) => (
                <Item item={item} key={item.id}/>
            ))}
        </ul>
    )
}

export default PackingList;