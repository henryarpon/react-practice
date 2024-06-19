


function Tip({tip, onTip, children}) {

    return (
        <div>
            <label>{children}</label>
            <select value={tip} onChange={e => onTip(e.target.value)}>
                <option value={0}>Dissatisied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing (20%)</option>
            </select>
        </div>
    )
}

export default Tip;