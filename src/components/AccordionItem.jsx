

function AccordionItem({num, title, currOpen, onOpen, children}) {

    const isOpen = num === currOpen;

    function handleClick() {
        onOpen( isOpen ? null : num );
    }

    return(
        <div className="item" onClick={handleClick}>
            <p className="number">{num + 1}</p>
            <p className="text">{title}</p>
            <p className="icon">{isOpen ? '\u2212' : '\u002B' }</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    )
}

export default AccordionItem;