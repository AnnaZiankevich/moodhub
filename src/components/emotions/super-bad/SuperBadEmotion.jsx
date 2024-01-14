import React, { useState } from "react"
import './super-bad-emotion.scss'

function SuperBadEmotion( {label, isChoosed, isDisabled} ) {

  const defaultChoosed = isChoosed ? isChoosed : false;
  const [choosed, setChoosed] = useState(defaultChoosed);

  return (
    <>
        {console.log('Rendered SuperBadEmotion')}
        <button className={`super-bad-emotion ${choosed ? 'choosed' : ''}`}
           disabled={isDisabled}
           onClick={() => setChoosed((prev) => !prev)}>
            {label}
        </button>
    </>
  );
}

export default SuperBadEmotion;