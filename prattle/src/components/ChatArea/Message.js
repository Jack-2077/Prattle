import React from 'react';

export default function Message(props) {
  return (
    <div>
      <div className='bubbleWrapper'>
        <div className='inlineContainer'>
          <img
            className='inlineIcon'
            src='https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
          />
          <div className='otherBubble other'>No ninjas!</div>
        </div>
        <span className='other'>08:41</span>
      </div>
      <div className='bubbleWrapper'>
        <div className='inlineContainer own'>
          <img
            className='inlineIcon'
            src='https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png'
          />
          <div className='ownBubble own'>
            The first rule of being a ninja is, 'Do no harm.'
          </div>
        </div>
        <span className='own'>08:55</span>
      </div>
      <div className='bubbleWrapper'>
        <div className='inlineContainer'>
          <img
            className='inlineIcon'
            src='https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
          />
          <div className='otherBubble other'>
            Knowing when to leave requires training.
          </div>
        </div>
      </div>
      <span className='other'>10:13</span>
      <div className='bubbleWrapper'>
        <div className='inlineContainer own'>
          <img
            className='inlineIcon'
            src='https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png'
          />
          <div className='ownBubble own'>Stunned but impressed.</div>
        </div>
        <span className='own'>11:07</span>
      </div>
      <div className='bubbleWrapper'>
        <div className='inlineContainer'>
          <img
            className='inlineIcon'
            src='https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png'
          />
          <div className='otherBubble other'>How about throwing stars?</div>
        </div>
        <span className='other'>11:11</span>
      </div>
    </div>
  );
}
