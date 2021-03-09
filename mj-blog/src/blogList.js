import {Link} from 'react-router-dom';

const BlogList = ({blogs}) => {
    // const blogs = props.blogs;

    
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                    //console.log(blog);
                    <div className="blog-preview" key={blog.id}>
                        <Link to={'/blogs/'+blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written By: {blog.author}</p>
                        </Link>
                        
                        
                    </div>
                ))}
        </div>
     );
}
 
export default BlogList;