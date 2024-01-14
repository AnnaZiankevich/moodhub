import React, { useState } from "react"
import './good-emotion.scss'

function GoodEmotion( {label, isChoosed, isDisabled} ) {

  const defaultChoosed = isChoosed ? isChoosed : false;
  const [choosed, setChoosed] = useState(defaultChoosed);

  return (
    <>
        {console.log('Rendered GoodEmotion')}
        <button className={`good-emotion ${choosed ? 'choosed' : ''}`}
           disabled={isDisabled}
           onClick={() => setChoosed((prev) => !prev)}
           type="button">
            {label}
        </button>
    </>
  );
}

export default GoodEmotion;