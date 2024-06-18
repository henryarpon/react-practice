


function Stats({ items }) {

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentagePacked = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

    return (
        <footer className="stats">
            <em>You have { numItems } item/s in your list, and you already packed { numPacked } ({percentagePacked}%)</em>
        </footer>
    )
}

export default Stats;