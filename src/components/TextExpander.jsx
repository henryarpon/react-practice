import { useState } from 'react';
import PropTypes from 'prop-types';

TextExpander.propTypes = {
    children: PropTypes.node,
    collapsedNumWords: PropTypes.number,
    expandButtonText: PropTypes.string,
    collapseButtonText: PropTypes.string,
    buttonColor: PropTypes.string,
    className: PropTypes.string,
    expanded: PropTypes.bool,

};

function TextExpander( 
    
    {children, 
    collapsedNumWords = 10,
    expandButtonText = "Show less",
    collapseButtonText = "Show more", 
    buttonColor = "blue", 
    className,
    expanded = false } ) 
    
    {

        const [ isExpanded, setIsExpanded ] = useState(expanded);

        function handleOnClick() {
            setIsExpanded(isExpanded => !isExpanded);
        }

        const buttonStyle = {
            color: buttonColor,
            border: 'none', 
            background: 'none',
            cursor: 'pointer', 
        };



        return  (<div>{ isExpanded ? children : `${children.split(" ").slice(0, collapsedNumWords).join(" ")} ...`}
                    <span>
                        <button style={buttonStyle} className={className} onClick={handleOnClick}>
                            { isExpanded ? expandButtonText : collapseButtonText}
                        </button>
                    </span>
                </div>);
}

export default TextExpander;

  

