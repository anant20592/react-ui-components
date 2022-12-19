function Link(props){
    const {children, url} = props
    return(
        <a href={url} >{children}</a>
    )
}

export default Link;