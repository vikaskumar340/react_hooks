import withData from "./withData";
import PostList from "./PostList";

const PostWithData = withData(PostList, 'https://jsonplaceholder.typicode.com/posts');

export default PostWithData;