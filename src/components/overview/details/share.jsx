import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, TwitterIcon, FacebookIcon, PinterestIcon } from 'react-share';
import Ratings from './ratings.jsx'

function Share({ items, itemsInfo, styles}) {
  return (
    <div className="shareButtons">
      <FacebookShareButton
        url="http://localhost:1100/"
        quote={`Very nice ${itemsInfo.name}`}
        hashtag={`${itemsInfo.category}`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url="http://localhost:1100/"
        quote={`Very nice ${itemsInfo.name}`}
        hashtag={`${itemsInfo.category}`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton
        url="http://localhost:1100/"
        media="http://localhost:1100/"
        description={`Very nice ${itemsInfo.name}`}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  );
}

export default Share;
