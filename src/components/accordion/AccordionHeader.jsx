import React from "react";
import classNames from "classnames";
import AccordionButton from "./AccordionButton";
 
const AccordionHeader = React.forwardRef((props, ref) => {
    const {as: Component = 'h2', className, children, onClick} = props;
    const accordionHeaderClasses = classNames({
        className,
        'rui-accordion-header': true
    })
    return(
        <Component ref={ref} className={accordionHeaderClasses} {...props}>
            <AccordionButton onClick={onClick}>{children}</AccordionButton>
        </Component>
    )
})

export default AccordionHeader;