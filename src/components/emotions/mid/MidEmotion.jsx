import React, { useState } from "react"
import './mid-emotion.scss'

function MidEmotion( {label, isChoosed, isDisabled} ) {

  const defaultChoosed = isChoosed ? isChoosed : false;
  const [choosed, setChoosed] = useState(defaultChoosed);

  return (
    <>
        {console.log('Rendered MidEmotion')}
        <button className={`mid-emotion ${choosed ? 'choosed' : ''}`}
           disabled={isDisabled}
           onClick={() => setChoosed((prev) => !prev)}>
            {label}
        </button>
    </>
  );
}

export default MidEmotion;