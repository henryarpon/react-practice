import { useState } from "react";

function Form({ onAddItems }) {

    const [ description, setDescription ] = useState("");
    const [ quantity, setQuantity ] = useState(1);
    
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

    function handleSubmit(e) {
        e.preventDefault();

        if(!description) return;

        const newitem = {description, quantity, packed: false, id: Date.now()}

        onAddItems(newitem);

        setDescription("");
        setQuantity(1);
    }

    return (
            <form className="add-form" onSubmit={handleSubmit}>
                <label htmlFor="quantity">What do you need for your trip?</label>
                <select id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {numbers.map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                <input type="text" id="item" name="item" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button>Add</button>
            </form>
    ) 
}


export default Form;