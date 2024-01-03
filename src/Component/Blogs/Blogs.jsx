import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({ClickHandelBookmark}) => {
 const [blogs, setBlogs]=useState([])
 useEffect(()=>{
    fetch('cafa.json')
    .then(Response=>Response.json())
    .then(data =>setBlogs(data))
 },[])
    return (
        <div className="w-2/3 ">
            <h1>This is blog site:{blogs.length} </h1>

           <div className="mt-5">
           {
                blogs.map(blog => <Blog ClickHandelBookmark={ClickHandelBookmark} blog={blog} key={blog.id}></Blog>)
            }
           </div>
            
        </div>
    );
};

export default Blogs;