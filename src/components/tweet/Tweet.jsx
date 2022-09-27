import './tweet.css';

import { Avatar, Tooltip } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'

import { BsFillPatchCheckFill } from 'react-icons/bs';
import {AiOutlineRetweet} from 'react-icons/ai';
import {HiOutlineDownload} from 'react-icons/hi';
import { useState } from 'react';

const Tweet = () => {
    const [dropdown, setDropdown] = useState(false);

    const more = () => {setDropdown(true)}

  return (
    <div className="tweet">
        <div className="tweet-content">

            <div className="tweet-details">
                <Avatar className='icon'/>
                <div className='tweet-div1'>
                    <div className='tweet-div2'>
                        <p>Jardon Sancho<BsFillPatchCheckFill className='icon'/><span> @Sanchooo10 · 30m</span></p>    
                    </div>
                    <p>Hello, I am new here...</p>
                </div>
            </div>
            <div className="tweet-div3">
                <Tooltip title='More'><button onClick={more}><MoreHorizIcon /></button></Tooltip>
                { dropdown && (
                    <div className="tweet__more">
                    <ul>
                        <li>Unfollow @Sanchooo10</li>
                        <li>Add/remove @Sanchooo10 from Lists</li>
                        <li>Block @Sanchooo10</li>
                        <li>Report Tweet</li>
                    </ul>
                    </div> 
                )}
            </div>

        </div>

        <div className="tweet-image">
            <img src='https://pbs.twimg.com/media/FcuV5KKXgAAwE-F?format=jpg&name=small' alt='photo'/>
        </div>

        <div className="tweet-icons">
            <Tooltip title='Reply'><span><ChatBubbleOutlineIcon className='icon icon1'/> 71</span></Tooltip>
            <Tooltip title='Retweet'><span><AiOutlineRetweet className='icon icon2'/> 52</span></Tooltip>
            <Tooltip title='Like'><span><FavoriteBorderIcon className='icon icon3'/> 7,522</span></Tooltip>
            <Tooltip title='Share'><span><HiOutlineDownload className='icon icon4'/></span></Tooltip>
        </div>   
    </div>
  )
}

export default Tweet