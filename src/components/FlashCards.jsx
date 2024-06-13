/* eslint-disable react/prop-types */

import { useState } from "react";


function FlashCards({question}) {

    const [ item, setItem ] = useState(true);

    function handleClick() {
        setItem((item) => !item);
    }

    return (
        <div onClick={handleClick} className={ item || "selected" }>{item ? question.question : question.answer}</div>
    )
}

export default FlashCards;
