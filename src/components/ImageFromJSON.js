import React from 'react'
import { testImg } from './imgToString.js';

function ImageFromJSON() {

    const decImg = atob(testImg)
  return (
    <div>
        <img src={decImg} alt = 'from b64'></img>
    </div>
  )
}

export default ImageFromJSON