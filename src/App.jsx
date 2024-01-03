
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMark from './Component/BookMark/BookMark'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  const ClickHandelBookmark = (blog)=>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  

  return (
    <div className='max-w-6xl m-auto'>
    <Header></Header>
    
     <div className='flex '>
     <Blogs ClickHandelBookmark={ClickHandelBookmark}></Blogs>
      <BookMark bookmarks={bookmarks}></BookMark>
     </div>
    </div>
  )
}

export default App
