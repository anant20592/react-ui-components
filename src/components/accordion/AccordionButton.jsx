import React, { useContext } from "react";
import classNames from "classnames";
import AccordionContext from './AccordionContext';
import AccordionItemContext from "./AccordionItemContext";
import { KeyboardArrowDown } from '@mui/icons-material';
const AccordionButton = React.forwardRef((props, ref) => {
    const {as : Component= 'button' , className, children} = props;
    const {setActiveKey} = useContext(AccordionContext);
    const {eventKey} = useContext(AccordionItemContext)
    const handleSubmit = () => {
        console.log(eventKey);
        setActiveKey(eventKey)
    }
    return(
        <Component ref={ref} className={classNames(className)} onClick={handleSubmit}>{children}<KeyboardArrowDown/></Component>
    )
})

export default AccordionButton;