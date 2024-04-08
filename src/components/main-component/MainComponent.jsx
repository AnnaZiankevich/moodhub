import React from "react"
import MyDiary from '../../views/my-diary/MyDiary.jsx'
import AboutDiary from '../../views/about-diary/AboutDiary.jsx'
import ForAlexithymitists from '../../views/for-alexithymitists/ForAlexithymitists.jsx'
import { Route, Routes } from "react-router-dom";

function MainComponent() {
    return ( 
        <div className="page-content">
            <Routes>
                <Route path="/moodhub" element={<MyDiary />} /> 
                <Route path="/about-diary" element={<AboutDiary />}/>
                <Route path="/for-alexithymitists" element={<ForAlexithymitists />}/>
            </Routes>
            {/* {console.log('Created routes')} */}
        </div>
     );
}

export default MainComponent;