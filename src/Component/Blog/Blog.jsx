// import author1 from '../../assets/images/boy1.png'
import { CiBookmarkCheck } from "react-icons/ci";


const Blog = ({blog, ClickHandelBookmark}) => {
    const {cover,author,reading_time,title, author_img,posted_date,hashtags}=blog
    return (
        <div className='mt-5 w-[500px] border p-10 bg-[#2b2c2f] rounded-2xl items-center text-white'>
            
            <img className="rounded-2xl" src={cover} alt="" />
            <div>
                <div className='flex justify-between items-center '>
                    <div className="flex items-center">
                        <img className="w-24" src={author_img} alt="" />
                       <div className="ml-[10px] font-bold">
                       <h1 >{author}</h1> 
                        <h2>{posted_date}</h2>
                       </div>
                    </div>
                   <div className='flex items-center'>
                   <p className='mr-2' >{reading_time} minit red  </p>
                   <button onClick={()=>ClickHandelBookmark(Blog)}>< CiBookmarkCheck className="text-3xl font-bold"></CiBookmarkCheck></button>
                   </div>
                </div>
            </div>
            <h1 className="text-4xl mt-3 font-bold">{title}</h1>

            {
                // eslint-disable-next-line react/prop-types
                hashtags.map((hash,idx) =><span key={idx}><a>#{hash}</a></span> )
            }
            
        </div>
    );
};

export default Blog;