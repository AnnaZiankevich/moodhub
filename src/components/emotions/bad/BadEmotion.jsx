import React, { useState } from "react"
import './bad-emotion.scss'

function BadEmotion( {label, isChoosed, isDisabled} ) {

  const defaultChoosed = isChoosed ? isChoosed : false;
  const [choosed, setChoosed] = useState(defaultChoosed);

  return (
    <>
        {console.log('Rendered BadEmotion')}
        <button className={`bad-emotion ${choosed ? 'choosed' : ''}`}
           disabled={isDisabled}
           onClick={() => setChoosed((prev) => !prev)}>
            {label}
        </button>
    </>
  );
}

export default BadEmotion;