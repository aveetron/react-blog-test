import './content.css';
import { useState } from "react";

const Content = () => {
    const blog_title = "Blog List";
    const [blogs, setBlogs] = useState([
        {id:1, name:'avee chakraborty',content: 'uheiuhfifhiu ihfiu rhfihefiuhriu'},
        {id:2, name:'biplob chakraborty',content: 'uheiuhfifhiu ihfiu rhfihefiuhriu'},
        {id:3, name:'prasanta chakraborty',content: 'uheiuhfifhiu ihfiu rhfihefiuhriu'}])

    return(
        <div className="content">
            <h2 className='blog-header'>{ blog_title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2 className="blog-title">{ blog.name }</h2>
                    <p className="blog-content">{ blog.content }</p>
                </div>
            ))}
        </div>
    )
}

export default Content;