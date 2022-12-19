import classNames from "classnames";
import React, {useMemo, useState} from "react";
import "./accordion.scss";
import PropType from 'prop-types';
import AccordionButton from "./AccordionButton";
import AccordionHeader from "./AccordionHeader";
import AccordionContext from "./AccordionContext";


const Accordion = React.forwardRef((props, ref) => {
    const {as: Component = 'div', className, flush, children} = props;
    const [activeKey, setActiveKey] = useState("0")
    console.log("Accordion - ", activeKey)
    const handleContext = useMemo(
        () => ({
          activeKey: activeKey
        }),
        [activeKey],
      );
    
    const accordionClasses = classNames({
        'accordion': true,
        className,
        'flush': flush
    })
    return(
        <AccordionContext.Provider value={{activeKey, setActiveKey}}>
        <Component ref={ref} {...props}  className={accordionClasses}>{children}</Component>
        </AccordionContext.Provider>
    )
})

Accordion.propTypes = {
    children: PropType.any,
    className: PropType.string,
    flush: PropType.bool,
    as: PropType.any
}

Accordion.defaultProps = {
    children: null,
    className: '',
    flush: false,
    as: 'div'
}
export default Object.assign(Accordion,{Header: AccordionHeader, Button: AccordionButton});