
function Bill({ bill, onBill, children }) {
    return (
        <div>
            <label htmlFor="bill">How much was the bill?</label>
            <input 
                type="number" 
                name="bill" 
                id="bill" 
                value={bill} 
                onChange={(event) => onBill(event.target.value)} 
            />
            {children}
        </div>
    );
}

export default Bill;
