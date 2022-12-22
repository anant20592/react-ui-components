import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import Link from "../link/Link";

const Alert = React.forwardRef((props, ref) => {
    const {variant, children} = props;
    const alertClasses = classNames({
        'rui-alert-container': true,
        'success': variant === 'success',
        'warn': variant === 'warn',
        'error': variant === 'error'
    })
    return(
        <div className={alertClasses} ref={ref}> 
            {children}
        </div>
    )
})
Alert.propTypes = {
    variant: PropTypes.oneOf(['success', 'warn', 'error']),
    children: PropTypes.any
}

Alert.defaultProps = {
    variant: 'success',
    children: null
}
export default Object.assign(Alert,{
    Link: Link
});