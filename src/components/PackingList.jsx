/* eslint-disable react/prop-types */

import Item from './Item';
import { useState } from 'react';


function PackingList({items, onDeleteItem, onToggleCheck, handleReset}) {

    const [ selection, setSelection ] = useState("input");

    let selected;

    if (selection === "packed") {
       selected = items.filter(item => item.packed == true);
    } else if (selection === "description") {
        selected = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    } else {
        selected = items;
    }

    return (
        <div className="list">
            <ul>
                {selected.map((item) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleCheck={onToggleCheck}/>
                ))}
            </ul>

            <div className="actions">
                <select value={selection} onChange={(e) => setSelection(e.target.value)}>
                    <option value="input">Sort by input</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed</option>
                </select>

                <button onClick={handleReset}>Clear List</button>
            </div>

        </div>
    )
}

export default PackingList;