import PostItem from "./PostItem";

function PostComponent(props) {
    const {posts} = props;
    return(
        <>
            {posts.map((post, index) => {
                return(
                    <PostItem
                        key={index}
                        title={post.title}
                        description={post.body}
                    />
                )
            })}
        </>
    )
}

export default PostComponent;