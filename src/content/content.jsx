import { useState } from "react";

const Content = () => {

    const [blogs, setBlogs] = useState([
        {id:1, name:'avee chakraborty',content: 'uheiuhfifhiu ihfiu rhfihefiuhriu'},
        {id:2, name:'biplob chakraborty',content: 'uheiuhfifhiu ihfiu rhfihefiuhriu'},
        {id:3, name:'prasanta chakraborty',content: 'uheiuhfifhiu ihfiu rhfihefiuhriu'}])

    return(
        <div className="content">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.name }</h2>
                    <p>{ blog.content }</p>
                </div>
            ))}
        </div>
    )
}

export default Content;