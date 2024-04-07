import React, { useState } from "react"
import './mid-emotion.scss'

function MidEmotion( {label, isChoosed, isDisabled} ) {

  const defaultChoosed = isChoosed ? isChoosed : false;
  const [choosed, setChoosed] = useState(defaultChoosed);

  return (
    <>
        <button className={`mid-emotion ${choosed ? 'choosed' : ''}`}
           disabled={isDisabled}
           onClick={() => setChoosed((prev) => !prev)}
           type="button">
            {label}
        </button>
    </>
  );
}

export default MidEmotion;