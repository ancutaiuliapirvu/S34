function PostItem(props) {
    const {title, description} = props;
    return(
        <>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    )
}

export default PostItem;