import "./tweet.css";
import moment from 'moment';

import { Avatar, Tooltip } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useRef, useEffect } from "react";

import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { useState } from "react";

const Tweet = ({ imageList, name, username, message, timestamp, singleTweet }) => {
  const [dropdown, setDropdown] = useState(false);
  const [like, setLike] = useState(0)

  const likedTweet = () => {
    if (singleTweet) {
      return setLike((prevLike) => prevLike + 1)
    }
  }

  const more = () => {
    setDropdown(true);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const m = new Date(timestamp?.seconds * 1000).toLocaleDateString()
  const time= moment.utc(timestamp?.seconds * 1000).utcOffset('+10:00');

  

  console.log('t', time)

  return (
    <div className="tweet">
      <div className="tweet-content">
        <div className="tweet-details">
          <Avatar className="icon">{name[0]}</Avatar>
          <div className="tweet-div1">
            <div className="tweet-div2">
              <p className="tweet-mobile">
                {name.length <= 12 ? name : `${name.slice(0, 12)}...`}
                <BsFillPatchCheckFill className="icon" />
                <span>
                  {username.length <= 12
                    ? username
                    : `${username.slice(0, 12)}...`}{" "}
                  · {moment(m).format('l')}
                </span>
              </p>
              <p className="tweet-big">
                {name} <BsFillPatchCheckFill className="icon" />
                <span>
                  {username} · {moment(m).format('l')}
                </span>
              </p>
              <p className="tweet-small">
                <h3>{name.length <= 9 ? name : `${name.slice(0, 9)}...`}</h3>
                <BsFillPatchCheckFill className="icon" />
                <span>
                  {" "}
                  {username.length <= 9
                    ? username
                    : `${username.slice(0, 9)}...`}{" "}
                  · {moment(m).format('l').slice(0, 4)}
                </span>
              </p>
            </div>
            <p>
              {message?.length <= 300 ? message : `${message?.slice(0, 300)}...`}
            </p>
          </div>
        </div>
        <div className="tweet-div3">
          <Tooltip title="More">
            <button onClick={more}>
              <MoreHorizIcon />
            </button>
          </Tooltip>
          {dropdown && (
            <div className="tweet__more" ref={menuRef}>
              <ul>
                <li>Unfollow {username}</li>
                <li>Add/remove {username} from Lists</li>
                <li>Block {username}</li>
                <li>Report Tweet</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* {imageList.map((url) => ( 
        <div className="tweet-image">
          <img src={url} alt="t" />
          </div>
         )) 
       }  */}
      

      <div className="tweet-icons">
        <Tooltip title="Reply">
          <span>
            <ChatBubbleOutlineIcon className="icon icon1" /> 
          </span>
        </Tooltip>
        <Tooltip title="Retweet">
          <span>
            <AiOutlineRetweet className="icon icon2" /> 1
          </span>
        </Tooltip>
        <Tooltip title={
          <div>Like</div>
        }>
          <span onClick={() => likedTweet()}>
            <FavoriteBorderIcon className="icon icon3" /> {like}
          </span>
        </Tooltip>
        <Tooltip title="Share">
          <span>
            <HiOutlineDownload className="icon icon4" />
          </span>
        </Tooltip>
      </div>

    </div>
  );
};

export default Tweet;
