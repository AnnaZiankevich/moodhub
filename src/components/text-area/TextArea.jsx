import React, { useState } from "react"
import './text-area.scss'

function TextArea({label, name, value}) {

  const [taValue, setTAValue] = useState(value);

  return (
    <div className="text-area">
        <label className='text-area__label'>{label}</label>
        <textarea name={name} 
                  value={taValue} 
                  onChange={() => setTAValue()}
        />
    </div>
  );
}

export default TextArea; 