import "./tweetInput.css";

import { useState } from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import GifBoxIcon from "@mui/icons-material/GifBox";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PlaceIcon from "@mui/icons-material/Place";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeTweet } from "../../features/modalSlice";

const TweetInput = ({ modal, input, setInput, sendTweet, file, setFile }) => {

  const dispatch = useDispatch();

  return (
    <div className={modal ? "tweetInput tModal" : "tweetInput"}>
      {modal && (
        <CloseIcon className="icon" onClick={() => dispatch(closeTweet())} />
      )}
      <div className="tweetInput-content">
        <Avatar className="icon" />

        <form className="tweetInput-form">
          <input
            type="text"
            placeholder="What's happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* {file && (
            <div className="tweetInput-form_image">
              <CloseIcon
                className="image-close-icon"
                onClick={() => setFile(false)}
              />
              <img src={file && URL.createObjectURL(file)} alt="file" />
            </div>
          )} */}

          <div>
            <div className="form-icons">
              <div className="image-logo">
                <label htmlFor="file">
                  <PhotoIcon className="tweetInput-icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <GifBoxIcon className="tweetInput-icon" />
              <SentimentSatisfiedAltIcon className="tweetInput-icon" />
              <PlaceIcon className="tweetInput-icon" />
            </div>
            <button onClick={sendTweet} className={input.length > 0 ? 'darkBtn' : 'lightBtn'}>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetInput;
