import React, { useState } from "react"
import './text-area.scss'

function TextArea({label, name, value, onChange}) {

  const [taValue, setTAValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTAValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="text-area">
        <label className='text-area__label'>{label}</label>
        <textarea name={name} 
                  value={taValue} 
                  onChange={handleChange}
        />
    </div>
  );
}

export default TextArea; 