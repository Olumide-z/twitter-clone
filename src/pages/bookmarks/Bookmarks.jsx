import { useState } from 'react';
import { Sidebar, TrendsBar, Navbar } from '../../components';
import './bookmarks.css';

const Bookmarks = () => {
  const [name, setName] = useState('@Who_is_Emrys')
  return (
    <div className="bookmarks">
      <Sidebar />

      <div className="bookmarks__feeds">
        <Navbar title='Bookmarks' subTitle={name}/>

        <div className='bookmarks-div'>
          <div className="bookmarks-image">
            <img src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-400x200.v1.png" alt="bookmarks" />
          </div>
          <div className="bookmarks-text">
            <h3>Save Tweets for later</h3>
            <p>Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
          </div>
        </div>

      </div>

      <TrendsBar />
    </div>
  )
}

export default Bookmarks