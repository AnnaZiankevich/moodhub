import React, { useState } from "react"
import './super-bad-emotion.scss'

function SuperBadEmotion( {label, isChoosed, isDisabled} ) {

  const defaultChoosed = isChoosed ? isChoosed : false;
  const [choosed, setChoosed] = useState(defaultChoosed);

  return (
    <>
        <button className={`super-bad-emotion ${choosed ? 'choosed' : ''}`}
           disabled={isDisabled}
           onClick={() => setChoosed((prev) => !prev)}
           type="button">
            {label}
        </button>
    </>
  );
}

export default SuperBadEmotion;